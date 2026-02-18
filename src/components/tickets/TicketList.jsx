import React from 'react';
import { TicketItem } from './TicketItem';
import { Inbox } from 'lucide-react';

export const TicketList = ({ tickets, loading, onUpdateStatus }) => {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-12 text-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-4 w-1/4 bg-slate-200 rounded mb-4"></div>
          <div className="h-4 w-1/2 bg-slate-200 rounded"></div>
        </div>
        <p className="mt-4 text-slate-400">Loading tickets...</p>
      </div>
    );
  }

  if (tickets.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-12 text-center">
        <div className="mx-auto h-12 w-12 text-slate-400">
          <Inbox className="h-full w-full" />
        </div>
        <h3 className="mt-2 text-sm font-semibold text-slate-900">No tickets found</h3>
        <p className="mt-1 text-sm text-slate-500">There are no tickets matching your current filter.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <ul role="list" className="divide-y divide-slate-100">
        {tickets.map((ticket) => (
          <TicketItem 
            key={ticket.id} 
            ticket={ticket} 
            onUpdateStatus={onUpdateStatus} 
          />
        ))}
      </ul>
    </div>
  );
};