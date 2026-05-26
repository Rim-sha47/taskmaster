// src/components/forms/TaskForm.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Flag, Tag, User, X, Plus } from 'lucide-react'

const TaskForm = ({ initialData, onSubmit, onClose, isLoading }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    priority: initialData?.priority || 'medium',
    category: initialData?.category || 'work',
    dueDate: initialData?.dueDate || '',
    assignee: initialData?.assignee || '',
  })
  
  const [subtasks, setSubtasks] = useState(initialData?.subtasks || [])
  const [newSubtask, setNewSubtask] = useState('')
  
  const addSubtask = () => {
    if (newSubtask.trim()) {
      setSubtasks([...subtasks, { id: Date.now(), title: newSubtask, completed: false }])
      setNewSubtask('')
    }
  }
  
  const removeSubtask = (id) => {
    setSubtasks(subtasks.filter(st => st.id !== id))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ ...formData, subtasks })
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Task Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 text-white"
          placeholder="Enter task title"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows="4"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 text-white resize-none"
          placeholder="Describe your task..."
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Priority</label>
          <select
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 text-white"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 text-white"
          >
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="design">Design</option>
            <option value="development">Development</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Due Date</label>
          <input
            type="date"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 text-white"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Assignee</label>
          <input
            type="text"
            value={formData.assignee}
            onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 text-white"
            placeholder="Team member name"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Subtasks</label>
        <div className="space-y-2 mb-3">
          {subtasks.map((subtask) => (
            <div key={subtask.id} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
              <input
                type="checkbox"
                checked={subtask.completed}
                onChange={() => {
                  setSubtasks(subtasks.map(s => 
                    s.id === subtask.id ? { ...s, completed: !s.completed } : s
                  ))
                }}
                className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-600"
              />
              <span className={`flex-1 text-gray-300 ${subtask.completed ? 'line-through text-gray-500' : ''}`}>
                {subtask.title}
              </span>
              <button
                type="button"
                onClick={() => removeSubtask(subtask.id)}
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={newSubtask}
            onChange={(e) => setNewSubtask(e.target.value)}
            placeholder="Add a subtask..."
            className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 text-white"
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSubtask())}
          />
          <button
            type="button"
            onClick={addSubtask}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-xl transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 gradient-bg hover:shadow-lg rounded-xl transition-all disabled:opacity-70"
        >
          {isLoading ? 'Saving...' : (initialData ? 'Update Task' : 'Create Task')}
        </button>
      </div>
    </form>
  )
}

export default TaskForm