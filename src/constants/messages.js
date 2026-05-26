// src/constants/messages.js
export const messages = {
  // Auth Messages
  auth: {
    loginSuccess: "Login successful! Welcome back.",
    loginError: "Invalid email or password. Please try again.",
    registerSuccess: "Account created successfully! Welcome to TaskMaster.",
    registerError: "Registration failed. Please try again.",
    logoutSuccess: "Logged out successfully.",
    logoutError: "Error logging out. Please try again.",
    passwordResetSent: "Password reset link sent to your email.",
    passwordResetSuccess: "Password reset successfully.",
    passwordResetError: "Error resetting password. Please try again.",
  },
  
  // Task Messages
  tasks: {
    createSuccess: "Task created successfully!",
    createError: "Error creating task. Please try again.",
    updateSuccess: "Task updated successfully!",
    updateError: "Error updating task. Please try again.",
    deleteSuccess: "Task deleted successfully!",
    deleteError: "Error deleting task. Please try again.",
    completeSuccess: "Task completed! Great job! 🎉",
    completeError: "Error completing task. Please try again.",
  },
  
  // Form Validation
  validation: {
    required: "This field is required",
    email: "Please enter a valid email address",
    minLength: (min) => `Must be at least ${min} characters`,
    maxLength: (max) => `Must be at most ${max} characters`,
    passwordMatch: "Passwords do not match",
    invalidDate: "Please enter a valid date",
  },
  
  // General Messages
  general: {
    loading: "Loading...",
    saving: "Saving...",
    noData: "No data found",
    error: "Something went wrong. Please try again.",
    success: "Success!",
    confirmDelete: "Are you sure you want to delete this?",
    confirmLogout: "Are you sure you want to logout?",
  },
  
  // Empty States
  empty: {
    tasks: "No tasks yet. Create your first task!",
    notifications: "No notifications",
    activities: "No recent activities",
    users: "No users found",
    search: "No results found for your search",
  },
};