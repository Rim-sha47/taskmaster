// src/components/ui/PageHeader.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const PageHeader = ({ title, subtitle, showBack = false, actions }) => {
  const navigate = useNavigate()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-400 hover:text-white mb-3 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back</span>
            </button>
          )}
          <h1 className="text-3xl md:text-4xl font-bold gradient-text">{title}</h1>
          {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
        </div>
        {actions && <div className="flex gap-3">{actions}</div>}
      </div>
    </motion.div>
  )
}

export default PageHeader