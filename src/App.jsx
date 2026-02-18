import React from 'react';
import { Layout } from './components/layout/Layout';
import { StatsGrid } from './components/dashboard/StatsGrid';
import { TicketList } from './components/tickets/TicketList';
import { TicketFilter } from './components/tickets/TicketFilter';
import { useTickets } from './hooks/useTickets';
import { AlertCircle } from 'lucide-react';

function App() {
  const { 
    tickets, 
    stats, 
    loading, 
    error, 
    filter, 
    setFilter, 
    updateTicketStatus 
  } = useTickets();

  if (error) {
    return (
      <Layout>
        <div className="rounded-md bg-red-50 p-4 border border-red-200">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Connection Error</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{error}</p>
                <p className="mt-2 text-xs">Tip: Make sure to run 'npm run server' in a separate terminal.</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-8">
        <h2 className="text-2xl font-bold leading-7 text-slate-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Overview
        </h2>
      </div>

      <StatsGrid stats={stats} />

      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium leading-6 text-slate-900">Recent Tickets</h3>
          <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">
            {tickets.length} showing
          </span>
        </div>
        
        <TicketFilter 
          currentFilter={filter} 
          onFilterChange={setFilter} 
        />
        
        <TicketList 
          tickets={tickets} 
          loading={loading} 
          onUpdateStatus={updateTicketStatus} 
        />
      </div>
    </Layout>
  );
}

export default App;