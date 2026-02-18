import React from 'react';
import { LayoutList, CircleDot, Clock, CheckCircle2 } from 'lucide-react';
import { StatCard } from '../ui/StatCard';

export const StatsGrid = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      <StatCard 
        label="Total Tickets" 
        value={stats.total} 
        icon={LayoutList} 
        colorClass="bg-slate-500 text-slate-600" 
      />
      <StatCard 
        label="Open" 
        value={stats.open} 
        icon={CircleDot} 
        colorClass="bg-blue-500 text-blue-600" 
      />
      <StatCard 
        label="In Progress" 
        value={stats.inProgress} 
        icon={Clock} 
        colorClass="bg-amber-500 text-amber-600" 
      />
      <StatCard 
        label="Resolved" 
        value={stats.resolved} 
        icon={CheckCircle2} 
        colorClass="bg-green-500 text-green-600" 
      />
    </div>
  );
};