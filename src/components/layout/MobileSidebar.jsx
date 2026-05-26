// src/components/layout/MobileSidebar.jsx
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, LayoutDashboard, CheckSquare, Calendar, Users, Settings, LogOut, User } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuthStore'
import toast from 'react-hot-toast'

const MobileSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const { logout } = useAuthStore()
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: CheckSquare, label: 'Tasks', path: '/tasks' },
    { icon: CheckSquare, label: 'Kanban', path: '/kanban' },
    { icon: Calendar, label: 'Calendar', path: '/calendar' },
    { icon: Users, label: 'Team', path: '/team' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ]
  
  const handleLogout = () => {
    logout()
    toast.success('Logged out successfully')
    navigate('/login')
    onClose()
  }
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
          />
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed left-0 top-0 bottom-0 w-80 bg-gradient-to-br from-purple-900 to-blue-900 z-50 shadow-2xl"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center neon-glow">
                    <span className="text-2xl font-bold text-white">TM</span>
                  </div>
                  <h1 className="text-2xl font-bold text-white">TaskMaster</h1>
                </div>
                <button 
                  onClick={onClose} 
                  className="text-white hover:bg-white/10 p-2 rounded-lg transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className="flex items-center gap-3 text-gray-200 hover:text-white hover:bg-white/10 p-3 rounded-xl transition-all duration-200"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </nav>
              
              <div className="absolute bottom-8 left-6 right-6">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 text-gray-200 hover:text-white hover:bg-white/10 p-3 rounded-xl transition-all duration-200 w-full"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileSidebar