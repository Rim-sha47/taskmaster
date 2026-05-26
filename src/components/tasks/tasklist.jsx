// src/components/tasks/TaskList.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Search } from 'lucide-react'
import { useTaskStore } from '../../store/useTaskStore'
import TaskModal from './TaskModal'
import TaskCard from './TaskCard'
import TaskFilter from './TaskFilter'
import EmptyState from '../common/EmptyState'

const TaskList = () => {
  const { tasks, filters, setFilters, getFilteredTasks } = useTaskStore()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  
  const filteredTasks = getFilteredTasks()
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setFilters({ search: e.target.value })
  }
  
  const hasActiveFilters = filters.status !== 'all' || filters.priority !== 'all' || filters.category !== 'all'
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold gradient-text">All Tasks</h1>
          <p className="text-gray-400 mt-1">Manage and organize your tasks efficiently</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 gradient-bg rounded-xl hover:shadow-lg transition-all whitespace-nowrap"
        >
          <Plus className="w-5 h-5" />
          New Task
        </button>
      </div>
      
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search tasks by title..."
          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder-gray-400"
        />
      </div>
      
      <TaskFilter />
      
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm">
          Showing <span className="text-white font-semibold">{filteredTasks.length}</span> of {tasks.length} tasks
        </p>
      </div>
      
      <AnimatePresence mode="wait">
        {filteredTasks.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <EmptyState 
              title={hasActiveFilters ? "No matching tasks" : "No tasks yet"}
              description={
                hasActiveFilters 
                  ? "Try adjusting your filters to see more tasks"
                  : "Get started by creating your first task"
              }
              action={() => {
                if (hasActiveFilters) {
                  setFilters({ status: 'all', priority: 'all', category: 'all', search: '' })
                  setSearchTerm('')
                } else {
                  setIsModalOpen(true)
                }
              }}
              actionText={hasActiveFilters ? "Clear Filters" : "Create Task"}
            />
          </motion.div>
        ) : (
          <motion.div
            key="tasks"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTasks.map((task, index) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <TaskCard task={task} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default TaskList