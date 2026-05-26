// src/components/layout/Sidebar.jsx
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  Users,
  Settings,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  MessageCircle
} from 'lucide-react'
import { useAuthStore } from '../../store/useAuthStore'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: CheckSquare, label: 'Tasks', path: '/tasks' },
  { icon: CheckSquare, label: 'Kanban', path: '/kanban' },
  { icon: Calendar, label: 'Calendar', path: '/calendar' },
  { icon: Users, label: 'Team', path: '/team' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: MessageCircle, label: 'Chat', path: '/chat' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: Settings, label: 'Settings', path: '/settings' },
]

const Sidebar = () => {
  const navigate = useNavigate()
  const { logout } = useAuthStore()
  const [isCollapsed, setIsCollapsed] = useState(false)
  
  const handleLogout = () => {
    logout()
    toast.success('Logged out successfully')
    navigate('/login')
  }
  
  return (
    <motion.aside
      animate={{ width: isCollapsed ? 80 : 280 }}
      transition={{ duration: 0.3, type: 'spring', damping: 20 }}
      className="relative bg-gradient-to-b from-purple-900/50 to-blue-900/50 backdrop-blur-xl border-r border-white/10 h-screen sticky top-0 overflow-hidden"
    >
      <div className="p-6">
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center neon-glow">
              <span className="text-2xl font-bold text-white">TM</span>
            </div>
            <h1 className="text-2xl font-bold gradient-text">TaskMaster</h1>
          </motion.div>
        )}
        
        {isCollapsed && (
          <div className="flex justify-center mb-10">
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center neon-glow">
              <span className="text-2xl font-bold text-white">TM</span>
            </div>
          </div>
        )}
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'gradient-bg text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                } ${isCollapsed ? 'justify-center' : ''}`
              }
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
        
        <div className={`absolute bottom-8 ${isCollapsed ? 'left-0 right-0 px-3' : 'left-6 right-6'}`}>
          <button
            onClick={handleLogout}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 ${isCollapsed ? 'justify-center' : ''}`}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </div>
      
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors shadow-lg"
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4 text-white" /> : <ChevronLeft className="w-4 h-4 text-white" />}
      </button>
    </motion.aside>
  )
}

export default Sidebar