// src/components/StatusBadge.jsx
import React from 'react';

const StatusBadge = ({ status }) => {
  const statusStyles = {
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    approved: 'bg-green-100 text-green-800 border-green-300',
    rejected: 'bg-red-100 text-red-800 border-red-300',
    verified: 'bg-green-100 text-green-800 border-green-300',
    unread: 'bg-blue-100 text-blue-800 border-blue-300',
    read: 'bg-gray-100 text-gray-800 border-gray-300',
  };

  const statusLabels = {
    pending: 'Pending',
    approved: 'Approved',
    rejected: 'Rejected',
    verified: 'Verified',
    unread: 'Unread',
    read: 'Read',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
      {statusLabels[status] || status}
    </span>
  );
};

export default StatusBadge;