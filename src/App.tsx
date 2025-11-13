import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { DashboardLayout } from './components/DashboardLayout';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="w-[1728px] h-[1117px] bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="w-full h-full p-6">
            <LoginPage onLogin={() => setIsAuthenticated(true)} />
          </div>
        </div>
        <Toaster />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-[1728px] h-[1117px] bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="w-full h-full p-6">
          <DashboardLayout onLogout={() => setIsAuthenticated(false)} />
        </div>
      </div>
      <Toaster />
    </div>
  );
}
