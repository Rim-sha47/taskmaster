// src/services/taskService.js
import axios from 'axios';
import { API_ENDPOINTS } from '../constants/apiEndpoints';
import { STORAGE_KEYS, getStorageItem, setStorageItem } from '../constants/localStorage';
import { taskData } from '../mock/taskData';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

class TaskService {
  constructor() {
    this.token = getStorageItem(STORAGE_KEYS.AUTH_TOKEN);
  }

  getAuthHeaders() {
    return {
      headers: { Authorization: `Bearer ${this.token}` }
    };
  }

  // Get all tasks
  async getAllTasks(filters = {}) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            let tasks = [...taskData.tasks];
            
            // Apply filters
            if (filters.status && filters.status !== 'all') {
              tasks = tasks.filter(t => t.status === filters.status);
            }
            if (filters.priority && filters.priority !== 'all') {
              tasks = tasks.filter(t => t.priority === filters.priority);
            }
            if (filters.category && filters.category !== 'all') {
              tasks = tasks.filter(t => t.category === filters.category);
            }
            if (filters.search) {
              tasks = tasks.filter(t => 
                t.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                t.description?.toLowerCase().includes(filters.search.toLowerCase())
              );
            }
            
            resolve({ success: true, tasks });
          }, 500);
        });
      }

      const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.TASKS.GET_ALL}`, {
        ...this.getAuthHeaders(),
        params: filters,
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get task by ID
  async getTaskById(taskId) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const task = taskData.tasks.find(t => t.id === parseInt(taskId));
            if (task) {
              resolve({ success: true, task });
            } else {
              reject({ message: 'Task not found' });
            }
          }, 300);
        });
      }

      const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.TASKS.GET_ONE(taskId)}`, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Create task
  async createTask(taskData) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            const newTask = {
              id: Date.now(),
              ...taskData,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              status: 'todo',
            };
            resolve({ success: true, task: newTask });
          }, 500);
        });
      }

      const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.TASKS.CREATE}`, taskData, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Update task
  async updateTask(taskId, updates) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, task: { id: taskId, ...updates, updatedAt: new Date().toISOString() } });
          }, 500);
        });
      }

      const response = await axios.put(`${API_BASE_URL}${API_ENDPOINTS.TASKS.UPDATE(taskId)}`, updates, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Delete task
  async deleteTask(taskId) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, message: 'Task deleted successfully' });
          }, 500);
        });
      }

      const response = await axios.delete(`${API_BASE_URL}${API_ENDPOINTS.TASKS.DELETE(taskId)}`, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Update task status
  async updateTaskStatus(taskId, status) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, task: { id: taskId, status, updatedAt: new Date().toISOString() } });
          }, 300);
        });
      }

      const response = await axios.patch(`${API_BASE_URL}${API_ENDPOINTS.TASKS.UPDATE_STATUS(taskId)}`, { status }, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Add subtask
  async addSubtask(taskId, subtask) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, subtask: { id: Date.now(), ...subtask, completed: false } });
          }, 300);
        });
      }

      const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.TASKS.ADD_SUBTASK(taskId)}`, subtask, this.getAuthHeaders());
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Add comment
  async addComment(taskId, comment) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, comment: { id: Date.now(), ...comment, date: new Date().toISOString() } });
          }, 300);
        });
      }

      const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.TASKS.ADD_COMMENT(taskId)}`, comment, this.getAuthHeaders());
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

export const taskService = new TaskService();