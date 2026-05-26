// src/constants/config.js
export const config = {
  app: {
    name: "TaskMaster",
    version: "1.0.0",
    description: "Modern task management platform",
    url: "https://taskmaster.app",
  },
  
  api: {
    baseUrl: import.meta.env.VITE_API_URL || "/api",
    timeout: 30000,
    retryAttempts: 3,
  },
  
  features: {
    enableNotifications: true,
    enableDragDrop: true,
    enableRealtimeUpdates: true,
    enableAnalytics: true,
  },
  
  limits: {
    maxTaskTitleLength: 100,
    maxTaskDescriptionLength: 5000,
    maxSubtasksPerTask: 20,
    maxAttachmentsPerTask: 10,
    maxFileSizeMB: 10,
  },
  
  dateFormat: {
    default: "YYYY-MM-DD",
    display: "MMM DD, YYYY",
    time: "HH:mm",
    dateTime: "MMM DD, YYYY HH:mm",
  },
  
  pagination: {
    defaultPageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
  
  theme: {
    defaultTheme: "dark",
    themes: ["dark", "light"],
    colors: {
      dark: {
        background: "bg-gray-900",
        surface: "bg-gray-800",
        primary: "bg-purple-600",
      },
      light: {
        background: "bg-gray-50",
        surface: "bg-white",
        primary: "bg-purple-500",
      },
    },
  },
};