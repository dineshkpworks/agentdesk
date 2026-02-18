# AgentDesk - Customer Support Dashboard

A professional support ticket management dashboard built with React and Tailwind CSS.

## Features

- **Dashboard Overview**: Real-time counters for Open, In Progress, and Resolved tickets.
- **Ticket Management**: View list of tickets with priority badges and status indicators.
- **Filtering**: Filter tickets by status (Open, In Progress, Resolved).
- **Quick Actions**: Update ticket status directly from the list view with immediate visual feedback.
- **Responsive Design**: Fully responsive layout using Tailwind CSS.

## Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Lucide React (Icons)
- **Backend**: JSON Server (Mock API)

## Getting Started

### Prerequisites

- Node.js installed (v16+)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the Backend (Mock API):
   Open a terminal and run:
   ```bash
   npm run server
   ```
   This runs the JSON server on `http://localhost:3001`.

3. Start the Frontend:
   Open a *new* terminal and run:
   ```bash
   npm run dev
   ```
   Open the link provided (usually `http://localhost:3000`).

## Project Structure

```
src/
├── components/
│   ├── dashboard/   # Dashboard specific widgets (StatsGrid)
│   ├── layout/      # Layout components (Header, Layout wrapper)
│   ├── tickets/     # Ticket specific components (List, Item, Filter)
│   └── ui/          # Reusable UI elements (Badge, StatCard)
├── constants/       # App-wide constants (Status, Priority)
├── hooks/           # Custom React hooks (useTickets)
├── services/        # API service layer
├── utils/           # Helper functions
├── App.jsx          # Main App component
└── main.jsx         # Entry point
```

## API Endpoints

- `GET /tickets`: Fetch all tickets
- `PATCH /tickets/:id`: Update a ticket status
