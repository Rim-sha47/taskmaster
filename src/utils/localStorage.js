// src/utils/localStorage.js

// Storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  REFRESH_TOKEN: 'refreshToken',
  USER: 'user',
  THEME: 'theme',
  TASKS: 'tasks',
  FILTERS: 'taskFilters',
  SETTINGS: 'settings',
  PREFERENCES: 'preferences',
};

/**
 * Save data to localStorage
 * @param {string} key - Storage key
 * @param {any} value - Value to store
 * @returns {boolean} Success status
 */
export const setItem = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
    return true;
  } catch (error) {
    console.error(`Error saving to localStorage (${key}):`, error);
    return false;
  }
};

/**
 * Get data from localStorage
 * @param {string} key - Storage key
 * @param {any} defaultValue - Default value if not found
 * @returns {any} Stored value or default
 */
export const getItem = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading from localStorage (${key}):`, error);
    return defaultValue;
  }
};

/**
 * Remove data from localStorage
 * @param {string} key - Storage key
 * @returns {boolean} Success status
 */
export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing from localStorage (${key}):`, error);
    return false;
  }
};

/**
 * Clear all data from localStorage
 * @returns {boolean} Success status
 */
export const clearStorage = () => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
};

/**
 * Check if key exists in localStorage
 * @param {string} key - Storage key
 * @returns {boolean} True if exists
 */
export const hasItem = (key) => {
  return localStorage.getItem(key) !== null;
};

/**
 * Get all keys from localStorage
 * @returns {Array} Array of keys
 */
export const getAllKeys = () => {
  return Object.keys(localStorage);
};

/**
 * Get all items from localStorage
 * @returns {object} Object with all key-value pairs
 */
export const getAllItems = () => {
  const items = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key) {
      items[key] = getItem(key);
    }
  }
  return items;
};

/**
 * Save user session
 * @param {object} user - User object
 * @param {string} token - Auth token
 * @param {string} refreshToken - Refresh token
 */
export const saveSession = (user, token, refreshToken) => {
  setItem(STORAGE_KEYS.USER, user);
  setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  if (refreshToken) {
    setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
  }
};

/**
 * Clear user session
 */
export const clearSession = () => {
  removeItem(STORAGE_KEYS.USER);
  removeItem(STORAGE_KEYS.AUTH_TOKEN);
  removeItem(STORAGE_KEYS.REFRESH_TOKEN);
};

/**
 * Get auth token
 * @returns {string|null} Auth token
 */
export const getAuthToken = () => {
  return getItem(STORAGE_KEYS.AUTH_TOKEN);
};

/**
 * Get current user
 * @returns {object|null} User object
 */
export const getCurrentUser = () => {
  return getItem(STORAGE_KEYS.USER);
};

/**
 * Check if user is authenticated
 * @returns {boolean} True if authenticated
 */
export const isAuthenticated = () => {
  return !!getAuthToken() && !!getCurrentUser();
};

/**
 * Save tasks to localStorage
 * @param {Array} tasks - Array of tasks
 */
export const saveTasks = (tasks) => {
  setItem(STORAGE_KEYS.TASKS, tasks);
};

/**
 * Get tasks from localStorage
 * @returns {Array} Array of tasks
 */
export const getTasks = () => {
  return getItem(STORAGE_KEYS.TASKS, []);
};

/**
 * Save theme preference
 * @param {string} theme - Theme name (dark/light)
 */
export const saveTheme = (theme) => {
  setItem(STORAGE_KEYS.THEME, theme);
};

/**
 * Get theme preference
 * @returns {string} Theme name
 */
export const getTheme = () => {
  return getItem(STORAGE_KEYS.THEME, 'dark');
};

/**
 * Save user settings
 * @param {object} settings - User settings
 */
export const saveSettings = (settings) => {
  setItem(STORAGE_KEYS.SETTINGS, settings);
};

/**
 * Get user settings
 * @returns {object} User settings
 */
export const getSettings = () => {
  return getItem(STORAGE_KEYS.SETTINGS, {});
};

/**
 * Save task filters
 * @param {object} filters - Task filters
 */
export const saveFilters = (filters) => {
  setItem(STORAGE_KEYS.FILTERS, filters);
};

/**
 * Get task filters
 * @returns {object} Task filters
 */
export const getFilters = () => {
  return getItem(STORAGE_KEYS.FILTERS, {
    status: 'all',
    priority: 'all',
    category: 'all',
    search: '',
  });
};