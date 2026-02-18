import React from 'react';

export const StatCard = ({ label, value, icon: Icon, colorClass }) => {
  return (
    <div className="bg-white overflow-hidden rounded-xl border border-slate-200 shadow-sm p-5">
      <div className="flex items-center">
        <div className={`flex-shrink-0 p-3 rounded-lg ${colorClass} bg-opacity-10`}>
          <Icon className={`h-6 w-6 ${colorClass.replace('bg-', 'text-')}`} />
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-slate-500 truncate">{label}</dt>
            <dd>
              <div className="text-2xl font-bold text-slate-900">{value}</div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};