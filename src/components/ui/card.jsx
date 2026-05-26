// src/components/ui/Card.jsx
import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ children, className = '', hover = true, padding = 'p-6' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -5 } : {}}
      className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 ${padding} ${hover ? 'transition-all duration-300 hover:shadow-2xl' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card