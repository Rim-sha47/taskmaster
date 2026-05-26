// src/utils/validation.js

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {object} Validation result with score and message
 */
export const validatePassword = (password) => {
  let score = 0;
  const messages = [];
  
  if (password.length >= 8) {
    score++;
  } else {
    messages.push('Password must be at least 8 characters');
  }
  
  if (/[A-Z]/.test(password)) {
    score++;
  } else {
    messages.push('Password must contain at least one uppercase letter');
  }
  
  if (/[a-z]/.test(password)) {
    score++;
  } else {
    messages.push('Password must contain at least one lowercase letter');
  }
  
  if (/[0-9]/.test(password)) {
    score++;
  } else {
    messages.push('Password must contain at least one number');
  }
  
  if (/[^A-Za-z0-9]/.test(password)) {
    score++;
  } else {
    messages.push('Password must contain at least one special character');
  }
  
  let strength = 'weak';
  if (score >= 4) strength = 'strong';
  else if (score >= 3) strength = 'medium';
  
  return {
    isValid: score >= 3,
    score,
    strength,
    messages,
  };
};

/**
 * Validate phone number
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/;
  return phoneRegex.test(phone);
};

/**
 * Validate URL
 * @param {string} url - URL to validate
 * @returns {boolean} True if valid
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validate task title
 * @param {string} title - Task title
 * @returns {object} Validation result
 */
export const validateTaskTitle = (title) => {
  if (!title || title.trim().length === 0) {
    return { isValid: false, message: 'Task title is required' };
  }
  if (title.length > 100) {
    return { isValid: false, message: 'Task title must be less than 100 characters' };
  }
  return { isValid: true, message: '' };
};

/**
 * Validate task description
 * @param {string} description - Task description
 * @returns {object} Validation result
 */
export const validateTaskDescription = (description) => {
  if (description && description.length > 5000) {
    return { isValid: false, message: 'Description must be less than 5000 characters' };
  }
  return { isValid: true, message: '' };
};

/**
 * Validate due date
 * @param {string} date - Due date
 * @returns {object} Validation result
 */
export const validateDueDate = (date) => {
  if (!date) return { isValid: true, message: '' };
  
  const dueDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (isNaN(dueDate.getTime())) {
    return { isValid: false, message: 'Invalid date format' };
  }
  
  if (dueDate < today) {
    return { isValid: false, message: 'Due date cannot be in the past' };
  }
  
  return { isValid: true, message: '' };
};

/**
 * Validate name (user name, project name, etc.)
 * @param {string} name - Name to validate
 * @returns {object} Validation result
 */
export const validateName = (name) => {
  if (!name || name.trim().length === 0) {
    return { isValid: false, message: 'Name is required' };
  }
  if (name.length < 2) {
    return { isValid: false, message: 'Name must be at least 2 characters' };
  }
  if (name.length > 50) {
    return { isValid: false, message: 'Name must be less than 50 characters' };
  }
  return { isValid: true, message: '' };
};

/**
 * Validate form data with schema
 * @param {object} data - Form data
 * @param {object} schema - Validation schema
 * @returns {object} Validation result with errors
 */
export const validateForm = (data, schema) => {
  const errors = {};
  
  for (const [field, rules] of Object.entries(schema)) {
    const value = data[field];
    
    if (rules.required && (!value || value.trim?.() === '')) {
      errors[field] = rules.requiredMessage || `${field} is required`;
      continue;
    }
    
    if (rules.minLength && value?.length < rules.minLength) {
      errors[field] = rules.minLengthMessage || `${field} must be at least ${rules.minLength} characters`;
    }
    
    if (rules.maxLength && value?.length > rules.maxLength) {
      errors[field] = rules.maxLengthMessage || `${field} must be less than ${rules.maxLength} characters`;
    }
    
    if (rules.pattern && !rules.pattern.test(value)) {
      errors[field] = rules.patternMessage || `${field} is invalid`;
    }
    
    if (rules.custom && !rules.custom(value)) {
      errors[field] = rules.customMessage || `${field} is invalid`;
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Common validation schemas
export const validationSchemas = {
  login: {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      patternMessage: 'Please enter a valid email address',
    },
    password: {
      required: true,
      minLength: 6,
      minLengthMessage: 'Password must be at least 6 characters',
    },
  },
  
  register: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      patternMessage: 'Please enter a valid email address',
    },
    password: {
      required: true,
      minLength: 6,
    },
    confirmPassword: {
      required: true,
      custom: (value, formData) => value === formData.password,
      customMessage: 'Passwords do not match',
    },
  },
  
  task: {
    title: {
      required: true,
      maxLength: 100,
    },
    description: {
      maxLength: 5000,
    },
  },
};