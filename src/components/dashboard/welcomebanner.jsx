// src/components/dashboard/WelcomeBanner.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Rocket } from 'lucide-react'

const WelcomeBanner = ({ userName }) => {
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 18) return 'Good Afternoon'
    return 'Good Evening'
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden gradient-bg rounded-3xl p-8 mb-8 shadow-2xl"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          <span className="text-white/90 text-sm font-medium">{getGreeting()}!</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Welcome back, {userName || 'User'} 👋
        </h1>
        
        <p className="text-white/80 text-lg mb-6 max-w-2xl">
          You're crushing your goals! Let's make today even more productive.
        </p>
        
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all"
          >
            <Rocket className="w-4 h-4" />
            <span>Start New Task</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default WelcomeBanner