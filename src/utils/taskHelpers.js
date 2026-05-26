// src/utils/taskHelpers.js

/**
 * Filter tasks by status
 * @param {Array} tasks - Array of tasks
 * @param {string} status - Status to filter by
 * @returns {Array} Filtered tasks
 */
export const filterTasksByStatus = (tasks, status) => {
  if (status === 'all') return tasks;
  return tasks.filter(task => task.status === status);
};

/**
 * Filter tasks by priority
 * @param {Array} tasks - Array of tasks
 * @param {string} priority - Priority to filter by
 * @returns {Array} Filtered tasks
 */
export const filterTasksByPriority = (tasks, priority) => {
  if (priority === 'all') return tasks;
  return tasks.filter(task => task.priority === priority);
};

/**
 * Filter tasks by category
 * @param {Array} tasks - Array of tasks
 * @param {string} category - Category to filter by
 * @returns {Array} Filtered tasks
 */
export const filterTasksByCategory = (tasks, category) => {
  if (category === 'all') return tasks;
  return tasks.filter(task => task.category === category);
};

/**
 * Search tasks by title or description
 * @param {Array} tasks - Array of tasks
 * @param {string} searchTerm - Search term
 * @returns {Array} Filtered tasks
 */
export const searchTasks = (tasks, searchTerm) => {
  if (!searchTerm) return tasks;
  const term = searchTerm.toLowerCase();
  return tasks.filter(task => 
    task.title.toLowerCase().includes(term) ||
    task.description?.toLowerCase().includes(term)
  );
};

/**
 * Sort tasks by field
 * @param {Array} tasks - Array of tasks
 * @param {string} field - Field to sort by
 * @param {string} order - Sort order (asc or desc)
 * @returns {Array} Sorted tasks
 */
export const sortTasks = (tasks, field = 'createdAt', order = 'desc') => {
  const sorted = [...tasks];
  
  sorted.sort((a, b) => {
    let aVal = a[field];
    let bVal = b[field];
    
    // Handle dates
    if (field === 'dueDate' || field === 'createdAt' || field === 'updatedAt') {
      aVal = new Date(aVal || 0);
      bVal = new Date(bVal || 0);
    }
    
    // Handle strings
    if (typeof aVal === 'string') {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }
    
    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });
  
  return sorted;
};

/**
 * Get task statistics
 * @param {Array} tasks - Array of tasks
 * @returns {object} Task statistics
 */
export const getTaskStatistics = (tasks) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === 'completed').length;
  const inProgress = tasks.filter(t => t.status === 'in-progress').length;
  const todo = tasks.filter(t => t.status === 'todo').length;
  const review = tasks.filter(t => t.status === 'review').length;
  
  const high = tasks.filter(t => t.priority === 'high').length;
  const medium = tasks.filter(t => t.priority === 'medium').length;
  const low = tasks.filter(t => t.priority === 'low').length;
  
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return {
    total,
    completed,
    inProgress,
    todo,
    review,
    high,
    medium,
    low,
    completionRate,
  };
};

/**
 * Get overdue tasks
 * @param {Array} tasks - Array of tasks
 * @returns {Array} Overdue tasks
 */
export const getOverdueTasks = (tasks) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return tasks.filter(task => {
    if (!task.dueDate || task.status === 'completed') return false;
    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);
    return dueDate < today;
  });
};

/**
 * Get upcoming tasks (next N days)
 * @param {Array} tasks - Array of tasks
 * @param {number} days - Number of days to look ahead
 * @returns {Array} Upcoming tasks
 */
export const getUpcomingTasks = (tasks, days = 7) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + days);
  futureDate.setHours(23, 59, 59, 999);
  
  return tasks.filter(task => {
    if (!task.dueDate || task.status === 'completed') return false;
    const dueDate = new Date(task.dueDate);
    return dueDate >= today && dueDate <= futureDate;
  });
};

/**
 * Get tasks due today
 * @param {Array} tasks - Array of tasks
 * @returns {Array} Tasks due today
 */
export const getTodaysTasks = (tasks) => {
  const today = new Date().toISOString().split('T')[0];
  return tasks.filter(task => task.dueDate === today && task.status !== 'completed');
};

/**
 * Group tasks by status
 * @param {Array} tasks - Array of tasks
 * @returns {object} Tasks grouped by status
 */
export const groupTasksByStatus = (tasks) => {
  return {
    todo: tasks.filter(t => t.status === 'todo'),
    'in-progress': tasks.filter(t => t.status === 'in-progress'),
    review: tasks.filter(t => t.status === 'review'),
    completed: tasks.filter(t => t.status === 'completed'),
  };
};

/**
 * Group tasks by priority
 * @param {Array} tasks - Array of tasks
 * @returns {object} Tasks grouped by priority
 */
export const groupTasksByPriority = (tasks) => {
  return {
    high: tasks.filter(t => t.priority === 'high'),
    medium: tasks.filter(t => t.priority === 'medium'),
    low: tasks.filter(t => t.priority === 'low'),
  };
};

/**
 * Calculate completion percentage
 * @param {Array} tasks - Array of tasks
 * @returns {number} Completion percentage
 */
export const getCompletionPercentage = (tasks) => {
  if (tasks.length === 0) return 0;
  const completed = tasks.filter(t => t.status === 'completed').length;
  return Math.round((completed / tasks.length) * 100);
};

/**
 * Get task count by status
 * @param {Array} tasks - Array of tasks
 * @returns {object} Task counts by status
 */
export const getTaskCountsByStatus = (tasks) => {
  return {
    todo: tasks.filter(t => t.status === 'todo').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    review: tasks.filter(t => t.status === 'review').length,
    completed: tasks.filter(t => t.status === 'completed').length,
  };
};