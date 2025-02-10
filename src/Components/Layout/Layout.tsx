import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import TopBar from '../TopBar/TopBar';
import Snackbar from '../../Shared/Components/Snackbar';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-white dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 ml-64">
        <TopBar />
        <main className="p-4 mt-16">
          <Outlet />
        </main>
      </div>
      <Snackbar />
    </div>
  );
};

export default Layout;