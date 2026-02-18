export const STATUS = {
  OPEN: 'Open',
  IN_PROGRESS: 'In Progress',
  RESOLVED: 'Resolved'
};

export const STATUS_COLORS = {
  [STATUS.OPEN]: 'bg-blue-100 text-blue-700 border-blue-200',
  [STATUS.IN_PROGRESS]: 'bg-amber-100 text-amber-700 border-amber-200',
  [STATUS.RESOLVED]: 'bg-green-100 text-green-700 border-green-200',
};