// src/constants/routes.js
export const routes = {
  // Auth Routes
  login: "/login",
  register: "/register",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  verifyOtp: "/verify-otp",
  
  // Main Routes
  dashboard: "/dashboard",
  tasks: "/tasks",
  kanban: "/kanban",
  calendar: "/calendar",
  team: "/team",
  analytics: "/analytics",
  activity: "/activity",
  
  // Task Sub-routes
  allTasks: "/tasks/all",
  completedTasks: "/tasks/completed",
  pendingTasks: "/tasks/pending",
  
  // Settings & Profile
  settings: "/settings",
  profile: "/profile",
  notifications: "/notifications",
  
  // Admin Routes
  admin: "/admin",
  adminDashboard: "/admin/dashboard",
  adminUsers: "/admin/users",
  adminReports: "/admin/reports",
  adminSettings: "/admin/settings",
  
  // Others
  help: "/help",
  about: "/about",
};

export const protectedRoutes = [
  routes.dashboard,
  routes.tasks,
  routes.kanban,
  routes.calendar,
  routes.team,
  routes.analytics,
  routes.activity,
  routes.settings,
  routes.profile,
  routes.notifications,
  routes.allTasks,
  routes.completedTasks,
  routes.pendingTasks,
];

export const adminRoutes = [
  routes.admin,
  routes.adminDashboard,
  routes.adminUsers,
  routes.adminReports,
  routes.adminSettings,
];

export const authRoutes = [
  routes.login,
  routes.register,
  routes.forgotPassword,
  routes.resetPassword,
  routes.verifyOtp,
];