// src/constants/apiEndpoints.js
export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    REFRESH_TOKEN: "/auth/refresh",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    VERIFY_OTP: "/auth/verify-otp",
  },
  
  // Users
  USERS: {
    GET_ALL: "/users",
    GET_ONE: (id) => `/users/${id}`,
    CREATE: "/users",
    UPDATE: (id) => `/users/${id}`,
    DELETE: (id) => `/users/${id}`,
    UPDATE_PROFILE: "/users/profile",
    UPDATE_PASSWORD: "/users/change-password",
  },
  
  // Tasks
  TASKS: {
    GET_ALL: "/tasks",
    GET_ONE: (id) => `/tasks/${id}`,
    CREATE: "/tasks",
    UPDATE: (id) => `/tasks/${id}`,
    DELETE: (id) => `/tasks/${id}`,
    UPDATE_STATUS: (id) => `/tasks/${id}/status`,
    ADD_SUBTASK: (id) => `/tasks/${id}/subtasks`,
    ADD_COMMENT: (id) => `/tasks/${id}/comments`,
    GET_BY_STATUS: (status) => `/tasks/status/${status}`,
    GET_BY_PRIORITY: (priority) => `/tasks/priority/${priority}`,
  },
  
  // Dashboard
  DASHBOARD: {
    GET_STATS: "/dashboard/stats",
    GET_ACTIVITY: "/dashboard/activity",
    GET_CHARTS: "/dashboard/charts",
    GET_RECENT_TASKS: "/dashboard/recent-tasks",
  },
  
  // Admin
  ADMIN: {
    GET_STATS: "/admin/stats",
    GET_USERS: "/admin/users",
    UPDATE_USER: (id) => `/admin/users/${id}`,
    DELETE_USER: (id) => `/admin/users/${id}`,
    GET_REPORTS: "/admin/reports",
    GET_LOGS: "/admin/logs",
  },
  
  // Notifications
  NOTIFICATIONS: {
    GET_ALL: "/notifications",
    MARK_READ: (id) => `/notifications/${id}/read`,
    MARK_ALL_READ: "/notifications/read-all",
    DELETE: (id) => `/notifications/${id}`,
  },
  
  // Settings
  SETTINGS: {
    GET: "/settings",
    UPDATE: "/settings",
    UPDATE_THEME: "/settings/theme",
    UPDATE_NOTIFICATIONS: "/settings/notifications",
  },
};