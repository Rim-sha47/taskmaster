// src/pages/admin/AdminDashboard.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, CheckSquare, Calendar, DollarSign, TrendingUp, Activity } from "lucide-react";
import { useTaskStore } from "../../store/useTaskStore";
import { mockUsers } from "../../mock/tasks";
import AnalyticsChart from "../../components/charts/AnalyticsChart";
import PageHeader from "../../components/common/PageHeader";

function AdminDashboard() {
  const { tasks } = useTaskStore();
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalTasks: 0,
    completedTasks: 0,
    revenue: 0,
  });

  useEffect(() => {
    const totalUsers = mockUsers.length;
    const activeUsers = mockUsers.filter((u) => u.status === "active").length;
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((t) => t.status === "completed").length;
    setStats({
      totalUsers,
      activeUsers,
      totalTasks,
      completedTasks,
      revenue: 12450,
    });
  }, [tasks]);

  const weeklyRevenue = [
    { name: "Week 1", value: 2850 },
    { name: "Week 2", value: 3120 },
    { name: "Week 3", value: 2980 },
    { name: "Week 4", value: 3500 },
  ];

  const userGrowth = [
    { name: "Jan", users: 45 },
    { name: "Feb", users: 52 },
    { name: "Mar", users: 61 },
    { name: "Apr", users: 68 },
    { name: "May", users: 74 },
    { name: "Jun", users: 82 },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Admin Dashboard"
        subtitle="Manage and monitor your platform"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <StatCard
          title="Total Users"
          value={stats.totalUsers}
          icon={Users}
          color="from-purple-500 to-purple-600"
        />
        <StatCard
          title="Active Users"
          value={stats.activeUsers}
          icon={Activity}
          color="from-green-500 to-green-600"
        />
        <StatCard
          title="Total Tasks"
          value={stats.totalTasks}
          icon={CheckSquare}
          color="from-blue-500 to-blue-600"
        />
        <StatCard
          title="Completed"
          value={stats.completedTasks}
          icon={Calendar}
          color="from-yellow-500 to-yellow-600"
        />
        <StatCard
          title="Revenue"
          value={`$${stats.revenue}`}
          icon={DollarSign}
          color="from-emerald-500 to-emerald-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnalyticsChart type="bar" data={weeklyRevenue} title="Weekly Revenue" height={350} />
        <AnalyticsChart type="line" data={userGrowth} title="User Growth" height={350} />
      </div>

      {/* Recent Users Table */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h3 className="text-xl font-semibold text-white">Recent Users</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">User</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Email</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Role</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {mockUsers.slice(0, 5).map((user) => (
                <tr key={user.id} className="hover:bg-white/5 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                      <span className="text-white">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{user.email}</td>
                  <td className="px-6 py-4 text-gray-300">{user.role}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        user.status === "active"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">Jan 15, 2024</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
    >
      <div className={`p-3 rounded-xl bg-gradient-to-r ${color} w-fit mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-gray-400 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </motion.div>
  );
}

export default AdminDashboard;