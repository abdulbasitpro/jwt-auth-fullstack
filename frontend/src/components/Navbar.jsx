import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, User, LogOut, Lock, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-white/20 p-2 rounded-lg">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                SecureAuth
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                >
                  <Lock className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                <div className="flex items-center space-x-3 bg-white/10 px-4 py-2 rounded-full">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">{user?.name || user?.email}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 group"
                >
                  <LogOut className="h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                >
                  <Lock className="h-4 w-4" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-white/80 p-2 rounded-md"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-lg rounded-lg mt-2 py-4 px-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="block text-white/90 hover:text-white py-2 px-3 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2 mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Lock className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                <div className="flex items-center space-x-3 bg-white/10 px-4 py-2 rounded-full mb-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">{user?.name || user?.email}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block text-white/90 hover:text-white py-2 px-3 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2 mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Lock className="h-4 w-4" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 text-center py-2 px-4 rounded-md text-sm font-medium transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;