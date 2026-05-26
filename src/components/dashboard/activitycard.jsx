// src/components/dashboard/ActivityCard.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Clock, CheckCircle, MessageCircle, UserPlus } from 'lucide-react'

const ActivityCard = ({ activities }) => {
  const getActivityIcon = (action) => {
    switch(action) {
      case 'completed task': return <CheckCircle className="w-4 h-4 text-green-400" />
      case 'created new task': return <MessageCircle className="w-4 h-4 text-blue-400" />
      case 'commented on': return <MessageCircle className="w-4 h-4 text-purple-400" />
      default: return <UserPlus className="w-4 h-4 text-yellow-400" />
    }
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
    >
      <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities?.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all"
          >
            <div className="p-2 bg-white/10 rounded-lg">
              {getActivityIcon(activity.action)}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-white">{activity.user}</span>{' '}
                {activity.action}{' '}
                <span className="font-semibold text-purple-400">{activity.target}</span>
              </p>
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {new Date(activity.timestamp).toLocaleTimeString()}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ActivityCard