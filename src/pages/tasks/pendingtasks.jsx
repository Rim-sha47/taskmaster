// src/pages/tasks/PendingTasks.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, Flag, AlertCircle, Search } from "lucide-react";
import { useTaskStore } from "../../store/useTaskStore";
import PageHeader from "../../components/common/PageHeader";
import EmptyState from "../../components/common/EmptyState";

function PendingTasks() {
  const { tasks } = useTaskStore();
  const [searchTerm, setSearchTerm] = useState("");
  
  const pendingTasks = tasks.filter((task) => task.status !== "completed");
  const filteredTasks = pendingTasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDaysRemaining = (dueDate) => {
    if (!dueDate) return null;
    const today = new Date();
    const due = new Date(dueDate);
    const diffDays = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return "Overdue";
    if (diffDays === 0) return "Due today";
    return `${diffDays} days left`;
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Pending Tasks"
        subtitle="Tasks that need your attention"
        actions={
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search pending tasks..."
              className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-400"
            />
          </div>
        }
      />

      {filteredTasks.length === 0 ? (
        <EmptyState
          title="No Pending Tasks"
          description="All caught up! Great work!"
          actionText="View Tasks"
        />
      ) : (
        <div className="space-y-4">
          {filteredTasks.map((task, index) => {
            const daysRemaining = getDaysRemaining(task.dueDate);
            const isOverdue = daysRemaining === "Overdue";
            
            return (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white/5 backdrop-blur-lg rounded-2xl p-5 border transition hover:bg-white/10 ${
                  isOverdue ? "border-red-500/30" : "border-white/10"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${
                        task.status === "in-progress" 
                          ? "bg-yellow-600/20" 
                          : "bg-purple-600/20"
                      }`}>
                        {task.status === "in-progress" ? (
                          <Clock className="w-5 h-5 text-yellow-400" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-purple-400" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-white">{task.title}</h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          task.priority === "high"
                            ? "bg-red-500/20 text-red-400"
                            : task.priority === "medium"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {task.priority}
                      </span>
                    </div>

                    {task.description && (
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{task.description}</p>
                    )}

                    <div className="flex items-center gap-4 text-xs">
                      {task.dueDate && (
                        <span className={`flex items-center gap-1 ${isOverdue ? "text-red-400" : "text-gray-500"}`}>
                          <Calendar className="w-3 h-3" />
                          {new Date(task.dueDate).toLocaleDateString()} • {daysRemaining}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-gray-500">
                        <Flag className="w-3 h-3" />
                        {task.status === "in-progress" ? "In Progress" : "To Do"}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg text-purple-400 text-sm transition">
                      Continue
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {filteredTasks.length > 0 && (
        <div className="text-center pt-4">
          <p className="text-gray-400 text-sm">
            Showing {filteredTasks.length} of {pendingTasks.length} pending tasks
          </p>
        </div>
      )}
    </div>
  );
}

export default PendingTasks;