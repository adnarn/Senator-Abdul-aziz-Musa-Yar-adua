import React from 'react';
import { mockApplications } from '../../data/mockApplications';

const AdminBeneficiaries = () => {
  const beneficiaries = mockApplications.filter(app => app.status === 'approved');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Beneficiaries</h1>
          <p className="text-gray-600">List of approved empowerment beneficiaries.</p>
        </div>
        <div className="text-sm text-gray-500">
          Total: {beneficiaries.length}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LGA</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ward</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approved Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {beneficiaries.length > 0 ? (
                beneficiaries.map(ben => (
                  <tr key={ben.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{ben.applicantName}</td>
                    <td className="px-4 py-3 text-sm">{ben.phone}</td>
                    <td className="px-4 py-3 text-sm">{ben.programType}</td>
                    <td className="px-4 py-3 text-sm">{ben.lga}</td>
                    <td className="px-4 py-3 text-sm">{ben.ward}</td>
                    <td className="px-4 py-3 text-sm">{ben.applicationDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                    No approved beneficiaries yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminBeneficiaries;