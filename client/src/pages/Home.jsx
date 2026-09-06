// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Mail, Briefcase, ArrowRight } from 'lucide-react';
import { mockActivities } from '../data/mockActivities';
import ActivityCard from '../components/ActivityCard';

const Home = () => {
  const features = [
    {
      icon: Users,
      title: 'Member Registration',
      description: 'Join our growing community and stay connected with the Senator\'s office.',
      link: '/register',
      color: 'bg-blue-500'
    },
    {
      icon: Calendar,
      title: 'Activity Feed',
      description: 'Stay updated with community events, programs, and initiatives.',
      link: '/activities',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Direct Contact',
      description: 'Reach out directly to the Senator\'s office with your concerns.',
      link: '/contact',
      color: 'bg-purple-500'
    },
    {
      icon: Briefcase,
      title: 'Empowerment Programs',
      description: 'Apply for various empowerment initiatives and skill development programs.',
      link: '/apply',
      color: 'bg-orange-500'
    }
  ];

  const recentActivities = mockActivities.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Senator Abdul'aziz Musa Yar'adua
          </h1>
         <p className="text-xl md:text-2xl mb-6 text-primary-100">Katsina Central Zone</p>
          <p className="text-lg max-w-3xl mx-auto text-primary-50">
            Empowering our community through transparent governance, development programs, 
            and citizen engagement.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="bg-white text-primary-700 px-6 py-3 rounded-md font-medium hover:bg-primary-50 transition-colors"
            >
              Join Our Community
            </Link>
            <Link
              to="/activities"
              className="bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-500 transition-colors"
            >
              View Activities
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Engagement Platform
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link
                key={index}
                to={feature.link}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {feature.description}
                </p>
                <div className="flex items-center text-primary-600 font-medium text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Recent Activities</h2>
            <Link
              to="/activities"
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
            >
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentActivities.map(activity => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">5,000+</div>
            <div className="text-sm text-gray-600">Registered Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">50+</div>
            <div className="text-sm text-gray-600">Programs Initiated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">10,000+</div>
            <div className="text-sm text-gray-600">Lives Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">95%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;