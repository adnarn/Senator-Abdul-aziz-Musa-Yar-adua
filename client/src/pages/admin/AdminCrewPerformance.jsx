import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Edit2, 
  Save, 
  X, 
  TrendingUp, 
  TrendingDown,
  Users,
  User,
  Clock,
  BarChart3
} from 'lucide-react';
import { mockCrewPerformance } from '../../data/mockCrewPerformance';

const AdminCrewPerformance = () => {
  const [crewData, setCrewData] = useState(mockCrewPerformance);
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const getRelativeTime = (timestamp) => {
    try {
      return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
    } catch (error) {
      return 'Unknown time';
    }
  };

  const handleEdit = (id, currentValue) => {
    setEditingId(id);
    setEditValue(currentValue.toString());
  };

  const handleSave = (id) => {
    const value = parseFloat(editValue);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setCrewData(prev => prev.map(crew =>
        crew.id === id ? { ...crew, overallPerformance: value } : crew
      ));
      setEditingId(null);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditValue('');
  };

  const getPerformanceColor = (value) => {
    if (value >= 85) return 'text-green-600';
    if (value >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPerformanceBgColor = (value) => {
    if (value >= 85) return 'bg-green-100';
    if (value >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getTrendIcon = (history) => {
    const values = Object.values(history);
    if (values.length < 2) return null;
    const last = values[values.length - 1];
    const first = values[0];
    const diff = last - first;
    if (diff > 0) return <TrendingUp className="w-5 h-5 text-green-600" />;
    if (diff < 0) return <TrendingDown className="w-5 h-5 text-red-600" />;
    return null;
  };

  const getTrendDiff = (history) => {
    const values = Object.values(history);
    if (values.length < 2) return null;
    const last = values[values.length - 1];
    const first = values[0];
    return (last - first);
  };

  const renderMonthlyHistory = (history) => {
    const months = Object.keys(history);
    const values = Object.values(history);
    const maxValue = Math.max(...values);
    
    return (
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
          <BarChart3 className="w-4 h-4 mr-2" />
          Monthly Performance Trend
        </h4>
        <div className="space-y-2">
          {months.map((month, index) => {
            const value = values[index];
            const percentage = (value / maxValue) * 100;
            const monthLabels = {
              january: 'Jan',
              february: 'Feb',
              march: 'Mar',
              april: 'Apr',
              may: 'May',
              june: 'Jun',
              july: 'Jul',
              august: 'Aug',
              september: 'Sep',
              october: 'Oct',
              november: 'Nov',
              december: 'Dec'
            };
            const isCurrent = index === values.length - 1;
            
            return (
              <div key={month} className="flex items-center gap-3">
                <span className="text-xs font-medium text-gray-600 w-8">
                  {monthLabels[month] || month.substring(0, 3)}
                </span>
                <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 rounded-full ${
                      isCurrent ? 'bg-primary-600' : 'bg-primary-300'
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className={`text-xs font-medium w-12 text-right ${
                  isCurrent ? 'text-primary-700 font-bold' : 'text-gray-600'
                }`}>
                  {value.toFixed(1)}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderPlatformCard = (platform, data) => {
    const platformConfigs = {
      instagram: {
        icon: Instagram,
        color: 'text-pink-600',
        bgColor: 'bg-pink-50',
        borderColor: 'border-pink-200',
        label: 'Instagram',
        metrics: [
          { key: 'posts', label: 'Posts' },
          { key: 'likes', label: 'Likes', format: (v) => v >= 1000 ? `${(v/1000).toFixed(1)}K` : v },
          { key: 'comments', label: 'Comments' },
          { key: 'followersGained', label: 'Followers Gained', prefix: '+' },
          { key: 'engagementRate', label: 'Eng. Rate', suffix: '%' }
        ]
      },
      x: {
        icon: Twitter,
        color: 'text-black',
        bgColor: 'bg-gray-50',
        borderColor: 'border-gray-200',
        label: 'X (Twitter)',
        metrics: [
          { key: 'posts', label: 'Tweets' },
          { key: 'retweets', label: 'Retweets' },
          { key: 'replies', label: 'Replies' },
          { key: 'impressions', label: 'Impressions', format: (v) => v >= 1000 ? `${(v/1000).toFixed(1)}K` : v },
          { key: 'engagementRate', label: 'Eng. Rate', suffix: '%' }
        ]
      },
      facebook: {
        icon: Facebook,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        label: 'Facebook',
        metrics: [
          { key: 'posts', label: 'Posts' },
          { key: 'reactions', label: 'Reactions', format: (v) => v >= 1000 ? `${(v/1000).toFixed(1)}K` : v },
          { key: 'shares', label: 'Shares' },
          { key: 'reach', label: 'Reach', format: (v) => v >= 1000 ? `${(v/1000).toFixed(1)}K` : v },
          { key: 'engagementRate', label: 'Eng. Rate', suffix: '%' }
        ]
      }
    };

    const config = platformConfigs[platform];
    if (!config) return null;
    const Icon = config.icon;

    return (
      <div className={`border ${config.borderColor} rounded-lg p-4 ${config.bgColor}`}>
        <div className="flex items-center gap-2 mb-3">
          <Icon className={`w-5 h-5 ${config.color}`} />
          <h4 className="font-semibold text-gray-800">{config.label}</h4>
        </div>
        <div className="space-y-1.5">
          {config.metrics.map((metric) => {
            let value = data[metric.key];
            if (value === undefined || value === null) return null;
            
            let displayValue = value;
            if (metric.format) {
              displayValue = metric.format(value);
            }
            
            return (
              <div key={metric.key} className="flex justify-between text-sm">
                <span className="text-gray-600">{metric.label}</span>
                <span className="font-medium text-gray-800">
                  {metric.prefix || ''}{displayValue}{metric.suffix || ''}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Crew Performance</h1>
          <p className="text-gray-600">Track performance metrics for constituency teams.</p>
        </div>
        <div className="text-sm text-gray-500 flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          Updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {crewData.map((crew) => {
          const isEditing = editingId === crew.id;
          const trendDiff = getTrendDiff(crew.monthlyHistory);
          
          return (
            <div key={crew.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Team Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
                <div className="flex flex-wrap justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold text-white">{crew.name}</h2>
                    <div className="flex items-center gap-4 mt-1 text-primary-100">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {crew.teamLead}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {crew.members} Members
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-primary-200">Last Synced</div>
                    <div className="text-white font-medium flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {getRelativeTime(crew.lastSynced)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Overall Performance */}
              <div className="px-6 py-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Overall Performance</div>
                      {isEditing ? (
                        <div className="flex items-center gap-2 mt-1">
                          <input
                            type="number"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg font-bold"
                            min="0"
                            max="100"
                            step="0.1"
                            autoFocus
                          />
                          <button
                            onClick={() => handleSave(crew.id)}
                            className="p-1 text-green-600 hover:text-green-800 transition-colors"
                          >
                            <Save className="w-5 h-5" />
                          </button>
                          <button
                            onClick={handleCancel}
                            className="p-1 text-red-600 hover:text-red-800 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3 mt-1">
                          <span className={`text-4xl font-bold ${getPerformanceColor(crew.overallPerformance)}`}>
                            {crew.overallPerformance.toFixed(1)}%
                          </span>
                          <button
                            onClick={() => handleEdit(crew.id, crew.overallPerformance)}
                            className="p-1 text-gray-400 hover:text-primary-600 transition-colors"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                    {trendDiff !== null && (
                      <div className={`flex items-center gap-1 text-sm font-medium ${
                        trendDiff > 0 ? 'text-green-600' : trendDiff < 0 ? 'text-red-600' : 'text-gray-500'
                      }`}>
                        {getTrendIcon(crew.monthlyHistory)}
                        <span>{trendDiff > 0 ? '+' : ''}{trendDiff.toFixed(1)}%</span>
                        <span className="text-xs text-gray-500">this quarter</span>
                      </div>
                    )}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getPerformanceBgColor(crew.overallPerformance)} ${getPerformanceColor(crew.overallPerformance)}`}>
                    {crew.overallPerformance >= 85 ? 'Excellent' : crew.overallPerformance >= 70 ? 'Good' : 'Needs Improvement'}
                  </div>
                </div>
              </div>

              {/* Platform Cards */}
              <div className="px-6 py-4 border-b">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Platform Performance</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {crew.platforms && Object.entries(crew.platforms).map(([platform, data]) => (
                    <div key={platform}>
                      {renderPlatformCard(platform, data)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Monthly History Trend */}
              <div className="px-6 py-4">
                {crew.monthlyHistory && renderMonthlyHistory(crew.monthlyHistory)}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <div className="text-2xl font-bold text-primary-600">{crewData.length}</div>
          <div className="text-sm text-gray-600">Total Teams</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <div className="text-2xl font-bold text-primary-600">
            {(crewData.reduce((acc, crew) => acc + crew.overallPerformance, 0) / crewData.length).toFixed(1)}%
          </div>
          <div className="text-sm text-gray-600">Average Performance</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <div className="text-2xl font-bold text-green-600">
            {crewData.filter(crew => crew.overallPerformance >= 85).length}
          </div>
          <div className="text-sm text-gray-600">High Performing Teams</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600">
            {crewData.filter(crew => crew.overallPerformance >= 70 && crew.overallPerformance < 85).length}
          </div>
          <div className="text-sm text-gray-600">On Track Teams</div>
        </div>
      </div>
    </div>
  );
};

export default AdminCrewPerformance;