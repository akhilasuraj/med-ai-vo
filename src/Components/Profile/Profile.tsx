import React, { useState } from 'react';

interface ProfileData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  nationalIdNumber: string;
  height: string;
  weight: string;
  email: string;
  phoneNumber: string;
  addressLine1: string;
  city: string;
  district: string;
}

const genderOptions = ['Male', 'Female', 'Other'];

const districts = [
  'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya',
  'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
  'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee',
  'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla',
  'Moneragala', 'Ratnapura', 'Kegalle'
];

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<ProfileData>({
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1990-01-01',
    gender: 'Male',
    nationalIdNumber: '900101123456',
    height: '175',
    weight: '70',
    email: 'johndoe@example.com',
    phoneNumber: '+94 71 234 5678',
    addressLine1: '123 Main Street',
    city: 'Colombo',
    district: 'Colombo'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission to update profile
    console.log('Updated profile:', formData);
    setIsEditing(false);
  };

  const renderField = (label: string, value: string, name: string, type: string = 'text', options?: string[]) => {
    return (
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
        {isEditing ? (
          options ? (
            <select
              name={name}
              value={value}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              {options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              name={name}
              value={value}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          )
        ) : (
          <p className="mt-1 text-gray-900 dark:text-white">{value}{type === 'number' && (name === 'height' ? ' cm' : ' kg')}</p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen p-6 bg-white dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        {/* Header Section with Image and Basic Info */}
        <div className="flex items-center space-x-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <img 
            className="w-32 h-32 rounded-full ring-2 ring-gray-200 dark:ring-gray-700" 
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" 
            alt="Profile Picture" 
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{formData.firstName} {formData.lastName}</h2>
            <p className="text-gray-600 dark:text-gray-400">Patient ID: #123456</p>
          </div>
        </div>

        {/* Basic Information Section */}
        <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Basic Information</h3>
          <div className="grid grid-cols-2 gap-6">
            {renderField('First Name', formData.firstName, 'firstName')}
            {renderField('Last Name', formData.lastName, 'lastName')}
            {renderField('Date of Birth', formData.dateOfBirth, 'dateOfBirth', 'date')}
            {renderField('Gender', formData.gender, 'gender', 'text', genderOptions)}
            {renderField('National ID Number', formData.nationalIdNumber, 'nationalIdNumber')}
          </div>
        </div>

        {/* Physical Information Section */}
        <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Physical Information</h3>
          <div className="grid grid-cols-2 gap-6">
            {renderField('Height (cm)', formData.height, 'height', 'number')}
            {renderField('Weight (kg)', formData.weight, 'weight', 'number')}
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
          <div className="space-y-4">
            {renderField('Email Address', formData.email, 'email', 'email')}
            {renderField('Phone Number', formData.phoneNumber, 'phoneNumber', 'tel')}
          </div>
        </div>

        {/* Address Information Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Address Information</h3>
          <div className="space-y-4">
            {renderField('Address Line 1', formData.addressLine1, 'addressLine1')}
            <div className="grid grid-cols-2 gap-6">
              {renderField('City', formData.city, 'city')}
              {renderField('District', formData.district, 'district', 'text', districts)}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-end space-x-4">
          {isEditing ? (
            <>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Save Changes
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Edit Profile
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Profile;