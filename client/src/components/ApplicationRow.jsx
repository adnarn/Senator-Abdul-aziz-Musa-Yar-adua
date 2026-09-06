import React from 'react';
import StatusBadge from './StatusBadge';

const ApplicationRow = ({ application, onApprove, onReject }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">
        <div className="font-medium text-gray-900">{application.applicantName}</div>
        <div className="text-sm text-gray-500">{application.email}</div>
      </td>
      <td className="px-4 py-3 text-sm">{application.phone}</td>
      <td className="px-4 py-3 text-sm">{application.programType}</td>
      <td className="px-4 py-3 text-sm">{application.lga}</td>
      <td className="px-4 py-3 text-sm">{application.ward}</td>
      <td className="px-4 py-3">
        <StatusBadge status={application.status} />
      </td>
      <td className="px-4 py-3 text-sm">{application.applicationDate}</td>
      <td className="px-4 py-3">
        {application.status === 'pending' && (
          <div className="flex space-x-2">
            <button
              onClick={() => onApprove(application.id)}
              className="px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition-colors"
            >
              Approve
            </button>
            <button
              onClick={() => onReject(application.id)}
              className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition-colors"
            >
              Reject
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default ApplicationRow;