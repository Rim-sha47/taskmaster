// src/mock/analyticsData.js
export const analyticsData = {
  // Task analytics
  taskAnalytics: {
    totalTasks: 382,
    completedTasks: 298,
    completionRate: 78,
    averageCompletionTime: "3.2 days",
    
    weeklyTrend: [
      { week: "Week 1", tasks: 45, completed: 32 },
      { week: "Week 2", tasks: 52, completed: 38 },
      { week: "Week 3", tasks: 48, completed: 35 },
      { week: "Week 4", tasks: 55, completed: 42 },
    ],
    
    monthlyTrend: [
      { month: "Jan", tasks: 120, completed: 95 },
      { month: "Feb", tasks: 135, completed: 108 },
      { month: "Mar", tasks: 127, completed: 95 },
    ]
  },
  
  // User analytics
  userAnalytics: {
    totalUsers: 24,
    activeUsers: 18,
    userGrowth: [
      { month: "Jan", users: 45 },
      { month: "Feb", users: 52 },
      { month: "Mar", users: 61 },
      { month: "Apr", users: 68 },
      { month: "May", users: 74 },
      { month: "Jun", users: 82 },
    ],
    
    userActivity: [
      { hour: "9 AM", activeUsers: 12 },
      { hour: "10 AM", activeUsers: 18 },
      { hour: "11 AM", activeUsers: 22 },
      { hour: "12 PM", activeUsers: 20 },
      { hour: "1 PM", activeUsers: 16 },
      { hour: "2 PM", activeUsers: 19 },
      { hour: "3 PM", activeUsers: 21 },
      { hour: "4 PM", activeUsers: 18 },
      { hour: "5 PM", activeUsers: 14 },
    ]
  },
  
  // Performance metrics
  performanceMetrics: {
    teamEfficiency: 84,
    onTimeDelivery: 76,
    customerSatisfaction: 92,
    
    topPerformers: [
      { name: "John Doe", tasksCompleted: 45, efficiency: 92 },
      { name: "Jane Smith", tasksCompleted: 52, efficiency: 88 },
      { name: "Sarah Wilson", tasksCompleted: 41, efficiency: 85 },
    ],
    
    priorityDistribution: [
      { priority: "High", percentage: 35, color: "#ef4444" },
      { priority: "Medium", percentage: 45, color: "#f59e0b" },
      { priority: "Low", percentage: 20, color: "#10b981" },
    ]
  },
  
  // Revenue analytics
  revenueAnalytics: {
    totalRevenue: 12450,
    revenueGrowth: 15,
    
    monthlyRevenue: [
      { month: "Jan", revenue: 2850 },
      { month: "Feb", revenue: 3120 },
      { month: "Mar", revenue: 2980 },
      { month: "Apr", revenue: 3500 },
    ],
    
    revenueByPlan: [
      { plan: "Basic", revenue: 4500, percentage: 36 },
      { plan: "Pro", revenue: 6250, percentage: 50 },
      { plan: "Enterprise", revenue: 1700, percentage: 14 },
    ]
  }
};

export const getTaskAnalytics = () => {
  return analyticsData.taskAnalytics;
};

export const getUserAnalytics = () => {
  return analyticsData.userAnalytics;
};

export const getPerformanceMetrics = () => {
  return analyticsData.performanceMetrics;
};