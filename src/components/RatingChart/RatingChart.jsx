import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const RatingChart = ({ ratings }) => {
    if (!ratings) return null;
    const chartData = [...ratings].reverse();

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mt-10">
            <h3 className="text-2xl font-bold mb-6 text-[#001931]">Ratings</h3>
            
            <div className="w-full h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={chartData}
                        margin={{ top: 0, right: 30, left: 40, bottom: 0 }}
                    >
                        <XAxis type="number"  />
                        <YAxis 
                            dataKey="name" 
                            type="category" 
                            axisLine={false} 
                            tickLine={false}
                            tick={{ fill: '#627382', fontSize: 15, fontWeight: 500 }}
                            width={100}
                        />
                        <Tooltip 
                            cursor={{ fill: '#f3f4f6' }}
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                        />
                        <Bar 
                            dataKey="count" 
                            barSize={22} 
                            radius={[0, 10, 10, 0]} 
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill="#FF8811" />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RatingChart;