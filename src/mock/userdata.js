// src/mock/userData.js
export const userData = {
  currentUser: {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    avatar: "https://ui-avatars.com/api/?name=John+Doe&background=8b5cf6&color=fff",
    bio: "Lead Developer with 8+ years of experience in full-stack development",
    location: "New York, USA",
    phone: "+1 234 567 8900",
    joinDate: "2023-01-15",
    stats: {
      tasksCompleted: 156,
      projectsCompleted: 12,
      hoursWorked: 1248,
      achievements: 24
    }
  },
  
  teamMembers: [
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "manager",
      department: "Product",
      avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=8b5cf6&color=fff",
      status: "active",
      tasksCompleted: 98
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      role: "developer",
      department: "Engineering",
      avatar: "https://ui-avatars.com/api/?name=Mike+Johnson&background=8b5cf6&color=fff",
      status: "active",
      tasksCompleted: 87
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      role: "developer",
      department: "Engineering",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Wilson&background=8b5cf6&color=fff",
      status: "active",
      tasksCompleted: 112
    },
    {
      id: 5,
      name: "Alex Brown",
      email: "alex.brown@example.com",
      role: "designer",
      department: "Design",
      avatar: "https://ui-avatars.com/api/?name=Alex+Brown&background=8b5cf6&color=fff",
      status: "inactive",
      tasksCompleted: 45
    }
  ],
  
  notifications: [
    {
      id: 1,
      title: "Task Completed",
      message: "Your task 'Design Dashboard' has been completed",
      type: "success",
      read: false,
      time: "5 minutes ago"
    },
    {
      id: 2,
      title: "New Assignment",
      message: "You have been assigned to 'API Integration' task",
      type: "info",
      read: false,
      time: "1 hour ago"
    },
    {
      id: 3,
      title: "Deadline Approaching",
      message: "Task 'Database Setup' is due tomorrow",
      type: "warning",
      read: true,
      time: "2 hours ago"
    }
  ]
};

export const getCurrentUser = () => {
  return userData.currentUser;
};

export const getTeamMembers = () => {
  return userData.teamMembers;
};

export const getUserNotifications = () => {
  return userData.notifications;
};