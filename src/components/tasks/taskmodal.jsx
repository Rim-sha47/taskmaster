// src/components/tasks/TaskModal.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Flag, Tag, User, Paperclip, MessageCircle, Plus, Trash2 } from 'lucide-react'
import { useTaskStore } from '../../store/useTaskStore'
import toast from 'react-hot-toast'

const TaskModal = ({ isOpen, onClose, task = null }) => {
  const { addTask, updateTask } = useTaskStore()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: task?.title || '',
    description: task?.description || '',
    priority: task?.priority || 'medium',
    category: task?.category || 'work',
    dueDate: task?.dueDate || '',
    assignee: task?.assignee || '',
  })
  
  const [subtasks, setSubtasks] = useState(task?.subtasks || [])
  const [newSubtask, setNewSubtask] = useState('')
  const [comments, setComments] = useState(task?.comments || [])
  const [newComment, setNewComment] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const taskData = {
      ...formData,
      subtasks,
      comments,
      id: task?.id || Date.now(),
      status: task?.status || 'todo',
      createdAt: task?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    
    if (task) {
      updateTask(task.id, taskData)
      toast.success('Task updated successfully!')
    } else {
      addTask(taskData)
      toast.success('Task created successfully!')
    }
    
    setIsLoading(false)
    onClose()
  }
  
  const addSubtask = () => {
    if (newSubtask.trim()) {
      setSubtasks([...subtasks, { id: Date.now(), title: newSubtask, completed: false }])
      setNewSubtask('')
    }
  }
  
  const removeSubtask = (id) => {
    setSubtasks(subtasks.filter(st => st.id !== id))
  }
  
  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment, user: 'Current User', date: new Date().toISOString() }])
      setNewComment('')
      toast.success('Comment added')
    }
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
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-gradient-to-br from-dark-200 to-dark-300 rounded-2xl shadow-2xl z-50 max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-dark-200/95 backdrop-blur-sm p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-2xl font-bold gradient-text">
                {task ? 'Edit Task' : 'Create New Task'}
              </h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Task Title *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-white"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-white resize-none"
                      placeholder="Describe your task in detail..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subtasks</label>
                    <div className="space-y-2 mb-3 max-h-40 overflow-y-auto">
                      {subtasks.map((subtask) => (
                        <div key={subtask.id} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg group">
                          <input
                            type="checkbox"
                            checked={subtask.completed}
                            onChange={() => {
                              setSubtasks(subtasks.map(s => 
                                s.id === subtask.id ? { ...s, completed: !s.completed } : s
                              ))
                            }}
                            className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-600 focus:ring-purple-500"
                          />
                          <span className={`flex-1 text-gray-300 text-sm ${subtask.completed ? 'line-through text-gray-500' : ''}`}>
                            {subtask.title}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeSubtask(subtask.id)}
                            className="text-gray-400 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 className="w-4 h-4" />
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
                        className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 text-white text-sm"
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
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Comments</label>
                    <div className="space-y-3 mb-3 max-h-40 overflow-y-auto">
                      {comments.map((comment) => (
                        <div key={comment.id} className="p-3 bg-white/5 rounded-lg">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-semibold text-purple-400">{comment.user}</span>
                            <span className="text-xs text-gray-500">{new Date(comment.date).toLocaleDateString()}</span>
                          </div>
                          <p className="text-sm text-gray-300">{comment.text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 text-white text-sm"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addComment())}
                      />
                      <button
                        type="button"
                        onClick={addComment}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                      <Flag className="w-4 h-4" />
                      Priority
                    </label>
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
                    <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 text-white"
                    >
                      <option value="work">Work</option>
                      <option value="personal">Personal</option>
                      <option value="design">Design</option>
                      <option value="development">Development</option>
                      <option value="meeting">Meeting</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Due Date
                    </label>
                    <input
                      type="date"
                      value={formData.dueDate}
                      onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Assignee
                    </label>
                    <input
                      type="text"
                      value={formData.assignee}
                      onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 text-white"
                      placeholder="Team member name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                      <Paperclip className="w-4 h-4" />
                      Attachments
                    </label>
                    <div className="border-2 border-dashed border-white/20 rounded-xl p-4 text-center hover:border-purple-500 transition-colors cursor-pointer">
                      <input type="file" className="hidden" id="file-upload" multiple />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <p className="text-sm text-gray-400">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500 mt-1">PNG, JPG, PDF up to 10MB</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2.5 gradient-bg hover:shadow-lg rounded-xl transition-all font-medium disabled:opacity-70"
                >
                  {isLoading ? 'Saving...' : (task ? 'Update Task' : 'Create Task')}
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default TaskModal