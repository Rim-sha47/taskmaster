// src/hooks/useTaskFilters.js
import { useState, useMemo, useCallback } from 'react';
import { useTaskStore } from '../store/useTaskStore';

export const useTaskFilters = () => {
  const { tasks, filters, setFilters } = useTaskStore();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = useMemo(() => {
    let filtered = [...tasks];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (filters.status !== 'all') {
      filtered = filtered.filter(task => task.status === filters.status);
    }

    // Apply priority filter
    if (filters.priority !== 'all') {
      filtered = filtered.filter(task => task.priority === filters.priority);
    }

    // Apply category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(task => task.category === filters.category);
    }

    return filtered;
  }, [tasks, filters, searchTerm]);

  const updateSearch = useCallback((term) => {
    setSearchTerm(term);
    setFilters({ search: term });
  }, [setFilters]);

  const clearFilters = useCallback(() => {
    setFilters({
      status: 'all',
      priority: 'all',
      category: 'all',
      search: '',
    });
    setSearchTerm('');
  }, [setFilters]);

  const hasActiveFilters = filters.status !== 'all' || 
                          filters.priority !== 'all' || 
                          filters.category !== 'all' || 
                          searchTerm !== '';

  return {
    filteredTasks,
    searchTerm,
    updateSearch,
    clearFilters,
    hasActiveFilters,
    activeFiltersCount: (filters.status !== 'all' ? 1 : 0) +
                       (filters.priority !== 'all' ? 1 : 0) +
                       (filters.category !== 'all' ? 1 : 0) +
                       (searchTerm !== '' ? 1 : 0),
  };
};