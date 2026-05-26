// src/pages/admin/Reports.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Calendar, FileText, TrendingUp, Users, CheckSquare } from "lucide-react";
import PageHeader from "../../components/common/PageHeader";
import AnalyticsChart from "../../components/charts/AnalyticsChart";

const reportData = {
  tasksData: [
    { name: "Jan", tasks: 45, completed: 32 },
    { name: "Feb", tasks: 52, completed: 38 },
    { name: "Mar", tasks: 61, completed: 45 },
    { name: "Apr", tasks: 68, completed: 52 },
    { name: "May", tasks: 74, completed: 58 },
    { name: "Jun", tasks: 82, completed: 65 },
  ],
  userData: [
    { name: "Jan", value: 45 },
    { name: "Feb", value: 52 },
    { name: "Mar", value: 61 },
    { name: "Apr", value: 68 },
    { name: "May", value: 74 },
    { name: "Jun", value: 82 },
  ],
  priorityData: [
    { name: "High", value: 35, color: "#ef4444" },
    { name: "Medium", value: 45, color: "#f59e0b" },
    { name: "Low", value: 20, color: "#10b981" },
  ],
};

const reports = [
  { name: "Task Summary Report", date: "2024-06-15", size: "2.4 MB", icon: FileText },
  { name: "User Activity Log", date: "2024-06-14", size: "1.8 MB", icon: Users },
  { name: "Performance Analytics", date: "2024-06-13", size: "3.1 MB", icon: TrendingUp },
  { name: "Task Completion Report", date: "2024-06-12", size: "1.5 MB", icon: CheckSquare },
];

function Reports() {
  const [dateRange, setDateRange] = useState("month");

  return (
    <div className="space-y-8">
      <PageHeader
        title="Reports"
        subtitle="Generate and download detailed analytics reports"
        actions={
          <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:shadow-lg transition">
            <Download className="w-4 h-4" />
            Export All
          </button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnalyticsChart type="line" data={reportData.tasksData} title="Task Analytics Overview" height={350} />
        <AnalyticsChart type="bar" data={reportData.userData} title="User Growth" height={350} />
        <AnalyticsChart type="pie" data={reportData.priorityData} title="Task Priority Distribution" height={350} />
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">Key Metrics</h3>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <p className="text-gray-400 text-sm">Total Tasks</p>
              <p className="text-2xl font-bold text-white">382</p>
              <p className="text-green-400 text-xs mt-1">↑ 12%</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <p className="text-gray-400 text-sm">Completion Rate</p>
              <p className="text-2xl font-bold text-green-400">78%</p>
              <p className="text-green-400 text-xs mt-1">↑ 5%</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <p className="text-gray-400 text-sm">Active Users</p>
              <p className="text-2xl font-bold text-white">74</p>
              <p className="text-green-400 text-xs mt-1">↑ 8%</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <p className="text-gray-400 text-sm">Avg. Response</p>
              <p className="text-2xl font-bold text-white">2.4h</p>
              <p className="text-red-400 text-xs mt-1">↓ 0.3h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Generated Reports List */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
        <div className="p-6 border-b border-white/10">
          <h3 className="text-xl font-semibold text-white">Generated Reports</h3>
        </div>
        <div className="divide-y divide-white/10">
          {reports.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-5 hover:bg-white/5 transition"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-purple-600/20 rounded-lg">
                  <report.icon className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{report.name}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {report.date}
                    </span>
                    <span className="text-gray-400 text-xs">{report.size}</span>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition text-gray-300 text-sm">
                Download
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reports;