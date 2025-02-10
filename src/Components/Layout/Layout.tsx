import React from 'react';
import TopBar from '../TopBar/TopBar';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <Sidebar />
      <div className="pl-64">
        <TopBar />
        <main className="pt-14">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;