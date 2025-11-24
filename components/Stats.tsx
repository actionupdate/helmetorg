import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Month 0', bacteria: 100, clean: 100 },
  { month: 'Month 1', bacteria: 450, clean: 120 },
  { month: 'Month 2', bacteria: 1200, clean: 130 },
  { month: 'Month 3', bacteria: 3500, clean: 140 },
  { month: 'Month 4', bacteria: 8000, clean: 110 },
  { month: 'Month 5', bacteria: 15000, clean: 110 },
  { month: 'Month 6', bacteria: 25000, clean: 100 },
];

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Professional Cleaning Matters</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Helmets are a breeding ground for bacteria. Sweat, hair products, and road dust accumulate over time.
            Here is the bacterial growth in an untreated helmet versus one maintained by HelmetHaven.
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-6 md:p-10 shadow-inner border border-gray-100">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorBacteria" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorClean" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #f3f4f6', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  itemStyle={{ fontWeight: 600 }}
                />
                <Area
                  type="monotone"
                  dataKey="bacteria"
                  name="Unwashed Helmet (Bacteria count)"
                  stroke="#ef4444"
                  fillOpacity={1}
                  fill="url(#colorBacteria)"
                  strokeWidth={3}
                />
                <Area
                  type="monotone"
                  dataKey="clean"
                  name="HelmetHaven Maintained"
                  stroke="#6366f1"
                  fillOpacity={1}
                  fill="url(#colorClean)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500 italic">
            *Data represents approximate colony-forming units (CFU) based on typical usage without cleaning.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;