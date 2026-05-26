// src/data/index.js
export * from "./tasks";
export * from "./users";
export * from "./activities";
export * from "./notifications";
export * from "./charts";

// Default mock data for localStorage initialization
export const defaultMockData = {
  tasks: [],
  users: [],
  activities: [],
  notifications: [],
};

export const initializeMockData = () => {
  if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
  }
  if (!localStorage.getItem("activities")) {
    localStorage.setItem("activities", JSON.stringify(activities));
  }
  if (!localStorage.getItem("notifications")) {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }
};

export const clearMockData = () => {
  localStorage.removeItem("tasks");
  localStorage.removeItem("users");
  localStorage.removeItem("activities");
  localStorage.removeItem("notifications");
};