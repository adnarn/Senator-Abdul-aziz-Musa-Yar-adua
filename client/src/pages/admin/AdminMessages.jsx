// src/pages/admin/AdminMessages.jsx
import React, { useState } from 'react';
import { mockMessages } from '../../data/mockMessages';
import StatusBadge from '../../components/StatusBadge';
import { Mail, MailOpen, Search } from 'lucide-react';

const AdminMessages = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleMarkAsRead = (id) => {
    setMessages(prev => prev.map(msg =>
      msg.id === id ? { ...msg, status: 'read' } : msg
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages Inbox</h1>
      <p className="text-gray-600 mb-6">View and manage constituent messages.</p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
              />
            </div>
          </div>
          <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`p-4 cursor-pointer hover:bg-gray-50 ${selectedMessage?.id === msg.id ? 'bg-primary-50' : ''}`}
                onClick={() => setSelectedMessage(msg)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{msg.sender}</p>
                    <p className="text-sm text-gray-600 truncate">{msg.subject}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(msg.receivedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="ml-2 flex-shrink-0">
                    {msg.status === 'unread' ? (
                      <Mail className="w-4 h-4 text-primary-600" />
                    ) : (
                      <MailOpen className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          {selectedMessage ? (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{selectedMessage.subject}</h2>
                  <p className="text-sm text-gray-600">
                    From: {selectedMessage.sender} ({selectedMessage.email})
                  </p>
                  <p className="text-sm text-gray-600">Phone: {selectedMessage.phone}</p>
                </div>
                <StatusBadge status={selectedMessage.status} />
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.message}</p>
              </div>
              <div className="mt-6 flex space-x-3">
                {selectedMessage.status === 'unread' && (
                  <button
                    onClick={() => handleMarkAsRead(selectedMessage.id)}
                    className="bg-primary-600 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors"
                  >
                    Mark as Read
                  </button>
                )}
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-300 transition-colors">
                  Reply
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Select a message to view</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;