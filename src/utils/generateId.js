// src/utils/generateId.js

/**
 * Generate a random ID
 * @returns {string} Random ID
 */
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Generate a numeric ID
 * @returns {number} Numeric ID based on timestamp
 */
export const generateNumericId = () => {
  return Date.now();
};

/**
 * Generate a UUID v4
 * @returns {string} UUID v4
 */
export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * Generate a short ID (8 characters)
 * @returns {string} Short ID
 */
export const generateShortId = () => {
  return Math.random().toString(36).substring(2, 10);
};

/**
 * Generate a task ID with prefix
 * @returns {string} Task ID with TSK prefix
 */
export const generateTaskId = () => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `TSK-${timestamp}-${random}`;
};

/**
 * Generate a user ID with prefix
 * @returns {string} User ID with USR prefix
 */
export const generateUserId = () => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `USR-${timestamp}-${random}`;
};

/**
 * Generate a project ID with prefix
 * @returns {string} Project ID with PRJ prefix
 */
export const generateProjectId = () => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `PRJ-${timestamp}-${random}`;
};