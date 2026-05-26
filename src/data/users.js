// src/data/users.js
export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    status: "active",
    avatar: "https://ui-avatars.com/api/?name=John+Doe&background=8b5cf6&color=fff",
    department: "Engineering",
    position: "Lead Developer",
    phone: "+1 234 567 8901",
    location: "New York, USA",
    joinDate: "2023-01-15",
    tasksCompleted: 45,
    projectsCount: 12
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "manager",
    status: "active",
    avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=8b5cf6&color=fff",
    department: "Product",
    position: "Product Manager",
    phone: "+1 234 567 8902",
    location: "San Francisco, USA",
    joinDate: "2023-03-20",
    tasksCompleted: 38,
    projectsCount: 8
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    role: "user",
    status: "active",
    avatar: "https://ui-avatars.com/api/?name=Mike+Johnson&background=8b5cf6&color=fff",
    department: "Engineering",
    position: "Frontend Developer",
    phone: "+1 234 567 8903",
    location: "Austin, USA",
    joinDate: "2023-06-10",
    tasksCompleted: 52,
    projectsCount: 10
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    role: "user",
    status: "active",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Wilson&background=8b5cf6&color=fff",
    department: "Engineering",
    position: "Backend Developer",
    phone: "+1 234 567 8904",
    location: "Seattle, USA",
    joinDate: "2023-04-05",
    tasksCompleted: 41,
    projectsCount: 9
  },
  {
    id: 5,
    name: "Alex Brown",
    email: "alex.brown@example.com",
    role: "user",
    status: "inactive",
    avatar: "https://ui-avatars.com/api/?name=Alex+Brown&background=8b5cf6&color=fff",
    department: "Design",
    position: "UI/UX Designer",
    phone: "+1 234 567 8905",
    location: "Los Angeles, USA",
    joinDate: "2023-05-12",
    tasksCompleted: 28,
    projectsCount: 6
  }
];

export const getUserById = (id) => {
  return users.find(user => user.id === id);
};

export const getActiveUsers = () => {
  return users.filter(user => user.status === 'active');
};

export const getUsersByRole = (role) => {
  return users.filter(user => user.role === role);
};