// src/components/dashboard/ProgressChart.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Award, Target } from 'lucide-react'

const ProgressChart = ({ data, title = "Progress Overview" }) => {
  const getProgressColor = (percentage) => {
    if (percentage >= 80) return 'from-green-500 to-green-600'
    if (percentage >= 50) return 'from-blue-500 to-blue-600'
    if (percentage >= 30) return 'from-yellow-500 to-yellow-600'
    return 'from-red-500 to-red-600'
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-400" />
          <span className="text-green-400 font-semibold">{data?.completionRate || 0}%</span>
        </div>
      </div>
      
      <div className="space-y-6">
        {data?.categories?.map((category, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300 text-sm">{category.name}</span>
              <span className="text-white text-sm font-semibold">{category.completed}/{category.total}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(category.completed / category.total) * 100}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className={`h-2 rounded-full bg-gradient-to-r ${getProgressColor((category.completed / category.total) * 100)}`}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Target className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-400">Weekly Goal</span>
          </div>
          <p className="text-2xl font-bold text-white">{data?.weeklyGoal || 0}</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-400">Achieved</span>
          </div>
          <p className="text-2xl font-bold text-white">{data?.achieved || 0}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default ProgressChart