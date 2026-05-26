// src/services/notificationService.js
import axios from 'axios';
import { API_ENDPOINTS } from '../constants/apiEndpoints';
import { STORAGE_KEYS, getStorageItem } from '../constants/localStorage';
import { userData } from '../mock/userData';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

class NotificationService {
  constructor() {
    this.token = getStorageItem(STORAGE_KEYS.AUTH_TOKEN);
  }

  getAuthHeaders() {
    return {
      headers: { Authorization: `Bearer ${this.token}` }
    };
  }

  // Get all notifications
  async getNotifications() {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, notifications: userData.notifications });
          }, 300);
        });
      }

      const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.NOTIFICATIONS.GET_ALL}`, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Mark notification as read
  async markAsRead(notificationId) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, message: 'Notification marked as read' });
          }, 200);
        });
      }

      const response = await axios.patch(`${API_BASE_URL}${API_ENDPOINTS.NOTIFICATIONS.MARK_READ(notificationId)}`, {}, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Mark all notifications as read
  async markAllAsRead() {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, message: 'All notifications marked as read' });
          }, 300);
        });
      }

      const response = await axios.patch(`${API_BASE_URL}${API_ENDPOINTS.NOTIFICATIONS.MARK_ALL_READ}`, {}, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Delete notification
  async deleteNotification(notificationId) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, message: 'Notification deleted' });
          }, 200);
        });
      }

      const response = await axios.delete(`${API_BASE_URL}${API_ENDPOINTS.NOTIFICATIONS.DELETE(notificationId)}`, this.getAuthHeaders());
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

export const notificationService = new NotificationService();