// src/components/dashboard/statsCard.jsx
import React from 'react'
import { motion } from 'framer-motion'

const StatsCard = ({ title, value, icon: Icon, color, change, trend = 'up' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="glassmorphism rounded-2xl p-6 border border-white/10 hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {change && (
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`text-sm ${trend === 'up' ? 'text-green-400' : 'text-red-400'} bg-white/10 px-2 py-1 rounded-full`}
          >
            {trend === 'up' ? '↑' : '↓'} {change}
          </motion.span>
        )}
      </div>
      <h3 className="text-gray-400 text-sm mb-1 font-medium">{title}</h3>
      <p className="text-3xl font-bold text-white">{value}</p>
    </motion.div>
  )
}

export default StatsCard