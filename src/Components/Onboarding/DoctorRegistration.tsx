import React, { useState } from 'react';

interface DoctorRegistrationForm {
  firstName: string;
  lastName: string;
  registrationNumber: string;
  medicalCouncilNumber: string;
  currentHospital: string;
  specialization: string;
  yearsOfExperience: number;
  nationalIdNumber: string;
  registrationCertificate: File | null;
  specializationCertificate: File | null;
  phoneNumber: string;
  email: string;
  preferredContactMethod: string;
  addressLine1: string;
  city: string;
  district: string;
}

const specializations = [
  'General Practitioner',
  'Cardiologist',
  'Dermatologist',
  'Neurologist',
  'Pediatrician',
  'Orthopedist',
  'Psychiatrist',
  'Oncologist',
  'Ophthalmologist',
  'Other'
];

const hospitals = [
  'Central Hospital',
  'City Medical Center',
  'General Hospital',
  'Memorial Hospital',
  'University Medical Center',
  'Other'
];

const districts = [
  'Colombo',
  'Gampaha',
  'Kalutara',
  'Kandy',
  'Matale',
  'Nuwara Eliya',
  'Galle',
  'Matara',
  'Hambantota',
  'Jaffna',
  'Kilinochchi',
  'Mannar',
  'Vavuniya',
  'Mullaitivu',
  'Batticaloa',
  'Ampara',
  'Trincomalee',
  'Kurunegala',
  'Puttalam',
  'Anuradhapura',
  'Polonnaruwa',
  'Badulla',
  'Moneragala',
  'Ratnapura',
  'Kegalle'
];

const contactMethods = [
  'Email',
  'Phone',
  'SMS'
];

const DoctorRegistration: React.FC = () => {
  const [formData, setFormData] = useState<DoctorRegistrationForm>({
    firstName: '',
    lastName: '',
    registrationNumber: '',
    medicalCouncilNumber: '',
    currentHospital: '',
    specialization: '',
    yearsOfExperience: 0,
    nationalIdNumber: '',
    registrationCertificate: null,
    specializationCertificate: null,
    phoneNumber: '',
    email: '',
    preferredContactMethod: '',
    addressLine1: '',
    city: '',
    district: ''
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
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Doctor Registration</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Personal Information</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Registration Number (MBBS/...) *
              </label>
              <input
                type="text"
                id="registrationNumber"
                name="registrationNumber"
                required
                value={formData.registrationNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., MBBS/2023/12345"
              />
            </div>

            <div>
              <label htmlFor="medicalCouncilNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Medical Council Registration Number *
              </label>
              <input
                type="text"
                id="medicalCouncilNumber"
                name="medicalCouncilNumber"
                required
                value={formData.medicalCouncilNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="currentHospital" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Current Hospital *
              </label>
              <select
                id="currentHospital"
                name="currentHospital"
                required
                value={formData.currentHospital}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Hospital</option>
                {hospitals.map(hospital => (
                  <option key={hospital} value={hospital}>{hospital}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Specialization *
              </label>
              <select
                id="specialization"
                name="specialization"
                required
                value={formData.specialization}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Specialization</option>
                {specializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Years of Experience *
              </label>
              <input
                type="number"
                id="yearsOfExperience"
                name="yearsOfExperience"
                required
                min="0"
                max="50"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="nationalIdNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                National Identity Card Number *
              </label>
              <input
                type="text"
                id="nationalIdNumber"
                name="nationalIdNumber"
                required
                value={formData.nationalIdNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Upload Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Document Upload</h2>
            
            <div className="space-y-6">
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
                  Upload your medical registration certificate
                </p>
              </div>

              <div>
                <label htmlFor="specializationCertificate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Specialization Certificate (Optional)
                </label>
                <input
                  type="file"
                  id="specializationCertificate"
                  name="specializationCertificate"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Upload your specialization certificate if applicable
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Information</h2>
            
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Telephone Number (Primary Contact) *
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
                placeholder="doctor@example.com"
              />
            </div>

            <div>
              <label htmlFor="preferredContactMethod" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Preferred Contact Method *
              </label>
              <select
                id="preferredContactMethod"
                name="preferredContactMethod"
                required
                value={formData.preferredContactMethod}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Contact Method</option>
                {contactMethods.map(method => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
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

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setFormData({
                firstName: '',
                lastName: '',
                registrationNumber: '',
                medicalCouncilNumber: '',
                currentHospital: '',
                specialization: '',
                yearsOfExperience: 0,
                nationalIdNumber: '',
                registrationCertificate: null,
                specializationCertificate: null,
                phoneNumber: '',
                email: '',
                preferredContactMethod: '',
                addressLine1: '',
                city: '',
                district: ''
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

export default DoctorRegistration;