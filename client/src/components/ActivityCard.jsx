// src/components/ActivityCard.jsx
import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const ActivityCard = ({ activity }) => {
  const typeColors = {
    event: 'bg-blue-100 text-blue-800',
    program: 'bg-green-100 text-green-800',
    workshop: 'bg-purple-100 text-purple-800',
    health: 'bg-red-100 text-red-800',
    training: 'bg-orange-100 text-orange-800',
  };

  const typeLabels = {
    event: 'Event',
    program: 'Program',
    workshop: 'Workshop',
    health: 'Health',
    training: 'Training',
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {activity.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={activity.image} 
            alt={activity.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{activity.title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[activity.type] || 'bg-gray-100 text-gray-800'}`}>
            {typeLabels[activity.type] || activity.type}
          </span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{activity.description}</p>
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{activity.date} at {activity.time}</span>
          </div>
          {activity.location && (
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{activity.location}</span>
            </div>
          )}
          <div className="flex items-center text-xs text-gray-400">
            <Clock className="w-3 h-3 mr-1" />
            <span>Posted: {new Date(activity.postedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;