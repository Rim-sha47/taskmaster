// src/hooks/useNotification.js
import { useCallback } from 'react';
import toast from 'react-hot-toast';

export const useNotification = () => {
  const showSuccess = useCallback((message, options = {}) => {
    toast.success(message, {
      duration: 4000,
      position: 'top-right',
      ...options,
    });
  }, []);

  const showError = useCallback((message, options = {}) => {
    toast.error(message, {
      duration: 5000,
      position: 'top-right',
      ...options,
    });
  }, []);

  const showInfo = useCallback((message, options = {}) => {
    toast(message, {
      duration: 3000,
      position: 'top-right',
      icon: 'ℹ️',
      ...options,
    });
  }, []);

  const showWarning = useCallback((message, options = {}) => {
    toast(message, {
      duration: 4000,
      position: 'top-right',
      icon: '⚠️',
      ...options,
    });
  }, []);

  const showLoading = useCallback((message = 'Loading...') => {
    return toast.loading(message, {
      position: 'top-right',
    });
  }, []);

  const dismiss = useCallback((toastId) => {
    toast.dismiss(toastId);
  }, []);

  return {
    showSuccess,
    showError,
    showInfo,
    showWarning,
    showLoading,
    dismiss,
  };
};