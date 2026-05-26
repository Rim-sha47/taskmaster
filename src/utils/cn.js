// src/utils/cn.js

/**
 * Utility function to conditionally join class names
 * @param {...any} classes - Class names to join
 * @returns {string} Joined class names
 */
export const cn = (...classes) => {
  return classes
    .filter(Boolean)
    .join(' ');
};

/**
 * Utility to merge Tailwind CSS classes without conflicts
 * @param {...string} classes - Class names to merge
 * @returns {string} Merged class names
 */
export const twMerge = (...classes) => {
  const classMap = {};
  
  classes.forEach(cls => {
    if (!cls) return;
    cls.split(' ').forEach(c => {
      const [key, value] = c.split('-');
      if (key === 'bg' || key === 'text' || key === 'border') {
        classMap[key] = c;
      } else {
        classMap[c] = c;
      }
    });
  });
  
  return Object.values(classMap).join(' ');
};

/**
 * Conditional class names helper
 * @param {object} classes - Object mapping class names to conditions
 * @returns {string} Conditional class names
 */
export const cx = (classes) => {
  return Object.entries(classes)
    .filter(([, condition]) => condition)
    .map(([className]) => className)
    .join(' ');
};

// Predefined common class combinations
export const buttonClasses = {
  primary: 'px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors',
  secondary: 'px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors',
  danger: 'px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors',
  success: 'px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors',
  outline: 'px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors',
};

export const inputClasses = {
  default: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent',
  error: 'w-full px-4 py-2 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500',
  disabled: 'w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed',
};

export const cardClasses = {
  default: 'bg-white rounded-lg shadow-md p-6',
  glass: 'bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6',
  hover: 'bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow',
};