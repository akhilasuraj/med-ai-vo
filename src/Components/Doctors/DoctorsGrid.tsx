import React, { useState } from 'react';
import DoctorCard from './DoctorCard';

const doctorsData = [
  {
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
    description: 'Expert in heart diseases and conditions.',
    availability: 'Morning',
    hospital: 'Central Hospital',
    experience: '15 years'
  },
  {
    name: 'Dr. Jane Smith',
    specialty: 'Neurologist',
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
    description: 'Specialist in brain and nervous system disorders.',
    availability: 'Evening',
    hospital: 'City Medical',
    experience: '10 years'
  },
  {
    name: 'Dr. Alan Walker',
    specialty: 'Dermatologist',
    image: '', // No image to test placeholder behavior
    description: 'Expert in skin conditions.',
    availability: 'Morning',
    hospital: 'General Hospital',
    experience: '8 years'
  },
  {
    name: 'Dr. Emily Brown',
    specialty: 'Pediatrician',
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
    description: 'Dedicated to child healthcare and wellness.',
    availability: 'Evening',
    hospital: 'Central Hospital',
    experience: '12 years'
  },
  {
    name: 'Dr. Robert Wilson',
    specialty: 'Orthopedic Surgeon',
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
    description: 'Specialist in bone and joint disorders.',
    availability: 'Morning',
    hospital: 'City Medical',
    experience: '20 years'
  },
  {
    name: 'Dr. Sarah Miller',
    specialty: 'Oncologist',
    image: 'https://randomuser.me/api/portraits/women/15.jpg',
    description: 'Expert in cancer treatment and research.',
    availability: 'Evening',
    hospital: 'General Hospital',
    experience: '18 years'
  },
  {
    name: 'Dr. Michael Clark',
    specialty: 'General Physician',
    image: 'https://randomuser.me/api/portraits/men/16.jpg',
    description: 'Providing comprehensive primary healthcare services.',
    availability: 'Morning',
    hospital: 'Central Hospital',
    experience: '7 years'
  },
  {
    name: 'Dr. Laura Adams',
    specialty: 'Psychiatrist',
    image: 'https://randomuser.me/api/portraits/women/17.jpg',
    description: 'Specialized in mental health and psychiatric care.',
    availability: 'Evening',
    hospital: 'City Medical',
    experience: '14 years'
  },
  {
    name: 'Dr. William Scott',
    specialty: 'Ophthalmologist',
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
    description: 'Expert in vision and eye health treatments.',
    availability: 'Morning',
    hospital: 'General Hospital',
    experience: '9 years'
  },
  {
    name: 'Dr. Olivia Green',
    specialty: 'Endocrinologist',
    image: '', // No image to test placeholder behavior
    description: 'Specialist in hormone-related conditions and disorders.',
    availability: 'Evening',
    hospital: 'Central Hospital',
    experience: '11 years'
  },
].map(doctor => ({
  ...doctor,
  availability: doctor.availability || ['Morning', 'Evening'][Math.floor(Math.random() * 2)],
  hospital: doctor.hospital || ['Central Hospital', 'City Medical', 'General Hospital'][Math.floor(Math.random() * 3)],
  experience: doctor.experience || `${Math.floor(Math.random() * 20 + 5)} years`
}));

const specialties = [...new Set(doctorsData.map(doctor => doctor.specialty))];
const hospitals = [...new Set(doctorsData.map(doctor => doctor.hospital))];
const availabilityOptions = [...new Set(doctorsData.map(doctor => doctor.availability))];

const Doctors: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');

  const filteredDoctors = doctorsData.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty;
    const matchesHospital = !selectedHospital || doctor.hospital === selectedHospital;
    const matchesAvailability = !selectedAvailability || doctor.availability === selectedAvailability;

    return matchesSearch && matchesSpecialty && matchesHospital && matchesAvailability;
  });

  const dropdownStyle = "appearance-none w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8 bg-no-repeat bg-[right_0.75rem_center] bg-[length:1.5em_1.5em] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgMTBsNSA1IDUtNXoiIGZpbGw9IiM2QjcyODAiLz48L3N2Zz4=')]";

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto space-y-4 mb-8">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Search doctors by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className={dropdownStyle}
            >
              <option value="">All Specialties</option>
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>

            <select
              value={selectedHospital}
              onChange={(e) => setSelectedHospital(e.target.value)}
              className={dropdownStyle}
            >
              <option value="">All Hospitals</option>
              {hospitals.map((hospital) => (
                <option key={hospital} value={hospital}>{hospital}</option>
              ))}
            </select>

            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className={dropdownStyle}
            >
              <option value="">All Availabilities</option>
              {availabilityOptions.map((availability) => (
                <option key={availability} value={availability}>{availability}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
