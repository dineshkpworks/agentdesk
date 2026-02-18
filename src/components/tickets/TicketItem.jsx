import React from 'react';
import { Badge } from '../ui/Badge';
import { STATUS, STATUS_COLORS } from '../../constants/status';
import { PRIORITY, PRIORITY_COLORS } from '../../constants/priority';
import { formatDate } from '../../utils/formatters';
import { User, Mail } from 'lucide-react';

export const TicketItem = ({ ticket, onUpdateStatus }) => {
  return (
    <li className="hover:bg-slate-50 transition-colors duration-150 p-4 sm:px-6 bg-white border-b border-slate-100 last:border-0">
      <div className="flex items-center justify-between gap-x-6">
        <div className="min-w-0 flex-1">
          <div className="flex items-start gap-x-3">
            <p className="text-sm font-semibold leading-6 text-slate-900">{ticket.subject}</p>
            <Badge className={PRIORITY_COLORS[ticket.priority]}>
              {ticket.priority}
            </Badge>
          </div>
          
          <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-slate-500">
            <p className="truncate">{ticket.description}</p>
          </div>

          <div className="mt-2 flex items-center gap-x-4 text-xs leading-5 text-slate-500">
            <div className="flex items-center gap-x-1">
              <User className="h-3 w-3" />
              <span className="font-medium text-slate-700">{ticket.customerName}</span>
            </div>
            <div className="flex items-center gap-x-1">
              <Mail className="h-3 w-3" />
              <span>{ticket.customerEmail}</span>
            </div>
            <div className="ml-auto">
              Created {formatDate(ticket.createdAt)}
            </div>
          </div>
        </div>
        
        <div className="flex flex-none items-center gap-x-4">
          <div className="relative">
            <select
              value={ticket.status}
              onChange={(e) => onUpdateStatus(ticket.id, e.target.value)}
              className={`
                appearance-none block w-32 rounded-md border-0 py-1.5 pl-3 pr-8 text-xs font-semibold ring-1 ring-inset focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6 cursor-pointer outline-none
                ${STATUS_COLORS[ticket.status]}
                ring-black/5
              `}
            >
              {Object.values(STATUS).map((status) => (
                <option key={status} value={status} className="bg-white text-slate-900">
                  {status}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-current">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};