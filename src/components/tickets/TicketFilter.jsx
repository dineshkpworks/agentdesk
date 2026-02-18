import React from 'react';
import { STATUS } from '../../constants/status';

export const TicketFilter = ({ currentFilter, onFilterChange }) => {
  const tabs = ['All', ...Object.values(STATUS)];

  return (
    <div className="border-b border-slate-200 mb-6">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onFilterChange(tab)}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${currentFilter === tab
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }
            `}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};