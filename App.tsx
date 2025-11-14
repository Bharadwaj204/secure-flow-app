
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AuthPage from './pages/AuthPage';
import ConfigurePage from './pages/ConfigurePage';
import DashboardPage from './pages/DashboardPage';
import Layout from './components/Layout';

function App() {
  return (
    <AuthProvider>
      <Layout>
        <HashRouter>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/configure" element={<ConfigurePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </HashRouter>
      </Layout>
    </AuthProvider>
  );
}

export default App;
