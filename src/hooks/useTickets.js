import { useState, useEffect, useMemo, useCallback } from 'react';
import { ticketService } from '../services/ticketService';
import { STATUS } from '../constants/status';

export const useTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('All');

  const fetchTickets = useCallback(async () => {
    setLoading(true);
    try {
      const data = await ticketService.getAll();
      // Sort by newest first
      const sorted = data.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setTickets(sorted);
      setError(null);
    } catch (err) {
      setError('Failed to load tickets. Please ensure the backend is running.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  const updateTicketStatus = async (id, newStatus) => {
    // Optimistic update
    const previousTickets = [...tickets];
    setTickets(current =>
      current.map(ticket =>
        ticket.id === id ? { ...ticket, status: newStatus } : ticket
      )
    );

    try {
      await ticketService.updateStatus(id, newStatus);
    } catch (err) {
      // Revert on failure
      setTickets(previousTickets);
      alert('Failed to update status');
    }
  };

  const stats = useMemo(() => {
    return {
      total: tickets.length,
      open: tickets.filter(t => t.status === STATUS.OPEN).length,
      inProgress: tickets.filter(t => t.status === STATUS.IN_PROGRESS).length,
      resolved: tickets.filter(t => t.status === STATUS.RESOLVED).length,
    };
  }, [tickets]);

  const filteredTickets = useMemo(() => {
    if (filter === 'All') return tickets;
    return tickets.filter(t => t.status === filter);
  }, [tickets, filter]);

  return {
    tickets: filteredTickets,
    allTickets: tickets,
    stats,
    loading,
    error,
    filter,
    setFilter,
    updateTicketStatus,
    refresh: fetchTickets
  };
};