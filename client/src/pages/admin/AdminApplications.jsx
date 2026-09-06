// src/pages/admin/AdminApplications.jsx
import React, { useState } from 'react';
import { mockApplications } from '../../data/mockApplications';
import ApplicationRow from '../../components/ApplicationRow';

const AdminApplications = () => {
  const [applications, setApplications] = useState(mockApplications);

  const handleApprove = (id) => {
    setApplications(prev => prev.map(app =>
      app.id === id ? { ...app, status: 'approved' } : app
    ));
  };

  const handleReject = (id) => {
    setApplications(prev => prev.map(app =>
      app.id === id ? { ...app, status: 'rejected' } : app
    ));
  };

  const pendingCount = applications.filter(app => app.status === 'pending').length;
  const approvedCount = applications.filter(app => app.status === 'approved').length;
  const rejectedCount = applications.filter(app => app.status === 'rejected').length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Applications Management</h1>
          <p className="text-gray-600">Review and manage empowerment applications.</p>
        </div>
        <div className="flex space-x-4 text-sm">
          <span className="flex items-center">
            <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
            Pending: {pendingCount}
          </span>
          <span className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            Approved: {approvedCount}
          </span>
          <span className="flex items-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
            Rejected: {rejectedCount}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => (
                <ApplicationRow
                  key={app.id}
                  application={app}
                  onApprove={handleApprove}
                  onReject={handleReject}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t text-sm text-gray-600">
          Showing {applications.length} applications
        </div>
      </div>
    </div>
  );
};

export default AdminApplications;