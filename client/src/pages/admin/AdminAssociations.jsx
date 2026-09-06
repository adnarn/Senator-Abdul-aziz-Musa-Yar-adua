import React, { useState } from 'react';
import { mockAssociations } from '../../data/mockAssociations';
import { ChevronDown, ChevronRight, Users, MapPin, Home, Calendar } from 'lucide-react';

const AdminAssociations = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Associations</h1>
          <p className="text-gray-600">Manage registered community associations and their members.</p>
        </div>
        <div className="text-sm text-gray-500">
          Total: {mockAssociations.length} associations
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="divide-y divide-gray-200">
          {mockAssociations.map((association) => {
            const isExpanded = expandedId === association.id;
            return (
              <div key={association.id}>
                {/* Association header row */}
                <div 
                  className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleExpand(association.id)}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-primary-600">
                      {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{association.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {association.lga}
                        </span>
                        <span className="flex items-center">
                          <Home className="w-4 h-4 mr-1" />
                          {association.ward}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Registered: {association.registrationDate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{association.members.length} members</span>
                  </div>
                </div>

                {/* Expanded members list */}
                {isExpanded && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <h4 className="font-medium text-gray-700 mb-3">Members</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {association.members.map((member) => (
                        <div key={member.id} className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium text-gray-900">{member.name}</div>
                              <div className="text-sm text-gray-500">{member.phone}</div>
                            </div>
                            <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                              {member.role}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminAssociations;