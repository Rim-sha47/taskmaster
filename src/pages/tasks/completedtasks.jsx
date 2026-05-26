// src/pages/tasks/CompletedTasks.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, Flag, Search } from "lucide-react";
import { useTaskStore } from "../../store/useTaskStore";
import PageHeader from "../../components/common/PageHeader";
import EmptyState from "../../components/common/EmptyState";

function CompletedTasks() {
  const { tasks } = useTaskStore();
  const [searchTerm, setSearchTerm] = useState("");
  
  const completedTasks = tasks.filter((task) => task.status === "completed");
  const filteredTasks = completedTasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Completed Tasks"
        subtitle="View all your completed achievements"
        actions={
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search completed tasks..."
                className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-400"
              />
            </div>
          </div>
        }
      />

      {filteredTasks.length === 0 ? (
        <EmptyState
          title="No Completed Tasks"
          description="Tasks you complete will appear here"
          actionText="Go to Tasks"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{task.title}</h3>
                </div>
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
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{task.description}</p>
              )}

              <div className="flex items-center gap-4 text-xs text-gray-500">
                {task.dueDate && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Flag className="w-3 h-3" />
                  Completed
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {filteredTasks.length > 0 && (
        <div className="text-center pt-4">
          <p className="text-gray-400 text-sm">
            Showing {filteredTasks.length} of {completedTasks.length} completed tasks
          </p>
        </div>
      )}
    </div>
  );
}

export default CompletedTasks;