// src/constants/constants.js
export const APP_NAME = "TaskMaster";
export const APP_VERSION = "1.0.0";
export const APP_DESCRIPTION = "Modern task management platform for teams";

export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
export const STORAGE_KEYS = {
  AUTH_TOKEN: "authToken",
  USER: "user",
  THEME: "theme",
  SETTINGS: "userSettings",
  TASKS: "tasks",
};

export const TASK_STATUS = {
  TODO: "todo",
  IN_PROGRESS: "in-progress",
  REVIEW: "review",
  COMPLETED: "completed",
};

export const TASK_PRIORITY = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

export const TASK_CATEGORIES = {
  WORK: "work",
  PERSONAL: "personal",
  DESIGN: "design",
  DEVELOPMENT: "development",
  MEETING: "meeting",
  MARKETING: "marketing",
  SALES: "sales",
};

export const USER_ROLES = {
  ADMIN: "admin",
  MANAGER: "manager",
  USER: "user",
};

export const NOTIFICATION_TYPES = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
};

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  PAGE_SIZES: [10, 25, 50, 100],
};