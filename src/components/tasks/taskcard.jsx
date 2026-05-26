// src/components/tasks/TaskCard.jsx
import React, { useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { motion } from 'framer-motion'
import { Calendar, Flag, Edit2, Trash2, CheckCircle, MessageCircle, Paperclip, GripVertical } from 'lucide-react'
import { useTaskStore } from '../../store/useTaskStore'
import TaskModal from './TaskModal'
import toast from 'react-hot-toast'

const priorityColors = {
  low: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
  medium: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/30' },
  high: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30' },
}

const TaskCard = ({ task }) => {
  const { deleteTask, updateTask } = useTaskStore()
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id })
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }
  
  const handleComplete = () => {
    updateTask(task.id, { status: 'completed' })
    toast.success('Task completed! 🎉')
  }
  
  const getDaysRemaining = () => {
    if (!task.dueDate) return null
    const today = new Date()
    const dueDate = new Date(task.dueDate)
    const diffTime = dueDate - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    if (diffDays < 0) return 'Overdue'
    if (diffDays === 0) return 'Due today'
    return `${diffDays} days left`
  }
  
  return (
    <>
      <motion.div
        ref={setNodeRef}
        style={style}
        {...attributes}
        className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-200 cursor-grab active:cursor-grabbing"
      >
        <div className="p-4">
          <div className="flex items-start gap-2">
            <div {...listeners} className="cursor-grab active:cursor-grabbing mt-1">
              <GripVertical className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-white font-semibold line-clamp-2">{task.title}</h4>
                <div className="flex gap-1 ml-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors"
                  >
                    <Edit2 className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => {
                      deleteTask(task.id)
                      toast.success('Task deleted')
                    }}
                    className="text-gray-400 hover:text-red-400 p-1 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
              
              {task.description && (
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{task.description}</p>
              )}
              
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs ${priorityColors[task.priority].bg} ${priorityColors[task.priority].text} border ${priorityColors[task.priority].border}`}>
                  <Flag className="w-3 h-3" />
                  {task.priority}
                </span>
                {task.category && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs bg-purple-600/20 text-purple-400 border border-purple-500/30">
                    {task.category}
                  </span>
                )}
              </div>
              
              {task.dueDate && (
                <div className={`flex items-center gap-2 text-xs mb-3 ${getDaysRemaining() === 'Overdue' ? 'text-red-400' : 'text-gray-400'}`}>
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                  <span className="text-gray-500">•</span>
                  <span>{getDaysRemaining()}</span>
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-gray-400 text-xs">
                  {task.subtasks?.length > 0 && (
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {task.subtasks.filter(s => s.completed).length}/{task.subtasks.length}
                    </span>
                  )}
                  {task.comments?.length > 0 && (
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      {task.comments.length}
                    </span>
                  )}
                  {task.attachments?.length > 0 && (
                    <span className="flex items-center gap-1">
                      <Paperclip className="w-3 h-3" />
                      {task.attachments.length}
                    </span>
                  )}
                </div>
                
                {task.status !== 'completed' && (
                  <button
                    onClick={handleComplete}
                    className="text-xs px-2 py-1 bg-green-600/20 hover:bg-green-600/30 rounded-lg text-green-400 transition-colors"
                  >
                    Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} task={task} />
    </>
  )
}

export default TaskCard