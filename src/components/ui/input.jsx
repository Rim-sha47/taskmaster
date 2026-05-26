// src/components/ui/Input.jsx
import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const Input = ({ 
  label, 
  type = 'text', 
  icon: Icon, 
  error, 
  required,
  className = '',
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const inputType = type === 'password' && showPassword ? 'text' : type
  
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        )}
        <input
          type={inputType}
          className={`w-full px-4 py-3 bg-white/5 border rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder-gray-400 ${
            Icon ? 'pl-10' : ''
          } ${error ? 'border-red-500' : 'border-white/10'} ${className}`}
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  )
}

export default Input