// src/constants/regex.js
export const regex = {
  // Email validation
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  
  // Password validation (min 6 chars, at least 1 uppercase, 1 lowercase, 1 number)
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
  
  // Phone number validation (international)
  phone: /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/,
  
  // URL validation
  url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  
  // Username validation (alphanumeric, underscore, 3-20 chars)
  username: /^[a-zA-Z0-9_]{3,20}$/,
  
  // Name validation (letters, spaces, hyphens, 2-50 chars)
  name: /^[a-zA-Z\s-]{2,50}$/,
  
  // Only numbers
  numbers: /^\d+$/,
  
  // Only letters
  letters: /^[a-zA-Z\s]+$/,
  
  // Alphanumeric with spaces
  alphanumeric: /^[a-zA-Z0-9\s]+$/,
  
  // Date (YYYY-MM-DD)
  date: /^\d{4}-\d{2}-\d{2}$/,
  
  // Time (HH:MM)
  time: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
  
  // Hex color
  hexColor: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
};