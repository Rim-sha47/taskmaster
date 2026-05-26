import React from 'react';

function Tasks() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Tasks</h1>
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <h3 className="text-white font-semibold">Task {item}</h3>
                <p className="text-gray-400 text-sm">Description for task {item}</p>
              </div>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">Medium</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks;