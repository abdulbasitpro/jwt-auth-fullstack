import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Mail, Calendar, ShieldCheck, Lock, LogOut, BarChart3, Activity, Key } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const stats = [
    { name: 'Active Sessions', value: '1', icon: Activity, color: 'text-blue-600' },
    { name: 'Security Level', value: 'High', icon: ShieldCheck, color: 'text-green-600' },
    { name: 'Last Login', value: 'Today', icon: Calendar, color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, {user?.name}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 bg-gray-100 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="text-sm font-medium text-gray-600">Full Name</span>
                  </div>
                  <span className="text-gray-900 font-medium">{user?.name}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="text-sm font-medium text-gray-600">Email</span>
                  </div>
                  <span className="text-gray-900 font-medium">{user?.email}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="text-sm font-medium text-gray-600">Member Since</span>
                  </div>
                  <span className="text-gray-900 font-medium">
                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Security Card */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Security</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="p-1 bg-green-100 rounded">
                    <Key className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-700">JWT Authentication Active</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="p-1 bg-green-100 rounded">
                    <Lock className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-700">Secure Session</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="p-1 bg-green-100 rounded">
                    <BarChart3 className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-700">Protected Access</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <span className="text-sm font-medium text-gray-700">View Account Settings</span>
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <span className="text-sm font-medium text-gray-700">Security Preferences</span>
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <span className="text-sm font-medium text-gray-700">Activity History</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-8 text-white">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Welcome to SecureAuth</h3>
              <p className="text-blue-100 leading-relaxed">
                You are viewing this page because you have successfully authenticated with a valid JWT token.
                The token is automatically included in requests to protected backend endpoints, ensuring your data remains secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;