import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, Calendar, Mail, Briefcase, LayoutDashboard, Home, Award, UsersRound } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const navLinks = isAdmin ? [
    { path: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/members', label: 'Members', icon: Users },
    { path: '/admin/activities', label: 'Activities', icon: Calendar },
    { path: '/admin/messages', label: 'Messages', icon: Mail },
    { path: '/admin/applications', label: 'Applications', icon: Briefcase },
    { path: '/admin/beneficiaries', label: 'Beneficiaries', icon: Award },
    { path: '/admin/associations', label: 'Associations', icon: UsersRound },
    { path: '/admin/crew', label: 'Crew Performance', icon: Users },
  ] : [
    { path: '/', label: 'Home', icon: Home },
    { path: '/register', label: 'Join Us', icon: Users },
    { path: '/activities', label: 'Activities', icon: Calendar },
    { path: '/contact', label: 'Contact', icon: Mail },
    { path: '/apply', label: 'Apply', icon: Briefcase },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SY</span>
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">
                Senator Yar'adua
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            {!isAdmin && (
              <Link
                to="/admin"
                className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                Admin
              </Link>
            )}
            {isAdmin && (
              <Link
                to="/"
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
              >
                View Site
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            {!isAdmin && (
              <Link
                to="/admin"
                className="block px-3 py-2 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin Dashboard
              </Link>
            )}
            {isAdmin && (
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium bg-gray-200 text-gray-700 hover:bg-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                View Site
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;