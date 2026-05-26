// src/mock/dashboardData.js
export const dashboardData = {
  totalTasks: 128,
  completedTasks: 96,
  pendingTasks: 22,
  teamMembers: 14,
  inProgressTasks: 8,
  reviewTasks: 2,
  completionRate: 75,
  
  // Weekly statistics
  weeklyStats: {
    monday: { tasks: 18, completed: 12 },
    tuesday: { tasks: 22, completed: 16 },
    wednesday: { tasks: 20, completed: 14 },
    thursday: { tasks: 24, completed: 18 },
    friday: { tasks: 26, completed: 20 },
    saturday: { tasks: 12, completed: 10 },
    sunday: { tasks: 6, completed: 6 },
  },
  
  // Monthly statistics
  monthlyStats: {
    week1: { tasks: 45, completed: 32 },
    week2: { tasks: 52, completed: 38 },
    week3: { tasks: 48, completed: 35 },
    week4: { tasks: 55, completed: 42 },
  },
  
  // Priority breakdown
  priorityBreakdown: {
    high: 35,
    medium: 45,
    low: 20,
  },
  
  // Category breakdown
  categoryBreakdown: {
    development: 40,
    design: 25,
    documentation: 15,
    optimization: 20,
  },
  
  // Team performance
  teamPerformance: [
    { name: "John Doe", tasks: 45, completed: 38, efficiency: 84 },
    { name: "Jane Smith", tasks: 52, completed: 42, efficiency: 81 },
    { name: "Mike Johnson", tasks: 38, completed: 32, efficiency: 84 },
    { name: "Sarah Wilson", tasks: 41, completed: 35, efficiency: 85 },
  ],
  
  // Recent activities
  recentActivities: [
    {
      id: 1,
      user: "John Doe",
      action: "completed task",
      target: "Design Dashboard UI",
      time: "5 minutes ago",
      avatar: "https://ui-avatars.com/api/?name=John+Doe&background=8b5cf6&color=fff"
    },
    {
      id: 2,
      user: "Jane Smith",
      action: "created new task",
      target: "Implement Authentication",
      time: "1 hour ago",
      avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=8b5cf6&color=fff"
    },
    {
      id: 3,
      user: "Mike Johnson",
      action: "commented on",
      target: "Setup Database",
      time: "2 hours ago",
      avatar: "https://ui-avatars.com/api/?name=Mike+Johnson&background=8b5cf6&color=fff"
    },
    {
      id: 4,
      user: "Sarah Wilson",
      action: "joined the team",
      target: "",
      time: "1 day ago",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Wilson&background=8b5cf6&color=fff"
    }
  ],
  
  // Upcoming deadlines
  upcomingDeadlines: [
    {
      id: 1,
      title: "API Integration",
      dueDate: "2024-01-20",
      priority: "high",
      assignee: "Jane Smith"
    },
    {
      id: 2,
      title: "Database Optimization",
      dueDate: "2024-01-22",
      priority: "medium",
      assignee: "Mike Johnson"
    },
    {
      id: 3,
      title: "UI Testing",
      dueDate: "2024-01-25",
      priority: "low",
      assignee: "John Doe"
    }
  ],
  
  // Chart data for analytics
  chartData: {
    weeklyProgress: [
      { day: "Mon", tasks: 12, completed: 8 },
      { day: "Tue", tasks: 15, completed: 10 },
      { day: "Wed", tasks: 18, completed: 12 },
      { day: "Thu", tasks: 14, completed: 11 },
      { day: "Fri", tasks: 20, completed: 15 },
      { day: "Sat", tasks: 10, completed: 7 },
      { day: "Sun", tasks: 8, completed: 5 },
    ],
    productivity: [
      { hour: "9 AM", productivity: 85 },
      { hour: "10 AM", productivity: 92 },
      { hour: "11 AM", productivity: 88 },
      { hour: "12 PM", productivity: 78 },
      { hour: "1 PM", productivity: 75 },
      { hour: "2 PM", productivity: 82 },
      { hour: "3 PM", productivity: 86 },
      { hour: "4 PM", productivity: 84 },
      { hour: "5 PM", productivity: 80 },
    ]
  }
};

export const getDashboardStats = () => {
  return dashboardData;
};

export const getWeeklyProgress = () => {
  return dashboardData.chartData.weeklyProgress;
};

export const getUpcomingTasks = () => {
  return dashboardData.upcomingDeadlines;
};