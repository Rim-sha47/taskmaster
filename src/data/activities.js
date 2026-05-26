// src/data/activities.js
export const activities = [
  {
    id: 1,
    user: {
      id: 1,
      name: "John Doe",
      avatar: "https://ui-avatars.com/api/?name=John+Doe&background=8b5cf6&color=fff"
    },
    action: "completed task",
    target: "Design Dashboard UI",
    targetId: 1,
    timestamp: "2024-01-14T10:30:00Z",
    type: "task_completed"
  },
  {
    id: 2,
    user: {
      id: 2,
      name: "Jane Smith",
      avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=8b5cf6&color=fff"
    },
    action: "created new task",
    target: "Implement Authentication System",
    targetId: 2,
    timestamp: "2024-01-14T09:15:00Z",
    type: "task_created"
  },
  {
    id: 3,
    user: {
      id: 3,
      name: "Mike Johnson",
      avatar: "https://ui-avatars.com/api/?name=Mike+Johnson&background=8b5cf6&color=fff"
    },
    action: "commented on",
    target: "Setup Database Schema",
    targetId: 4,
    timestamp: "2024-01-13T14:45:00Z",
    type: "comment_added",
    comment: "Schema looks good!"
  },
  {
    id: 4,
    user: {
      id: 4,
      name: "Sarah Wilson",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Wilson&background=8b5cf6&color=fff"
    },
    action: "updated task",
    target: "Mobile Responsive Design",
    targetId: 7,
    timestamp: "2024-01-13T11:00:00Z",
    type: "task_updated"
  },
  {
    id: 5,
    user: {
      id: 1,
      name: "John Doe",
      avatar: "https://ui-avatars.com/api/?name=John+Doe&background=8b5cf6&color=fff"
    },
    action: "assigned task",
    target: "Create Analytics Charts",
    targetId: 3,
    timestamp: "2024-01-12T16:20:00Z",
    type: "task_assigned",
    assignee: "Mike Johnson"
  },
  {
    id: 6,
    user: {
      id: 2,
      name: "Jane Smith",
      avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=8b5cf6&color=fff"
    },
    action: "joined the team",
    target: "",
    targetId: null,
    timestamp: "2024-01-11T09:00:00Z",
    type: "user_joined"
  },
  {
    id: 7,
    user: {
      id: 5,
      name: "Alex Brown",
      avatar: "https://ui-avatars.com/api/?name=Alex+Brown&background=8b5cf6&color=fff"
    },
    action: "added attachment",
    target: "database-schema.png",
    targetId: 4,
    timestamp: "2024-01-10T13:30:00Z",
    type: "attachment_added"
  }
];

export const getRecentActivities = (limit = 10) => {
  return activities.slice(0, limit);
};

export const getActivitiesByUser = (userId) => {
  return activities.filter(activity => activity.user.id === userId);
};

export const getActivitiesByType = (type) => {
  return activities.filter(activity => activity.type === type);
};