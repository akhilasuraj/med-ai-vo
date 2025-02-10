import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { User, Settings as SettingsIcon, LogOut, Wallet, Bell } from 'lucide-react';
import { getEverBalance } from '../../lib/utils';

const user = {
  name: 'John Doe',
  profilePic: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250', // Replace with actual profile picture URL or leave empty if not available
};

const getInitials = (name: string) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  return initials.substring(0, 2).toUpperCase();
};

const TopBar: React.FC = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [everBalance, setEverBalance] = useState<string>('0.00');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const updateEverBalance = async () => {
      // TODO: Replace with actual wallet address
      const walletAddress = "YOUR_WALLET_ADDRESS";
      const balance = await getEverBalance(walletAddress);
      setEverBalance(balance);
    };

    updateEverBalance();
    const interval = setInterval(updateEverBalance, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing tokens, state, etc.)
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 right-0 left-64 z-40 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="container mx-auto flex justify-end items-center px-4 py-3">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 pr-4 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 mr-10">
            <Wallet size={16} />
            <span className="text-sm font-medium">{everBalance} EVER</span>
          </div>
          <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <Bell size={20} />
          </button>
          <ThemeToggle />
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex-shrink-0 focus:outline-none"
            >
              {user.profilePic ? (
                <img className="w-8 h-8 rounded-full ring-2 ring-gray-200 dark:ring-gray-700" src={user.profilePic} alt="Profile" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 font-medium">
                  {getInitials(user.name)}
                </div>
              )}
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 border border-gray-200 dark:border-gray-700">
                <div className="p-2 border-b border-gray-200 dark:border-gray-700">
                  <div className="w-full text-sm font-medium text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 py-1.5 px-3 rounded-md text-center">
                    {user.name}
                  </div>
                </div>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 text-sm ${
                      isActive
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`
                  }
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <User size={16} className="mr-2" />
                  Profile
                </NavLink>
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 text-sm ${
                      isActive
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`
                  }
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <SettingsIcon size={16} className="mr-2" />
                  Settings
                </NavLink>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsDropdownOpen(false);
                  }}
                  className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <LogOut size={16} className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;