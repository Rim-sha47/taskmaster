// src/mock/taskData.js
export const taskData = {
  tasks: [
    {
      id: 1,
      title: "Design Dashboard UI",
      description: "Create a modern dashboard design with glassmorphism effects",
      priority: "high",
      status: "completed",
      category: "design",
      dueDate: "2024-01-15",
      createdAt: "2024-01-10",
      assignee: "John Doe",
      tags: ["ui", "dashboard"],
      subtasks: [
        { id: 1, title: "Create wireframes", completed: true },
        { id: 2, title: "Design components", completed: true }
      ]
    },
    {
      id: 2,
      title: "Implement Authentication",
      description: "Add JWT-based authentication system",
      priority: "high",
      status: "in-progress",
      category: "development",
      dueDate: "2024-01-20",
      createdAt: "2024-01-11",
      assignee: "Jane Smith",
      tags: ["backend", "security"],
      subtasks: [
        { id: 1, title: "Setup JWT", completed: true },
        { id: 2, title: "Create login page", completed: false }
      ]
    },
    {
      id: 3,
      title: "Create Analytics Charts",
      description: "Implement Recharts for data visualization",
      priority: "medium",
      status: "todo",
      category: "development",
      dueDate: "2024-01-25",
      createdAt: "2024-01-12",
      assignee: "Mike Johnson",
      tags: ["charts", "analytics"],
      subtasks: []
    },
    {
      id: 4,
      title: "Setup Database Schema",
      description: "Design and implement database schema",
      priority: "high",
      status: "review",
      category: "development",
      dueDate: "2024-01-18",
      createdAt: "2024-01-09",
      assignee: "Sarah Wilson",
      tags: ["database", "backend"],
      subtasks: [
        { id: 1, title: "Design ERD", completed: true },
        { id: 2, title: "Create migrations", completed: true }
      ]
    },
    {
      id: 5,
      title: "Optimize Performance",
      description: "Improve loading speed and bundle size",
      priority: "medium",
      status: "todo",
      category: "optimization",
      dueDate: "2024-01-30",
      createdAt: "2024-01-13",
      assignee: "Mike Johnson",
      tags: ["performance"],
      subtasks: []
    },
    {
      id: 6,
      title: "Write Documentation",
      description: "Create comprehensive API documentation",
      priority: "low",
      status: "todo",
      category: "documentation",
      dueDate: "2024-02-05",
      createdAt: "2024-01-14",
      assignee: "Jane Smith",
      tags: ["docs"],
      subtasks: []
    }
  ],
  
  columns: [
    { id: "todo", title: "To Do", color: "blue" },
    { id: "in-progress", title: "In Progress", color: "yellow" },
    { id: "review", title: "Review", color: "purple" },
    { id: "completed", title: "Completed", color: "green" }
  ]
};

export const getTasksByStatus = (status) => {
  return taskData.tasks.filter(task => task.status === status);
};

export const getTasksByPriority = (priority) => {
  return taskData.tasks.filter(task => task.priority === priority);
};