
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/Button';

const DashboardPage: React.FC = () => {
  const { user, isConfigured, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    } else if (!isConfigured) {
      navigate('/configure');
    }
  }, [user, isConfigured, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  if (!user || !isConfigured) {
    return null; // or a loading spinner
  }

  return (
    <div className="w-full min-h-screen bg-primary-bg text-text-primary">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
            <Button 
              onClick={handleLogout} 
              variant="primary"
              className="!w-auto !py-2 !px-5"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white rounded-lg shadow p-8 h-96 flex items-center justify-center">
                <h1 className="text-3xl font-medium text-secondary-gray">Dashboard Page</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;