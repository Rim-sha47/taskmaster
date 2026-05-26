// src/services/index.js
export * from './authService';
export * from './taskService';
export * from './userService';
export * from './dashboardService';
export * from './notificationService';

// Service factory for easy access
export const services = {
  auth: authService,
  task: taskService,
  user: userService,
  dashboard: dashboardService,
  notification: notificationService,
};

// Helper function to check if user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
};

// Helper function to get auth token
export const getAuthToken = () => {
  return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
};

// Setup axios interceptors for token refresh
export const setupAxiosInterceptors = (axiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        
        try {
          const { authService } = await import('./authService');
          const newToken = await authService.refreshAccessToken();
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          // Redirect to login if refresh fails
          window.location.href = '/login';
          return Promise.reject(refreshError);
        }
      }
      
      return Promise.reject(error);
    }
  );
};