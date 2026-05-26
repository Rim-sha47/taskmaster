// src/pages/profile/Profile.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Mail, Phone, MapPin, Calendar, Edit2, Save, X } from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";
import PageHeader from "../../components/common/PageHeader";
import toast from "react-hot-toast";

function Profile() {
  const { user, updateUser } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "John Doe",
    email: user?.email || "john.doe@example.com",
    phone: "+1 234 567 8900",
    location: "New York, USA",
    bio: "Frontend Developer passionate about creating beautiful web experiences.",
    role: "Senior Developer",
  });

  const handleSubmit = () => {
    updateUser(formData);
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const stats = [
    { label: "Tasks Completed", value: "156", change: "+12" },
    { label: "Projects", value: "8", change: "+2" },
    { label: "Hours Worked", value: "1,248", change: "+128" },
    { label: "Achievements", value: "24", change: "+3" },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="My Profile"
        subtitle="Manage your personal information"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden sticky top-24">
            <div className="relative h-32 bg-gradient-to-r from-purple-600 to-blue-600">
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center border-4 border-white/20">
                    <span className="text-3xl font-bold text-white">
                      {formData.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <button className="absolute bottom-0 right-0 p-1.5 bg-purple-600 rounded-full hover:bg-purple-700 transition">
                    <Camera className="w-3 h-3 text-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-16 pb-6 px-6 text-center">
              <h2 className="text-xl font-bold text-white">{formData.name}</h2>
              <p className="text-purple-400 text-sm mt-1">{formData.role}</p>
              <p className="text-gray-400 text-sm mt-2">{formData.bio}</p>

              <div className="mt-6 space-y-3 text-left">
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <Mail className="w-4 h-4 text-gray-400" />
                  {formData.email}
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <Phone className="w-4 h-4 text-gray-400" />
                  {formData.phone}
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  {formData.location}
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  Joined January 2024
                </div>
              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="mt-6 w-full flex items-center justify-center gap-2 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition"
              >
                {isEditing ? <X className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />}
                {isEditing ? "Cancel" : "Edit Profile"}
              </button>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 rounded-2xl p-4 text-center border border-white/10"
              >
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                <p className="text-green-400 text-xs mt-1">↑ {stat.change}</p>
              </motion.div>
            ))}
          </div>

          {/* Edit Form */}
          {isEditing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Edit Profile</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    rows="3"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition text-white resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Role</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition text-white"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:shadow-lg transition"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </motion.div>
          )}

          {/* Recent Activity */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[
                { action: "Completed task", target: "Design Dashboard UI", time: "2 hours ago" },
                { action: "Created new task", target: "API Integration", time: "1 day ago" },
                { action: "Commented on", target: "Database Setup", time: "2 days ago" },
              ].map((activity, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <div>
                    <p className="text-gray-300 text-sm">
                      {activity.action}{" "}
                      <span className="text-purple-400">{activity.target}</span>
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;