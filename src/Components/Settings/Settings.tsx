import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="max-w-4xl w-full mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Settings</h2>
        
        <div className="space-y-6">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Account Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Notifications</label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Receive appointment reminders</span>
                </label>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Privacy</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Profile Visibility</label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-700">
                  <option>Public</option>
                  <option>Private</option>
                  <option>Doctors Only</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;