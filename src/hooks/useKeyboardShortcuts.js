// src/hooks/useKeyboardShortcuts.js
import { useEffect, useCallback } from 'react';

export const useKeyboardShortcuts = (shortcuts) => {
  const handleKeyPress = useCallback((event) => {
    const { key, ctrlKey, shiftKey, altKey, metaKey } = event;
    
    for (const shortcut of shortcuts) {
      const matches = (
        shortcut.key === key &&
        (shortcut.ctrl === ctrlKey || !shortcut.ctrl) &&
        (shortcut.shift === shiftKey || !shortcut.shift) &&
        (shortcut.alt === altKey || !shortcut.alt) &&
        (shortcut.meta === metaKey || !shortcut.meta)
      );
      
      if (matches) {
        event.preventDefault();
        shortcut.callback(event);
        break;
      }
    }
  }, [shortcuts]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);
};

// Predefined shortcut combinations
export const SHORTCUTS = {
  SAVE: { key: 's', ctrl: true },
  SEARCH: { key: 'f', ctrl: true },
  NEW_TASK: { key: 't', ctrl: true },
  DELETE: { key: 'Delete' },
  ESCAPE: { key: 'Escape' },
  TOGGLE_SIDEBAR: { key: 'b', ctrl: true },
  TOGGLE_THEME: { key: 'd', ctrl: true },
};