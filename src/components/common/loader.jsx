import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center z-50">
      <div className="relative">
        <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
          <span className="text-2xl font-bold text-white">TM</span>
        </div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white font-semibold whitespace-nowrap animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loader;