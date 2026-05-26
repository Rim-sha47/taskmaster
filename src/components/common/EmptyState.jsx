// src/components/common/EmptyState.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Inbox, Plus } from 'lucide-react'

const EmptyState = ({ title, description, action, actionText, icon: Icon = Inbox }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-16 px-4"
    >
      <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 neon-glow">
        <Icon className="w-12 h-12 text-purple-400" />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-6 max-w-md mx-auto">{description}</p>
      {action && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={action}
          className="inline-flex items-center gap-2 px-6 py-3 gradient-bg rounded-xl hover:shadow-lg transition-all"
        >
          <Plus className="w-5 h-5" />
          {actionText}
        </motion.button>
      )}
    </motion.div>
  )
}

export default EmptyState