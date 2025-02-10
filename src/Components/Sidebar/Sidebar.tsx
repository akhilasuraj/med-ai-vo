import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MedicalLogo from '../../Shared/Components/MedicalLogo';

const Sidebar: React.FC = () => {
  const [isAppointmentExpanded, setIsAppointmentExpanded] = useState(false);

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-[60]">
      <div className="px-4 py-5">
        <NavLink to="/dashboard" className="block">
          <div className="flex items-center bg-blue-50 dark:bg-gray-800 rounded-xl p-3 border border-blue-100 dark:border-gray-700">
            <div className="w-10 h-10 flex-shrink-0 bg-blue-600 rounded-lg flex items-center justify-center">
              <MedicalLogo />
            </div>
            <span className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">
              MedAIvo
            </span>
          </div>
        </NavLink>
      </div>
      <nav className="mt-5 px-4">
        <div className="space-y-1">
          <NavLink to="/dashboard" 
            className={({ isActive }) => 
              isActive 
                ? "flex items-center px-4 py-3 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-lg font-medium" 
                : "flex items-center px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium"
            }>
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </NavLink>

          <div>
            <button
              onClick={() => setIsAppointmentExpanded(!isAppointmentExpanded)}
              className="w-full flex items-center px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Appointments
              <svg 
                className={`w-4 h-4 ml-auto transition-transform ${isAppointmentExpanded ? 'transform rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`ml-8 mt-2 space-y-1 ${isAppointmentExpanded ? 'block' : 'hidden'}`}>
              <NavLink to="/appointments/new" 
                className={({ isActive }) => 
                  isActive 
                    ? "flex items-center px-4 py-2 text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-lg font-medium" 
                    : "flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium"
                }>
                Make Appointment
              </NavLink>
              <NavLink to="/appointments/view" 
                className={({ isActive }) => 
                  isActive 
                    ? "flex items-center px-4 py-2 text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-lg font-medium" 
                    : "flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium"
                }>
                View Appointments
              </NavLink>
            </div>
          </div>

          <NavLink to="/doctors" 
            className={({ isActive }) => 
              isActive 
                ? "flex items-center px-4 py-3 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-lg font-medium" 
                : "flex items-center px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium"
            }>
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Doctors
          </NavLink>

          <NavLink to="/contact" 
            className={({ isActive }) => 
              isActive 
                ? "flex items-center px-4 py-3 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-lg font-medium" 
                : "flex items-center px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium"
            }>
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact
          </NavLink>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;