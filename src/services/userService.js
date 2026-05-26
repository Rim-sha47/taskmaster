// src/services/userService.js
import axios from 'axios';
import { API_ENDPOINTS } from '../constants/apiEndpoints';
import { STORAGE_KEYS, getStorageItem } from '../constants/localStorage';
import { userData } from '../mock/userData';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

class UserService {
  constructor() {
    this.token = getStorageItem(STORAGE_KEYS.AUTH_TOKEN);
  }

  getAuthHeaders() {
    return {
      headers: { Authorization: `Bearer ${this.token}` }
    };
  }

  // Get all users
  async getAllUsers() {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, users: userData.teamMembers });
          }, 500);
        });
      }

      const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.USERS.GET_ALL}`, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get user by ID
  async getUserById(userId) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const user = userData.teamMembers.find(u => u.id === parseInt(userId));
            if (user) {
              resolve({ success: true, user });
            } else {
              reject({ message: 'User not found' });
            }
          }, 300);
        });
      }

      const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.USERS.GET_ONE(userId)}`, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get team members
  async getTeamMembers() {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, users: userData.teamMembers });
          }, 400);
        });
      }

      const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.USERS.GET_ALL}`, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Update user (admin only)
  async updateUser(userId, userData) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, user: { id: userId, ...userData } });
          }, 500);
        });
      }

      const response = await axios.put(`${API_BASE_URL}${API_ENDPOINTS.ADMIN.UPDATE_USER(userId)}`, userData, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Delete user (admin only)
  async deleteUser(userId) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, message: 'User deleted successfully' });
          }, 500);
        });
      }

      const response = await axios.delete(`${API_BASE_URL}${API_ENDPOINTS.ADMIN.DELETE_USER(userId)}`, this.getAuthHeaders());
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

export const userService = new UserService();