// src/pages/dashboard/Analytics.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, TrendingUp, Award, Target } from "lucide-react";
import { useTaskStore } from "../../store/useTaskStore";
import AnalyticsChart from "../../components/charts/AnalyticsChart";
import PageHeader from "../../components/common/PageHeader";

function Analytics() {
  const { tasks } = useTaskStore();
  const [weeklyData, setWeeklyData] = useState([]);
  const [priorityData, setPriorityData] = useState([]);
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    // Weekly task data
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const weekly = days.map((day) => ({
      name: day,
      tasks: Math.floor(Math.random() * 30) + 10,
      completed: Math.floor(Math.random() * 20) + 5,
    }));
    setWeeklyData(weekly);

    // Priority distribution
    const priorities = [
      { name: "High", value: tasks.filter((t) => t.priority === "high").length, color: "#ef4444" },
      { name: "Medium", value: tasks.filter((t) => t.priority === "medium").length, color: "#f59e0b" },
      { name: "Low", value: tasks.filter((t) => t.priority === "low").length, color: "#10b981" },
    ];
    setPriorityData(priorities);

    // Status distribution
    const statuses = [
      { name: "Completed", value: tasks.filter((t) => t.status === "completed").length, color: "#10b981" },
      { name: "In Progress", value: tasks.filter((t) => t.status === "in-progress").length, color: "#f59e0b" },
      { name: "Todo", value: tasks.filter((t) => t.status === "todo").length, color: "#8b5cf6" },
      { name: "Review", value: tasks.filter((t) => t.status === "review").length, color: "#ec4899" },
    ];
    setStatusData(statuses);
  }, [tasks]);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.status === "completed").length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="space-y-8">
      <PageHeader
        title="Analytics"
        subtitle="Track your productivity and task insights"
      />

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-purple-600/20 rounded-lg">
              <Target className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-gray-400 text-sm">Total Tasks</span>
          </div>
          <p className="text-3xl font-bold text-white">{totalTasks}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-green-600/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-gray-400 text-sm">Completion Rate</span>
          </div>
          <p className="text-3xl font-bold text-green-400">{completionRate}%</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-yellow-600/20 rounded-lg">
              <Award className="w-5 h-5 text-yellow-400" />
            </div>
            <span className="text-gray-400 text-sm">Completed</span>
          </div>
          <p className="text-3xl font-bold text-white">{completedTasks}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-600/20 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-gray-400 text-sm">This Week</span>
          </div>
          <p className="text-3xl font-bold text-white">
            {weeklyData.reduce((acc, day) => acc + day.completed, 0)}
          </p>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnalyticsChart
          type="line"
          data={weeklyData}
          title="Weekly Task Activity"
          height={350}
        />
        <AnalyticsChart
          type="pie"
          data={priorityData}
          title="Task Priority Distribution"
          height={350}
        />
        <AnalyticsChart
          type="bar"
          data={statusData}
          title="Task Status Overview"
          height={350}
        />
        <AnalyticsChart
          type="area"
          data={weeklyData.map((day) => ({ name: day.name, value: day.completed }))}
          title="Completion Trend"
          height={350}
        />
      </div>
    </div>
  );
}

export default Analytics;