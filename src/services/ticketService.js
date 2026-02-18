const API_URL = 'http://localhost:3001/tickets';

// Fallback data for preview when backend is not running
const MOCK_TICKETS = [
  {
    "id": 1,
    "customerName": "Alice Freeman",
    "customerEmail": "alice@example.com",
    "subject": "Login issues on mobile app",
    "description": "I cannot log in to the iOS application after the recent update. It keeps spinning.",
    "status": "Open",
    "priority": "High",
    "createdAt": "2023-10-25T09:00:00.000Z"
  },
  {
    "id": 2,
    "customerName": "Bob Smith",
    "customerEmail": "bob.smith@company.co",
    "subject": "Billing inquiry for Oct invoice",
    "description": "I was charged twice for the premium subscription. Please refund one transaction.",
    "status": "In Progress",
    "priority": "Medium",
    "createdAt": "2023-10-24T14:30:00.000Z"
  },
  {
    "id": 3,
    "customerName": "Charlie Davis",
    "customerEmail": "charlie@web.net",
    "subject": "Feature request: Dark mode",
    "description": "It would be great if the dashboard supported dark mode for night shifts.",
    "status": "Resolved",
    "priority": "Low",
    "createdAt": "2023-10-20T11:15:00.000Z"
  },
  {
    "id": 4,
    "customerName": "Diana Prince",
    "customerEmail": "diana@themyscira.gov",
    "subject": "API Rate limit exceeded",
    "description": "Our production server is hitting rate limits even though we upgraded our plan.",
    "status": "Open",
    "priority": "High",
    "createdAt": "2023-10-26T08:45:00.000Z"
  },
  {
    "id": 5,
    "customerName": "Evan Wright",
    "customerEmail": "evan@tech.io",
    "subject": "Export function not working",
    "description": "When I click export to CSV, nothing happens. Console shows a 500 error.",
    "status": "In Progress",
    "priority": "Medium",
    "createdAt": "2023-10-25T16:20:00.000Z"
  },
  {
    "id": 6,
    "customerName": "Fiona Green",
    "customerEmail": "fiona@nature.org",
    "subject": "Typo in documentation",
    "description": "There is a small typo in the API docs under the Authentication section.",
    "status": "Open",
    "priority": "Low",
    "createdAt": "2023-10-26T10:00:00.000Z"
  }
];

export const ticketService = {
  async getAll() {
    try {
      // Short timeout to fallback quickly if server is down
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1500);

      const response = await fetch(API_URL, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error('Failed to fetch tickets');
      }
      return await response.json();
    } catch (error) {
      console.warn('Backend not reachable, using mock data for preview.', error);
      // Return mock data
      return new Promise(resolve => setTimeout(() => resolve(MOCK_TICKETS), 500));
    }
  },

  async updateStatus(id, status) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update ticket status');
      }

      return await response.json();
    } catch (error) {
      console.warn('Backend not reachable, simulating update.', error);
      // Simulate success for preview
      return new Promise(resolve => setTimeout(() => resolve({ id, status }), 300));
    }
  }
};