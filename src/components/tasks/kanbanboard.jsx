// src/components/tasks/KanbanBoard.jsx
import React, { useState } from 'react'
import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { motion } from 'framer-motion'
import { Plus, MoreHorizontal } from 'lucide-react'
import { useTaskStore } from '../../store/useTaskStore'
import TaskCard from './TaskCard'
import TaskModal from './TaskModal'

const columns = [
  { id: 'todo', title: 'To Do', color: 'from-blue-500 to-blue-600', icon: '📋' },
  { id: 'in-progress', title: 'In Progress', color: 'from-yellow-500 to-yellow-600', icon: '⚡' },
  { id: 'review', title: 'Review', color: 'from-purple-500 to-purple-600', icon: '👀' },
  { id: 'completed', title: 'Completed', color: 'from-green-500 to-green-600', icon: '✅' },
]

const KanbanBoard = () => {
  const { tasks, updateTask } = useTaskStore()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeId, setActiveId] = useState(null)
  
  const getTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status)
  }
  
  const handleDragStart = (event) => {
    setActiveId(event.active.id)
  }
  
  const handleDragEnd = (event) => {
    const { active, over } = event
    setActiveId(null)
    
    if (active.id !== over?.id && over?.id) {
      const task = tasks.find(t => t.id === active.id)
      if (task) {
        updateTask(task.id, { status: over.id })
      }
    }
  }
  
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold gradient-text">Kanban Board</h1>
          <p className="text-gray-400 mt-2">Drag and drop tasks to update their status</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 gradient-bg rounded-xl hover:shadow-lg transition-all"
        >
          <Plus className="w-5 h-5" />
          Add Task
        </button>
      </div>
      
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4">
          {columns.map((column) => (
            <motion.div
              key={column.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 flex flex-col min-w-[280px]"
            >
              <div className={`p-4 rounded-t-2xl bg-gradient-to-r ${column.color}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{column.icon}</span>
                    <h3 className="text-lg font-semibold text-white">{column.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-white/20 rounded-lg text-xs text-white">
                      {getTasksByStatus(column.id).length}
                    </span>
                    <button className="p-1 hover:bg-white/20 rounded-lg transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              <SortableContext
                items={getTasksByStatus(column.id).map(t => t.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className="p-4 space-y-3 flex-1 min-h-[500px]">
                  {getTasksByStatus(column.id).map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                  {getTasksByStatus(column.id).length === 0 && (
                    <div className="text-center py-8 text-gray-400 text-sm">
                      No tasks in {column.title}
                    </div>
                  )}
                </div>
              </SortableContext>
            </motion.div>
          ))}
        </div>
        
        <DragOverlay>
          {activeId ? (
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-2xl border border-white/20">
              <TaskCard task={tasks.find(t => t.id === activeId)} />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
      
      <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default KanbanBoard