// src/pages/admin/AdminDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Mail, Briefcase, TrendingUp, UserPlus, MessageSquare, CheckCircle } from 'lucide-react';
import { mockMembers } from '../../data/mockMembers';
import { mockActivities } from '../../data/mockActivities';
import { mockMessages } from '../../data/mockMessages';
import { mockApplications } from '../../data/mockApplications';
import { mockCrewPerformance } from '../../data/mockCrewPerformance';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Members',
      value: mockMembers.length,
      icon: Users,
      color: 'bg-blue-500',
      link: '/admin/members'
    },
    {
      title: 'Activities',
      value: mockActivities.length,
      icon: Calendar,
      color: 'bg-green-500',
      link: '/admin/activities'
    },
    {
      title: 'Messages',
      value: mockMessages.length,
      icon: Mail,
      color: 'bg-purple-500',
      link: '/admin/messages'
    },
    {
      title: 'Applications',
      value: mockApplications.length,
      icon: Briefcase,
      color: 'bg-orange-500',
      link: '/admin/applications'
    },
    {
      title: 'Crew Members',
      value: mockCrewPerformance.reduce((acc, crew) => acc + crew.members, 0),
      icon: TrendingUp,
      color: 'bg-red-500',
      link: '/admin/crew'
    }
  ];

  const pendingApplications = mockApplications.filter(app => app.status === 'pending');
  const unreadMessages = mockMessages.filter(msg => msg.status === 'unread');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome to the Senator Yar'adua constituency admin panel.</p>
        </div>
        <div className="flex space-x-2">
          <Link
            to="/admin/applications"
            className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
          >
            Manage Applications
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Link
              key={index}
              to={stat.link}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
              </div>
              <p className="text-sm text-gray-600">{stat.title}</p>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Pending Applications</h2>
          {pendingApplications.length > 0 ? (
            <div className="space-y-3">
              {pendingApplications.slice(0, 3).map(app => (
                <div key={app.id} className="flex justify-between items-center border-b pb-3">
                  <div>
                    <p className="font-medium text-gray-900">{app.applicantName}</p>
                    <p className="text-sm text-gray-600">{app.programType}</p>
                  </div>
                  <Link
                    to="/admin/applications"
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Review
                  </Link>
                </div>
              ))}
              {pendingApplications.length > 3 && (
                <Link to="/admin/applications" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  View all {pendingApplications.length} pending applications
                </Link>
              )}
            </div>
          ) : (
            <p className="text-gray-500">No pending applications</p>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Unread Messages</h2>
          {unreadMessages.length > 0 ? (
            <div className="space-y-3">
              {unreadMessages.slice(0, 3).map(msg => (
                <div key={msg.id} className="flex justify-between items-center border-b pb-3">
                  <div>
                    <p className="font-medium text-gray-900">{msg.sender}</p>
                    <p className="text-sm text-gray-600 truncate">{msg.subject}</p>
                  </div>
                  <Link
                    to="/admin/messages"
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Read
                  </Link>
                </div>
              ))}
              {unreadMessages.length > 3 && (
                <Link to="/admin/messages" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  View all {unreadMessages.length} unread messages
                </Link>
              )}
            </div>
          ) : (
            <p className="text-gray-500">No unread messages</p>
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
        <div className="space-y-3">
          {mockActivities.slice(0, 3).map(activity => (
            <div key={activity.id} className="flex items-center justify-between border-b pb-3">
              <div>
                <p className="font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-600">{new Date(activity.postedAt).toLocaleDateString()}</p>
              </div>
              <Link
                to="/admin/activities"
                className="text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;