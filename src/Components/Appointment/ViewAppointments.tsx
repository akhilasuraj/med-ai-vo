import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Appointment {
  id: string;
  doctorName: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  type: string;
}

const sampleAppointments: Appointment[] = [
  {
    id: '1',
    doctorName: 'Dr. Sarah Smith',
    date: '2024-02-15',
    time: '10:00 AM',
    status: 'upcoming',
    type: 'General Checkup'
  },
  {
    id: '2',
    doctorName: 'Dr. John Doe',
    date: '2024-02-20',
    time: '2:30 PM',
    status: 'upcoming',
    type: 'Follow-up'
  },
  {
    id: '3',
    doctorName: 'Dr. Maria Garcia',
    date: '2024-01-10',
    time: '11:00 AM',
    status: 'completed',
    type: 'Consultation'
  },
  {
    id: '4',
    doctorName: 'Dr. David Wilson',
    date: '2024-01-05',
    time: '3:00 PM',
    status: 'completed',
    type: 'Regular Checkup'
  }
];

const AppointmentCard: React.FC<{ appointment: Appointment }> = ({ appointment }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/appointments/${appointment.id}`);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-lg p-4 mb-4 border border-gray-200 dark:border-gray-600 dark:hover:border-gray-500 transition-all duration-200 hover:shadow-lg dark:shadow-gray-900/30">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{appointment.doctorName}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{appointment.type}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {appointment.date} at {appointment.time}
          </p>
        </div>
        <div className="flex gap-2">
          {appointment.status === 'completed' && (
            <button 
              onClick={handleDetailsClick}
              className="px-3 py-1 rounded-full text-sm bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-50 hover:bg-purple-300 dark:hover:bg-purple-700 transition-colors">
              Details
            </button>
          )}
          <span className={`px-3 py-1 rounded-full text-sm ${
            appointment.status === 'upcoming' 
              ? 'bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-50'
              : 'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-50'
          }`}>
            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

const ViewAppointments: React.FC = () => {
  const upcomingAppointments = sampleAppointments.filter(apt => apt.status === 'upcoming');
  const previousAppointments = sampleAppointments.filter(apt => apt.status === 'completed');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">My Appointments</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Upcoming Appointments</h2>
        {upcomingAppointments.length > 0 ? (
          upcomingAppointments.map(appointment => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-300">No upcoming appointments</p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Previous Appointments</h2>
        {previousAppointments.length > 0 ? (
          previousAppointments.map(appointment => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-300">No previous appointments</p>
        )}
      </div>
    </div>
  );
};

export default ViewAppointments;