// src/constants/validation.js
import { z } from "zod";

export const validationSchemas = {
  // Login Schema
  login: z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    rememberMe: z.boolean().optional(),
  }),
  
  // Register Schema
  register: z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name is too long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  }),
  
  // Forgot Password Schema
  forgotPassword: z.object({
    email: z.string().email("Invalid email address"),
  }),
  
  // Reset Password Schema
  resetPassword: z.object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  }),
  
  // Task Schema
  task: z.object({
    title: z.string().min(1, "Title is required").max(100, "Title is too long"),
    description: z.string().max(5000, "Description is too long").optional(),
    priority: z.enum(["low", "medium", "high"]),
    category: z.string(),
    dueDate: z.string().optional(),
    assignee: z.string().optional(),
    status: z.enum(["todo", "in-progress", "review", "completed"]),
  }),
  
  // Profile Schema
  profile: z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name is too long"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    location: z.string().optional(),
    bio: z.string().max(500, "Bio is too long").optional(),
  }),
  
  // Settings Schema
  settings: z.object({
    darkMode: z.boolean(),
    notifications: z.boolean(),
    emailAlerts: z.boolean(),
    twoFactorAuth: z.boolean(),
    language: z.string(),
    theme: z.string(),
  }),
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  // At least 6 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  return passwordRegex.test(password);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/;
  return phoneRegex.test(phone);
};