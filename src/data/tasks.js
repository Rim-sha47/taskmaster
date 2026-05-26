// src/data/tasks.js
export const tasks = [
  {
    id: 1,
    title: "Design Dashboard UI",
    description: "Create a modern dashboard design with glassmorphism effects and responsive layouts",
    priority: "high",
    status: "completed",
    category: "design",
    dueDate: "2024-01-15",
    createdAt: "2024-01-10T08:00:00Z",
    updatedAt: "2024-01-14T15:30:00Z",
    assignee: {
      id: 1,
      name: "John Doe",
      avatar: "https://ui-avatars.com/api/?name=John+Doe&background=8b5cf6&color=fff"
    },
    tags: ["ui", "dashboard", "premium"],
    subtasks: [
      { id: 101, title: "Create wireframes", completed: true },
      { id: 102, title: "Design components", completed: true },
      { id: 103, title: "Review with team", completed: false }
    ],
    comments: [
      { 
        id: 1001, 
        user: "Jane Smith", 
        text: "Great progress on this!", 
        date: "2024-01-12T10:30:00Z",
        avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=8b5cf6&color=fff"
      }
    ],
    attachments: [
      { id: 2001, name: "dashboard-design.fig", size: "2.5 MB", type: "figma" }
    ]
  },
  {
    id: 2,
    title: "Implement Authentication System",
    description: "Add JWT-based authentication with login, signup, and password reset functionality",
    priority: "high",
    status: "in-progress",
    category: "development",
    dueDate: "2024-01-20",
    createdAt: "2024-01-11T09:00:00Z",
    updatedAt: "2024-01-15T14:20:00Z",
    assignee: {
      id: 2,
      name: "Jane Smith",
      avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=8b5cf6&color=fff"
    },
    tags: ["backend", "security", "jwt"],
    subtasks: [
      { id: 201, title: "Setup JWT", completed: true },
      { id: 202, title: "Create login page", completed: false },
      { id: 203, title: "Add validation", completed: false },
      { id: 204, title: "Implement OTP verification", completed: false }
    ],
    comments: [
      { 
        id: 1002, 
        user: "Mike Johnson", 
        text: "Need help with OTP implementation?", 
        date: "2024-01-13T11:15:00Z",
        avatar: "https://ui-avatars.com/api/?name=Mike+Johnson&background=8b5cf6&color=fff"
      }
    ],
    attachments: []
  },
  {
    id: 3,
    title: "Create Analytics Charts",
    description: "Implement Recharts for dashboard analytics and task statistics visualization",
    priority: "medium",
    status: "todo",
    category: "development",
    dueDate: "2024-01-25",
    createdAt: "2024-01-12T10:00:00Z",
    updatedAt: "2024-01-12T10:00:00Z",
    assignee: {
      id: 3,
      name: "Mike Johnson",
      avatar: "https://ui-avatars.com/api/?name=Mike+Johnson&background=8b5cf6&color=fff"
    },
    tags: ["charts", "analytics", "recharts"],
    subtasks: [
      { id: 301, title: "Research chart libraries", completed: false },
      { id: 302, title: "Create line chart component", completed: false },
      { id: 303, title: "Add pie chart for priorities", completed: false }
    ],
    comments: [],
    attachments: []
  },
  {
    id: 4,
    title: "Setup Database Schema",
    description: "Design and implement database schema for tasks, users, and team management",
    priority: "high",
    status: "review",
    category: "development",
    dueDate: "2024-01-18",
    createdAt: "2024-01-09T14:00:00Z",
    updatedAt: "2024-01-14T16:45:00Z",
    assignee: {
      id: 4,
      name: "Sarah Wilson",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Wilson&background=8b5cf6&color=fff"
    },
    tags: ["database", "backend", "schema"],
    subtasks: [
      { id: 401, title: "Design ERD", completed: true },
      { id: 402, title: "Create migrations", completed: true },
      { id: 403, title: "Setup indexes", completed: false },
      { id: 404, title: "Test relationships", completed: false }
    ],
    comments: [
      { 
        id: 1003, 
        user: "John Doe", 
        text: "Schema looks good. Let's review together", 
        date: "2024-01-14T09:00:00Z",
        avatar: "https://ui-avatars.com/api/?name=John+Doe&background=8b5cf6&color=fff"
      }
    ],
    attachments: [
      { id: 2002, name: "database-schema.png", size: "1.2 MB", type: "image" }
    ]
  },
  {
    id: 5,
    title: "Optimize Performance",
    description: "Improve loading speed, implement lazy loading, and optimize bundle size",
    priority: "medium",
    status: "todo",
    category: "optimization",
    dueDate: "2024-01-30",
    createdAt: "2024-01-13T11:00:00Z",
    updatedAt: "2024-01-13T11:00:00Z",
    assignee: {
      id: 3,
      name: "Mike Johnson",
      avatar: "https://ui-avatars.com/api/?name=Mike+Johnson&background=8b5cf6&color=fff"
    },
    tags: ["performance", "optimization", "frontend"],
    subtasks: [
      { id: 501, title: "Analyze bundle size", completed: false },
      { id: 502, title: "Implement code splitting", completed: false },
      { id: 503, title: "Add lazy loading", completed: false }
    ],
    comments: [],
    attachments: []
  },
  {
    id: 6,
    title: "Write Documentation",
    description: "Create comprehensive documentation for API endpoints and component library",
    priority: "low",
    status: "todo",
    category: "documentation",
    dueDate: "2024-02-05",
    createdAt: "2024-01-14T09:00:00Z",
    updatedAt: "2024-01-14T09:00:00Z",
    assignee: {
      id: 2,
      name: "Jane Smith",
      avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=8b5cf6&color=fff"
    },
    tags: ["documentation", "api", "components"],
    subtasks: [
      { id: 601, title: "Document API endpoints", completed: false },
      { id: 602, title: "Create component examples", completed: false },
      { id: 603, title: "Write setup guide", completed: false }
    ],
    comments: [],
    attachments: []
  },
  {
    id: 7,
    title: "Mobile Responsive Design",
    description: "Ensure all pages are fully responsive on mobile, tablet, and desktop devices",
    priority: "high",
    status: "in-progress",
    category: "design",
    dueDate: "2024-01-22",
    createdAt: "2024-01-10T13:00:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
    assignee: {
      id: 1,
      name: "John Doe",
      avatar: "https://ui-avatars.com/api/?name=John+Doe&background=8b5cf6&color=fff"
    },
    tags: ["responsive", "mobile", "css"],
    subtasks: [
      { id: 701, title: "Mobile sidebar", completed: true },
      { id: 702, title: "Responsive tables", completed: false },
      { id: 703, title: "Touch interactions", completed: false }
    ],
    comments: [
      { 
        id: 1004, 
        user: "Sarah Wilson", 
        text: "Mobile menu looks great!", 
        date: "2024-01-14T14:00:00Z",
        avatar: "https://ui-avatars.com/api/?name=Sarah+Wilson&background=8b5cf6&color=fff"
      }
    ],
    attachments: []
  },
  {
    id: 8,
    title: "Add Dark/Light Mode",
    description: "Implement theme switching with dark and light mode support",
    priority: "medium",
    status: "completed",
    category: "design",
    dueDate: "2024-01-12",
    createdAt: "2024-01-08T08:00:00Z",
    updatedAt: "2024-01-11T17:00:00Z",
    assignee: {
      id: 1,
      name: "John Doe",
      avatar: "https://ui-avatars.com/api/?name=John+Doe&background=8b5cf6&color=fff"
    },
    tags: ["theme", "darkmode", "ui"],
    subtasks: [
      { id: 801, title: "Create theme context", completed: true },
      { id: 802, title: "Add theme toggle button", completed: true },
      { id: 803, title: "Style components for both themes", completed: true }
    ],
    comments: [],
    attachments: []
  }
];

export const getTasksByStatus = (status) => {
  return tasks.filter(task => task.status === status);
};

export const getTasksByPriority = (priority) => {
  return tasks.filter(task => task.priority === priority);
};

export const getTasksByCategory = (category) => {
  return tasks.filter(task => task.category === category);
};

export const getTasksByAssignee = (assigneeId) => {
  return tasks.filter(task => task.assignee?.id === assigneeId);
};

export const getOverdueTasks = () => {
  const today = new Date();
  return tasks.filter(task => {
    if (!task.dueDate) return false;
    return new Date(task.dueDate) < today && task.status !== 'completed';
  });
};

export const getTodayTasks = () => {
  const today = new Date().toISOString().split('T')[0];
  return tasks.filter(task => task.dueDate === today);
};

export const getUpcomingTasks = (days = 7) => {
  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + days);
  return tasks.filter(task => {
    if (!task.dueDate) return false;
    const dueDate = new Date(task.dueDate);
    return dueDate >= today && dueDate <= futureDate && task.status !== 'completed';
  });
};

export const getTaskStatistics = () => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === 'completed').length;
  const inProgress = tasks.filter(t => t.status === 'in-progress').length;
  const todo = tasks.filter(t => t.status === 'todo').length;
  const review = tasks.filter(t => t.status === 'review').length;
  const highPriority = tasks.filter(t => t.priority === 'high').length;
  const mediumPriority = tasks.filter(t => t.priority === 'medium').length;
  const lowPriority = tasks.filter(t => t.priority === 'low').length;
  
  return {
    total,
    completed,
    inProgress,
    todo,
    review,
    completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
    priorityBreakdown: {
      high: highPriority,
      medium: mediumPriority,
      low: lowPriority
    },
    statusBreakdown: {
      todo,
      inProgress,
      review,
      completed
    }
  };
};