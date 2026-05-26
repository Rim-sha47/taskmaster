// src/utils/formatDate.js

/**
 * Format date to readable string
 * @param {string|Date} date - Date to format
 * @param {string} format - Format type (full, date, time, relative)
 * @returns {string} Formatted date string
 */
export const formatDate = (date, format = 'full') => {
  if (!date) return 'No date';
  
  const d = new Date(date);
  if (isNaN(d.getTime())) return 'Invalid date';
  
  const formats = {
    full: d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
    date: d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
    time: d.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    }),
    short: d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    }),
    numeric: d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }),
  };
  
  return formats[format] || formats.full;
};

/**
 * Get relative time (e.g., "2 hours ago", "just now")
 * @param {string|Date} date - Date to compare
 * @returns {string} Relative time string
 */
export const getRelativeTime = (date) => {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now - past) / 1000);
  
  if (diffInSeconds < 0) return 'in the future';
  
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };
  
  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      if (interval === 1) return `1 ${unit} ago`;
      return `${interval} ${unit}s ago`;
    }
  }
  
  return 'just now';
};

/**
 * Check if date is today
 * @param {string|Date} date - Date to check
 * @returns {boolean} True if date is today
 */
export const isToday = (date) => {
  const today = new Date();
  const checkDate = new Date(date);
  return today.toDateString() === checkDate.toDateString();
};

/**
 * Check if date is tomorrow
 * @param {string|Date} date - Date to check
 * @returns {boolean} True if date is tomorrow
 */
export const isTomorrow = (date) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const checkDate = new Date(date);
  return tomorrow.toDateString() === checkDate.toDateString();
};

/**
 * Check if date is yesterday
 * @param {string|Date} date - Date to check
 * @returns {boolean} True if date is yesterday
 */
export const isYesterday = (date) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const checkDate = new Date(date);
  return yesterday.toDateString() === checkDate.toDateString();
};

/**
 * Check if date is overdue
 * @param {string|Date} date - Date to check
 * @returns {boolean} True if date is in the past
 */
export const isOverdue = (date) => {
  if (!date) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dueDate = new Date(date);
  dueDate.setHours(0, 0, 0, 0);
  return dueDate < today;
};

/**
 * Get days remaining until due date
 * @param {string|Date} date - Due date
 * @returns {number} Days remaining (negative if overdue)
 */
export const getDaysRemaining = (date) => {
  if (!date) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dueDate = new Date(date);
  dueDate.setHours(0, 0, 0, 0);
  const diffTime = dueDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

/**
 * Format due date with status
 * @param {string|Date} date - Due date
 * @returns {object} Object with text and status
 */
export const formatDueDate = (date) => {
  if (!date) return { text: 'No due date', status: 'none' };
  
  const daysRemaining = getDaysRemaining(date);
  
  if (daysRemaining < 0) {
    return { text: 'Overdue', status: 'overdue' };
  }
  if (daysRemaining === 0) {
    return { text: 'Due today', status: 'today' };
  }
  if (daysRemaining === 1) {
    return { text: 'Due tomorrow', status: 'tomorrow' };
  }
  return { text: `${daysRemaining} days left`, status: 'upcoming' };
};

/**
 * Format time ago from timestamp
 * @param {string|Date} timestamp - Timestamp to format
 * @returns {string} Formatted time ago
 */
export const timeAgo = (timestamp) => {
  const now = new Date();
  const past = new Date(timestamp);
  const seconds = Math.floor((now - past) / 1000);
  
  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) return interval === 1 ? '1 year ago' : `${interval} years ago`;
  
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) return interval === 1 ? '1 month ago' : `${interval} months ago`;
  
  interval = Math.floor(seconds / 604800);
  if (interval >= 1) return interval === 1 ? '1 week ago' : `${interval} weeks ago`;
  
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return interval === 1 ? '1 day ago' : `${interval} days ago`;
  
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return interval === 1 ? '1 hour ago' : `${interval} hours ago`;
  
  interval = Math.floor(seconds / 60);
  if (interval >= 1) return interval === 1 ? '1 minute ago' : `${interval} minutes ago`;
  
  return 'just now';
};