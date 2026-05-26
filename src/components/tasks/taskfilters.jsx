// src/components/tasks/TaskFilter.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Filter, 
  X, 
  Calendar, 
  Flag, 
  Tag, 
  User, 
  SlidersHorizontal,
  RefreshCcw,
  CheckCircle,
  Clock,
  AlertCircle,
  ChevronDown
} from 'lucide-react'
import { useTaskStore } from '../../store/useTaskStore'

const TaskFilter = () => {
  const { filters, setFilters, tasks } = useTaskStore()
  const [isOpen, setIsOpen] = useState(false)
  const [tempFilters, setTempFilters] = useState(filters)
  
  const categories = ['all', ...new Set(tasks.map(task => task.category).filter(Boolean))]
  const priorities = ['all', 'low', 'medium', 'high']
  const statuses = ['all', 'todo', 'in-progress', 'review', 'completed']
  
  useEffect(() => {
    setTempFilters(filters)
  }, [filters])
  
  const applyFilters = () => {
    setFilters(tempFilters)
    setIsOpen(false)
  }
  
  const resetFilters = () => {
    const reset = { status: 'all', priority: 'all', category: 'all', search: '', dueDate: 'all', assignee: 'all' }
    setTempFilters(reset)
    setFilters(reset)
    setIsOpen(false)
  }
  
  const activeCount = () => {
    let count = 0
    if (filters.status !== 'all') count++
    if (filters.priority !== 'all') count++
    if (filters.category !== 'all') count++
    return count
  }
  
  const removeFilter = (key) => {
    const newFilters = { ...filters, [key]: 'all' }
    setFilters(newFilters)
  }
  
  return (
    <div className="relative">
      <div className="flex gap-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all ${
            activeCount() > 0 
              ? 'gradient-bg text-white shadow-lg' 
              : 'bg-white/10 hover:bg-white/20 text-gray-300 border border-white/10'
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="font-medium">Filters</span>
          {activeCount() > 0 && (
            <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs font-bold">
              {activeCount()}
            </span>
          )}
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </motion.button>
        
        {activeCount() > 0 && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white"
          >
            <RefreshCcw className="w-4 h-4" />
            <span className="text-sm">Reset</span>
          </button>
        )}
      </div>
      
      {activeCount() > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {filters.status !== 'all' && (
            <FilterChip label="Status" value={filters.status.replace('-', ' ')} onRemove={() => removeFilter('status')} />
          )}
          {filters.priority !== 'all' && (
            <FilterChip label="Priority" value={filters.priority} onRemove={() => removeFilter('priority')} />
          )}
          {filters.category !== 'all' && (
            <FilterChip label="Category" value={filters.category} onRemove={() => removeFilter('category')} />
          )}
        </div>
      )}
      
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-0 mt-3 w-full md:w-96 bg-gradient-to-br from-dark-200 to-dark-300 rounded-2xl shadow-2xl border border-white/20 z-50 overflow-hidden"
            >
              <div className="p-5 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-semibold text-white">Advanced Filters</h3>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-5 space-y-5 max-h-[60vh] overflow-y-auto">
                <FilterSection title="Status" icon={<CheckCircle className="w-4 h-4" />}>
                  <div className="grid grid-cols-2 gap-2">
                    {statuses.map(status => (
                      <FilterButton
                        key={status}
                        active={tempFilters.status === status}
                        onClick={() => setTempFilters({ ...tempFilters, status })}
                      >
                        {status === 'all' ? 'All' : status.replace('-', ' ')}
                      </FilterButton>
                    ))}
                  </div>
                </FilterSection>
                
                <FilterSection title="Priority" icon={<Flag className="w-4 h-4" />}>
                  <div className="grid grid-cols-2 gap-2">
                    {priorities.map(priority => (
                      <FilterButton
                        key={priority}
                        active={tempFilters.priority === priority}
                        onClick={() => setTempFilters({ ...tempFilters, priority })}
                      >
                        {priority === 'all' ? 'All' : priority}
                      </FilterButton>
                    ))}
                  </div>
                </FilterSection>
                
                <FilterSection title="Category" icon={<Tag className="w-4 h-4" />}>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <FilterButton
                        key={category}
                        active={tempFilters.category === category}
                        onClick={() => setTempFilters({ ...tempFilters, category })}
                      >
                        {category === 'all' ? 'All' : category}
                      </FilterButton>
                    ))}
                  </div>
                </FilterSection>
                
                <FilterSection title="Due Date" icon={<Calendar className="w-4 h-4" />}>
                  <select
                    value={tempFilters.dueDate || 'all'}
                    onChange={(e) => setTempFilters({ ...tempFilters, dueDate: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white"
                  >
                    <option value="all">All Tasks</option>
                    <option value="today">Due Today</option>
                    <option value="tomorrow">Due Tomorrow</option>
                    <option value="this-week">This Week</option>
                    <option value="overdue">Overdue</option>
                  </select>
                </FilterSection>
              </div>
              
              <div className="flex gap-3 p-5 border-t border-white/10 bg-dark-300/50">
                <button onClick={resetFilters} className="flex-1 px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-gray-300">
                  Reset All
                </button>
                <button onClick={applyFilters} className="flex-1 px-4 py-2.5 gradient-bg rounded-xl text-white font-semibold">
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

const FilterSection = ({ title, icon, children }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
      {icon}
      {title}
    </label>
    {children}
  </div>
)

const FilterButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 rounded-xl text-sm capitalize transition-all ${
      active
        ? 'gradient-bg text-white shadow-md'
        : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
    }`}
  >
    {children}
  </button>
)

const FilterChip = ({ label, value, onRemove }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-600/20 backdrop-blur-sm rounded-lg text-sm border border-purple-500/30">
    <span className="text-gray-300">{label}:</span>
    <span className="text-white capitalize">{value}</span>
    <button onClick={onRemove} className="ml-1 hover:text-red-400">
      <X className="w-3 h-3" />
    </button>
  </span>
)

export default TaskFilter