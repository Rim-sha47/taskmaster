// src/data/notifications.js
export const notifications = [
  {
    id: 1,
    title: "Task Completed",
    message: "John Doe completed the task 'Design Dashboard UI'",
    type: "success",
    read: false,
    timestamp: "2024-01-14T10:35:00Z",
    taskId: 1,
    userId: 2
  },
  {
    id: 2,
    title: "New Task Assigned",
    message: "You have been assigned to 'Implement Authentication System'",
    type: "info",
    read: false,
    timestamp: "2024-01-14T09:20:00Z",
    taskId: 2,
    userId: 3
  },
  {
    id: 3,
    title: "Deadline Approaching",
    message: "Task 'Setup Database Schema' is due tomorrow",
    type: "warning",
    read: false,
    timestamp: "2024-01-14T08:00:00Z",
    taskId: 4,
    userId: 4
  },
  {
    id: 4,
    title: "New Comment",
    message: "Jane Smith commented on your task",
    type: "info",
    read: true,
    timestamp: "2024-01-13T15:00:00Z",
    taskId: 1,
    userId: 1
  },
  {
    id: 5,
    title: "Task Overdue",
    message: "Task 'Write Documentation' is now overdue",
    type: "error",
    read: false,
    timestamp: "2024-01-13T10:00:00Z",
    taskId: 6,
    userId: 2
  }
];

export const getUnreadNotifications = () => {
  return notifications.filter(notif => !notif.read);
};

export const getNotificationsByUser = (userId) => {
  return notifications.filter(notif => notif.userId === userId);
};