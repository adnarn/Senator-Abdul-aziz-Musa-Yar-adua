// src/pages/ActivityFeed.jsx
import React from 'react';
import { mockActivities } from '../data/mockActivities';
import ActivityCard from '../components/ActivityCard';

const ActivityFeed = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Activity Feed</h1>
      <p className="text-gray-600 mb-6">
        Stay updated with community events, programs, and initiatives.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {mockActivities.map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;