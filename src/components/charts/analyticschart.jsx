// src/components/charts/AnalyticalChart.jsx
import React from 'react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'
import { motion } from 'framer-motion'

const AnalyticalChart = ({ type = 'line', data, title, height = 300 }) => {
  const colors = ['#8b5cf6', '#a78bfa', '#c4b5fd', '#7c3aed', '#6d28d9']
  
  const chartConfigs = {
    line: (
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
        <XAxis dataKey="name" stroke="#ffffff60" />
        <YAxis stroke="#ffffff60" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1e1e2f', 
            border: '1px solid #ffffff20',
            borderRadius: '8px',
            color: 'white'
          }}
        />
        <Legend />
        <Line type="monotone" dataKey="tasks" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6' }} />
        <Line type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981' }} />
      </LineChart>
    ),
    area: (
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
        <XAxis dataKey="name" stroke="#ffffff60" />
        <YAxis stroke="#ffffff60" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1e1e2f', 
            border: '1px solid #ffffff20',
            borderRadius: '8px',
            color: 'white'
          }}
        />
        <Area type="monotone" dataKey="value" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorTasks)" />
      </AreaChart>
    ),
    bar: (
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
        <XAxis dataKey="name" stroke="#ffffff60" />
        <YAxis stroke="#ffffff60" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1e1e2f', 
            border: '1px solid #ffffff20',
            borderRadius: '8px',
            color: 'white'
          }}
        />
        <Bar dataKey="value" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
      </BarChart>
    ),
    pie: (
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1e1e2f', 
            border: '1px solid #ffffff20',
            borderRadius: '8px',
            color: 'white'
          }}
        />
        <Legend />
      </PieChart>
    )
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
    >
      {title && <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>}
      <div style={{ height: `${height}px` }}>
        <ResponsiveContainer width="100%" height="100%">
          {chartConfigs[type]}
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default AnalyticalChart