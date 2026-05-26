// src/mock/index.js
export * from './dashboardData';
export * from './taskData';
export * from './userData';
export * from './analyticsData';
export * from './authData';

// Mock API service
export const mockApi = {
  // Dashboard endpoints
  getDashboardStats: () => Promise.resolve(dashboardData),
  getWeeklyProgress: () => Promise.resolve(dashboardData.chartData.weeklyProgress),
  
  // Task endpoints
  getAllTasks: () => Promise.resolve(taskData.tasks),
  getTaskById: (id) => Promise.resolve(taskData.tasks.find(t => t.id === id)),
  
  // User endpoints
  getCurrentUser: () => Promise.resolve(userData.currentUser),
  getTeamMembers: () => Promise.resolve(userData.teamMembers),
  
  // Analytics endpoints
  getTaskAnalytics: () => Promise.resolve(analyticsData.taskAnalytics),
  getUserAnalytics: () => Promise.resolve(analyticsData.userAnalytics),
  
  // Auth endpoints
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = validateLogin(email, password);
        if (result.success) {
          resolve(result);
        } else {
          reject(result.error);
        }
      }, 500);
    });
  },
  
  logout: () => {
    return Promise.resolve({ success: true });
  }
};