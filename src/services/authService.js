// src/services/authService.js
import axios from 'axios';
import { API_ENDPOINTS } from '../constants/apiEndpoints';
import { STORAGE_KEYS, setStorageItem, getStorageItem, removeStorageItem } from '../constants/localStorage';
import { validateLogin, generateOTP, verifyOTP, createResetToken, validateResetToken } from '../mock/authData';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

class AuthService {
  constructor() {
    this.token = getStorageItem(STORAGE_KEYS.AUTH_TOKEN);
    this.refreshToken = getStorageItem(STORAGE_KEYS.REFRESH_TOKEN);
  }

  // Login user
  async login(email, password) {
    try {
      // For development with mock data
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const result = validateLogin(email, password);
            if (result.success) {
              this.setTokens(result.token, result.refreshToken);
              setStorageItem(STORAGE_KEYS.USER, result.user);
              resolve(result);
            } else {
              reject({ message: result.error });
            }
          }, 500);
        });
      }

      // Real API call
      const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.AUTH.LOGIN}`, {
        email,
        password,
      });
      
      const { token, refreshToken, user } = response.data;
      this.setTokens(token, refreshToken);
      setStorageItem(STORAGE_KEYS.USER, user);
      
      return { success: true, user, token };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Register user
  async register(userData) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            const newUser = {
              id: Date.now(),
              ...userData,
              role: 'user',
              createdAt: new Date().toISOString(),
            };
            resolve({ success: true, user: newUser });
          }, 500);
        });
      }

      const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.AUTH.REGISTER}`, userData);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Logout user
  async logout() {
    try {
      if (import.meta.env.VITE_USE_MOCK !== 'true') {
        await axios.post(`${API_BASE_URL}${API_ENDPOINTS.AUTH.LOGOUT}`, {}, {
          headers: { Authorization: `Bearer ${this.token}` }
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.clearTokens();
      removeStorageItem(STORAGE_KEYS.USER);
      removeStorageItem(STORAGE_KEYS.AUTH_TOKEN);
      removeStorageItem(STORAGE_KEYS.REFRESH_TOKEN);
    }
  }

  // Forgot password
  async forgotPassword(email) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            const otp = generateOTP(email);
            console.log(`OTP for ${email}: ${otp}`); // In real app, send via email
            resolve({ success: true, message: 'Reset link sent to your email' });
          }, 1000);
        });
      }

      const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.AUTH.FORGOT_PASSWORD}`, { email });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Verify OTP
  async verifyOTP(email, otp) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const isValid = verifyOTP(email, otp);
            if (isValid) {
              const resetToken = createResetToken(email);
              resolve({ success: true, resetToken });
            } else {
              reject({ message: 'Invalid or expired OTP' });
            }
          }, 500);
        });
      }

      const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.AUTH.VERIFY_OTP}`, { email, otp });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Reset password
  async resetPassword(token, newPassword) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const email = validateResetToken(token);
            if (email) {
              resolve({ success: true, message: 'Password reset successfully' });
            } else {
              reject({ message: 'Invalid or expired reset token' });
            }
          }, 500);
        });
      }

      const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.AUTH.RESET_PASSWORD}`, {
        token,
        password: newPassword,
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Refresh token
  async refreshAccessToken() {
    try {
      if (!this.refreshToken) {
        throw new Error('No refresh token available');
      }

      const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.AUTH.REFRESH_TOKEN}`, {
        refreshToken: this.refreshToken,
      });
      
      const { token, refreshToken } = response.data;
      this.setTokens(token, refreshToken);
      
      return token;
    } catch (error) {
      this.clearTokens();
      throw this.handleError(error);
    }
  }

  // Get current user
  async getCurrentUser() {
    try {
      const cachedUser = getStorageItem(STORAGE_KEYS.USER);
      if (cachedUser) {
        return cachedUser;
      }

      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              id: 1,
              name: 'John Doe',
              email: 'john@example.com',
              role: 'admin',
            });
          }, 500);
        });
      }

      const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.USERS.GET_PROFILE}`, {
        headers: { Authorization: `Bearer ${this.token}` }
      });
      
      setStorageItem(STORAGE_KEYS.USER, response.data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Update profile
  async updateProfile(profileData) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve) => {
          setTimeout(() => {
            const updatedUser = { ...getStorageItem(STORAGE_KEYS.USER), ...profileData };
            setStorageItem(STORAGE_KEYS.USER, updatedUser);
            resolve({ success: true, user: updatedUser });
          }, 500);
        });
      }

      const response = await axios.put(`${API_BASE_URL}${API_ENDPOINTS.USERS.UPDATE_PROFILE}`, profileData, {
        headers: { Authorization: `Bearer ${this.token}` }
      });
      
      setStorageItem(STORAGE_KEYS.USER, response.data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Change password
  async changePassword(currentPassword, newPassword) {
    try {
      if (import.meta.env.VITE_USE_MOCK === 'true') {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Mock validation
            if (currentPassword === 'oldpassword') {
              resolve({ success: true, message: 'Password changed successfully' });
            } else {
              reject({ message: 'Current password is incorrect' });
            }
          }, 500);
        });
      }

      const response = await axios.put(`${API_BASE_URL}${API_ENDPOINTS.USERS.UPDATE_PASSWORD}`, {
        currentPassword,
        newPassword,
      }, {
        headers: { Authorization: `Bearer ${this.token}` }
      });
      
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Helper methods
  setTokens(token, refreshToken) {
    this.token = token;
    this.refreshToken = refreshToken;
    setStorageItem(STORAGE_KEYS.AUTH_TOKEN, token);
    if (refreshToken) {
      setStorageItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
    }
  }

  clearTokens() {
    this.token = null;
    this.refreshToken = null;
    removeStorageItem(STORAGE_KEYS.AUTH_TOKEN);
    removeStorageItem(STORAGE_KEYS.REFRESH_TOKEN);
  }

  isAuthenticated() {
    return !!this.token;
  }

  getToken() {
    return this.token;
  }

  handleError(error) {
    if (error.response) {
      // Server responded with error
      return {
        status: error.response.status,
        message: error.response.data?.message || 'An error occurred',
        data: error.response.data,
      };
    } else if (error.request) {
      // Request was made but no response
      return {
        status: 0,
        message: 'Network error. Please check your connection.',
      };
    } else {
      // Something else happened
      return {
        status: 500,
        message: error.message || 'An unexpected error occurred',
      };
    }
  }
}

export const authService = new AuthService();

// Convenience functions
export const loginUser = async (email, password) => {
  try {
    const result = await authService.login(email, password);
    return result;
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const registerUser = async (userData) => {
  try {
    const result = await authService.register(userData);
    return result;
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const logoutUser = async () => {
  await authService.logout();
};

export const isAuthenticated = () => {
  return authService.isAuthenticated();
};

export const getCurrentUser = async () => {
  return await authService.getCurrentUser();
};