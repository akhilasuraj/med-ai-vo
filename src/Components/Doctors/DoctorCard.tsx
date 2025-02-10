import { useState } from "react";

interface Doctor {
  name: string;
  specialty: string;
  image: string;
  description: string;
  availability: string;
  hospital: string;
  experience: string;
}

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  const [imageError, setImageError] = useState(false);

  // Extract first two letters from the doctor's name
  const getInitials = (name: string) => {
    const words = name.replace('Dr. ', '').split(' ');
    return words.length > 1
      ? (words[0][0] + words[1][0]).toUpperCase()
      : words[0].substring(0, 2).toUpperCase();
  };

  return (
    <div className='bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg p-6 text-center border border-gray-200 dark:border-gray-700 flex flex-col min-h-[400px] relative'>
      {imageError || !doctor.image ? (
        <div className='w-32 h-32 mx-auto flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-2xl font-bold'>
          {getInitials(doctor.name)}
        </div>
      ) : (
        <img
          src={doctor.image}
          alt={doctor.name}
          className='w-32 h-32 mx-auto rounded-full ring-2 ring-gray-200 dark:ring-gray-700'
          onError={() => setImageError(true)}
        />
      )}
      <h3 className='mt-4 text-xl font-semibold text-gray-900 dark:text-white'>
        {doctor.name}
      </h3>
      <p className='text-gray-700 dark:text-gray-300'>{doctor.specialty}</p>
      <p className='mt-2 text-gray-600 dark:text-gray-400'>{doctor.description}</p>
      <div className='w-full space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-16'>
        <p><span className='font-medium'>Hospital:</span> {doctor.hospital}</p>
        <p><span className='font-medium'>Availability:</span> {doctor.availability}</p>
        <p><span className='font-medium'>Experience:</span> {doctor.experience}</p>
      </div>
      <div className="absolute bottom-3 left-0 right-0 px-6">
        <button
          className='w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg py-3 shadow-lg transition duration-300 font-medium'
          onClick={() => (window.location.href = '/appointments/new')}
        >
          Schedule Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;