// src/pages/dashboard/Activity.jsx
import { motion } from "framer-motion";
import { Clock, CheckCircle, MessageCircle, UserPlus, Filter } from "lucide-react";
import PageHeader from "../../components/common/PageHeader";

const activities = [
  { id: 1, action: "completed task", target: "Design Dashboard UI", user: "John Doe", time: "5 min ago", icon: CheckCircle, color: "text-green-400" },
  { id: 2, action: "created new task", target: "Implement Authentication", user: "Jane Smith", time: "1 hour ago", icon: MessageCircle, color: "text-blue-400" },
  { id: 3, action: "commented on", target: "Setup Database", user: "Mike Johnson", time: "2 hours ago", icon: MessageCircle, color: "text-purple-400" },
  { id: 4, action: "joined the team", target: "", user: "Sarah Wilson", time: "1 day ago", icon: UserPlus, color: "text-yellow-400" },
  { id: 5, action: "updated task", target: "API Integration", user: "John Doe", time: "2 days ago", icon: CheckCircle, color: "text-green-400" },
  { id: 6, action: "completed task", target: "Write Documentation", user: "Jane Smith", time: "3 days ago", icon: CheckCircle, color: "text-green-400" },
  { id: 7, action: "created new task", target: "Fix Bugs", user: "Mike Johnson", time: "3 days ago", icon: MessageCircle, color: "text-blue-400" },
];

function Activity() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Activity Feed"
        subtitle="Stay updated with latest team activities"
        actions={
          <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition text-gray-300">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        }
      />

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 bg-white/10 rounded-xl ${activity.color}`}>
                <activity.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-gray-300">
                  <span className="font-semibold text-white">{activity.user}</span>{" "}
                  {activity.action}{" "}
                  {activity.target && (
                    <span className="font-semibold text-purple-400">{activity.target}</span>
                  )}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {activity.time}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition text-gray-300">
          Load More Activities
        </button>
      </div>
    </div>
  );
}

export default Activity;