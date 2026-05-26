import React from 'react';

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <h3 className="text-gray-400 text-sm">Total Tasks</h3>
          <p className="text-3xl font-bold text-white mt-2">24</p>
        </div>
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <h3 className="text-gray-400 text-sm">Completed</h3>
          <p className="text-3xl font-bold text-white mt-2">12</p>
        </div>
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <h3 className="text-gray-400 text-sm">Pending</h3>
          <p className="text-3xl font-bold text-white mt-2">8</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;