// src/components/layout/Navbar.jsx
import React, { useState } from 'react'
import { Menu, Bell, Search, User, LogOut, Settings, HelpCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuthStore'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'

const Navbar = ({ onMenuClick }) => {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  
  const notifications = [
    { id: 1, title: 'Task completed', message: 'Dashboard design was completed', time: '5 min ago', read: false, type: 'success' },
    { id: 2, title: 'New comment', message: 'Jane commented on your task', time: '1 hour ago', read: false, type: 'info' },
    { id: 3, title: 'Deadline approaching', message: 'API Integration due tomorrow', time: '2 hours ago', read: true, type: 'warning' },
    { id: 4, title: 'Team meeting', message: 'Sprint planning at 3 PM', time: '5 hours ago', read: true, type: 'info' },
  ]
  
  const handleLogout = () => {
    logout()
    toast.success('Logged out successfully')
    navigate('/login')
  }
  
  const unreadCount = notifications.filter(n => !n.read).length
  
  return (
    <nav className="sticky top-0 z-40 glassmorphism rounded-2xl mx-6 mt-6 px-6 py-4 border border-white/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="hidden md:flex items-center gap-3 bg-white/10 px-4 py-2 rounded-xl flex-1 max-w-md">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tasks, projects, or team members..."
              className="bg-transparent outline-none text-white w-full placeholder-gray-400 text-sm"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Search button for mobile */}
          <button className="md:hidden text-white hover:bg-white/10 p-2 rounded-lg transition-colors">
            <Search className="w-5 h-5" />
          </button>
          
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Bell className="w-5 h-5 text-white" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              )}
            </button>
            
            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-96 bg-gradient-to-br from-dark-200 to-dark-300 rounded-2xl shadow-2xl border border-white/10 overflow-hidden z-50"
                >
                  <div className="p-4 border-b border-white/10 flex justify-between items-center">
                    <h3 className="font-semibold text-white">Notifications</h3>
                    <button className="text-xs text-purple-400 hover:text-purple-300">
                      Mark all as read
                    </button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-4 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer ${!notif.read ? 'bg-purple-600/10' : ''}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-2 h-2 mt-2 rounded-full ${
                            notif.type === 'success' ? 'bg-green-400' :
                            notif.type === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'
                          }`} />
                          <div className="flex-1">
                            <p className="font-medium text-white text-sm">{notif.title}</p>
                            <p className="text-gray-400 text-xs mt-1">{notif.message}</p>
                            <p className="text-gray-500 text-xs mt-2">{notif.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-white/10">
                    <button className="w-full text-center text-sm text-purple-400 hover:text-purple-300">
                      View all notifications
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Profile Menu */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-3 p-1 hover:bg-white/10 rounded-xl transition-colors"
            >
              <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center shadow-lg">
                <span className="text-white font-semibold text-sm">
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </span>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-white text-sm font-medium">{user?.name || 'User'}</p>
                <p className="text-gray-400 text-xs">{user?.role || 'Member'}</p>
              </div>
            </button>
            
            <AnimatePresence>
              {showProfileMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-64 bg-gradient-to-br from-dark-200 to-dark-300 rounded-2xl shadow-2xl border border-white/10 overflow-hidden z-50"
                >
                  <div className="p-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">{user?.name || 'User'}</p>
                        <p className="text-gray-400 text-sm">{user?.email || 'user@example.com'}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-2">
                    <button
                      onClick={() => {
                        navigate('/profile')
                        setShowProfileMenu(false)
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-white/10 rounded-xl transition-colors flex items-center gap-3 text-gray-300"
                    >
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </button>
                    <button
                      onClick={() => {
                        navigate('/settings')
                        setShowProfileMenu(false)
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-white/10 rounded-xl transition-colors flex items-center gap-3 text-gray-300"
                    >
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left hover:bg-white/10 rounded-xl transition-colors flex items-center gap-3 text-gray-300">
                      <HelpCircle className="w-4 h-4" />
                      <span>Help & Support</span>
                    </button>
                    <div className="border-t border-white/10 my-2"></div>
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left hover:bg-white/10 rounded-xl transition-colors flex items-center gap-3 text-red-400"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar