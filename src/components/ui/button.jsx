// src/components/ui/Button.jsx
import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false, 
  disabled = false,
  onClick,
  className = '',
  icon: Icon,
  ...props 
}) => {
  const variants = {
    primary: 'gradient-bg text-white hover:shadow-lg',
    secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/10',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white',
    outline: 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10',
    ghost: 'hover:bg-white/10 text-gray-300 hover:text-white',
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  }
  
  return (
    <motion.button
      whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${disabled || isLoading ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}
      {...props}
    >
      {isLoading && (
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}
      {Icon && !isLoading && <Icon className="w-4 h-4" />}
      {children}
    </motion.button>
  )
}

export default Button
