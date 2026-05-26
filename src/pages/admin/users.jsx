// src/pages/admin/Users.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, MoreVertical, UserPlus, Mail, Phone } from "lucide-react";
import { mockUsers } from "../../mock/tasks";
import PageHeader from "../../components/common/PageHeader";

function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role.toLowerCase() === roleFilter.toLowerCase();
    return matchesSearch && matchesRole;
  });

  const roles = ["all", "Admin", "Manager", "Developer"];

  return (
    <div className="space-y-8">
      <PageHeader
        title="User Management"
        subtitle="Manage and oversee all platform users"
        actions={
          <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:shadow-lg transition">
            <UserPlus className="w-4 h-4" />
            Add User
          </button>
        }
      />

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search users by name or email..."
            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition text-white"
          />
        </div>

        <div className="flex gap-3">
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 text-white"
          >
            {roles.map((role) => (
              <option key={role} value={role.toLowerCase()}>
                {role === "all" ? "All Roles" : role}
              </option>
            ))}
          </select>
          <button className="px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition">
            <Filter className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{user.name}</h3>
                  <p className="text-gray-400 text-sm">{user.role}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-white">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Mail className="w-4 h-4" />
                {user.email}
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Phone className="w-4 h-4" />
                +1 234 567 8900
              </div>
            </div>

            <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  user.status === "active"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {user.status}
              </span>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg text-blue-400 text-sm transition">
                  Edit
                </button>
                <button className="px-3 py-1.5 bg-red-600/20 hover:bg-red-600/30 rounded-lg text-red-400 text-sm transition">
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400">No users found matching your criteria</p>
        </div>
      )}
    </div>
  );
}

export default Users;