import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LaboratoryRegistrationForm {
  name: string;
  registrationNumber: string;
  type: string;
  phoneNumber: string;
  email: string;
  addressLine1: string;
  city: string;
  district: string;
  licenseNumber: string;
  ownerName: string;
  registrationCertificate: File | null;
}

const districts = [
  'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya',
  'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
  'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee',
  'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla',
  'Moneragala', 'Ratnapura', 'Kegalle'
];

const laboratoryTypes = [
  'General Laboratory',
  'Pathology Laboratory',
  'Clinical Laboratory',
  'Diagnostic Laboratory',
  'Research Laboratory',
  'Other'
];

const LaboratoryRegistration: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LaboratoryRegistrationForm>({
    name: '',
    registrationNumber: '',
    type: '',
    phoneNumber: '',
    email: '',
    addressLine1: '',
    city: '',
    district: '',
    licenseNumber: '',
    ownerName: '',
    registrationCertificate: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log(formData);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Laboratory Registration</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Laboratory Information</h2>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Laboratory Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Laboratory Type *
              </label>
              <select
                id="type"
                name="type"
                required
                value={formData.type}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Laboratory Type</option>
                {laboratoryTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Registration Number *
              </label>
              <input
                type="text"
                id="registrationNumber"
                name="registrationNumber"
                required
                value={formData.registrationNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., LAB/2023/12345"
              />
            </div>

            <div>
              <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                License Number *
              </label>
              <input
                type="text"
                id="licenseNumber"
                name="licenseNumber"
                required
                value={formData.licenseNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Owner/Director Name *
              </label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                required
                value={formData.ownerName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Information</h2>
            
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., +94 XX XXX XXXX"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                placeholder="lab@example.com"
              />
            </div>

            <div>
              <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Address Line 1 *
              </label>
              <input
                type="text"
                id="addressLine1"
                name="addressLine1"
                required
                value={formData.addressLine1}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="district" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  District *
                </label>
                <select
                  id="district"
                  name="district"
                  required
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select District</option>
                  {districts.map(district => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Document Upload Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Document Upload</h2>
            
            <div>
              <label htmlFor="registrationCertificate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Registration Certificate (PDF/JPG/PNG) *
              </label>
              <input
                type="file"
                id="registrationCertificate"
                name="registrationCertificate"
                required
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Upload your laboratory registration certificate
              </p>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setFormData({
                name: '',
                registrationNumber: '',
                type: '',
                phoneNumber: '',
                email: '',
                addressLine1: '',
                city: '',
                district: '',
                licenseNumber: '',
                ownerName: '',
                registrationCertificate: null
              })}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LaboratoryRegistration;