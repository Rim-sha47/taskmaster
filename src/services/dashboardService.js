// src/services/dashboardService.js
import axios from 'axios';
import { API_ENDPOINTS } from '../constants/apiEndpoints';
import { STORAGE_KEYS, getStorageItem } from '../constants/localStorage';
import { dashboardData } from '../mock/dashboardData';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

class DashboardService {
  constructor() {
    this.token = getStorageItem(STORAGE_KEYS.AUTH_TOKEN);
  }

  getAuthHeaders() {
    return {
      headers: { Authorization: `Bearer ${this.token}` }
    };
  }

  // Get dashboard statistics
  async getDashboardStats() {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, data: dashboardData });
          }, 500);
        });
      }

      const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.DASHBOARD.GET_STATS}`, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get recent activity
  async getRecentActivity() {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, activities: dashboardData.recentActivities });
          }, 400);
        });
      }

      const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.DASHBOARD.GET_ACTIVITY}`, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get chart data
  async getChartData() {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, data: dashboardData.chartData });
          }, 400);
        });
      }

      const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.DASHBOARD.GET_CHARTS}`, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get recent tasks
  async getRecentTasks() {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, tasks: dashboardData.upcomingDeadlines });
          }, 300);
        });
      }

      const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.DASHBOARD.GET_RECENT_TASKS}`, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response) {
      return {
        status: error.response.status,
        message: error.response.data?.message || 'An error occurred',
      };
    } else if (error.request) {
      return {
        status: 0,
        message: 'Network error. Please check your connection.',
      };
    } else {
      return {
        status: 500,
        message: error.message || 'An unexpected error occurred',
      };
    }
  }
}

export const dashboardService = new DashboardService();