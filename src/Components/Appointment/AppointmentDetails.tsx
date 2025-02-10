import React from 'react';
import { FaUserMd, FaHospital, FaClock, FaCheckCircle, FaFileAlt, FaFlask, FaDollarSign } from 'react-icons/fa';

interface Prescription {
  id: string;
  issueDate: string;
  doctor: string;
  status: 'available' | 'pending';
}

interface Report {
  id: string;
  name: string;
  laboratory: string;
  status: 'available' | 'pending';
  issueDate: string;
}

interface AppointmentDetailsProps {
  appointment: {
    id: string;
    doctorName: string;
    specialty: string;
    hospital: string;
    date: string;
    time: string;
    queueNumber: string;
    status: 'completed' | 'upcoming' | 'cancelled';
    prescriptions: Prescription[];
    reports: Report[];
    payment: {
      amount: number;
      status: 'completed' | 'pending';
      currency: string;
    };
  };
}

// Sample data - in a real app, this would come from an API
const sampleAppointmentData = {
  id: '1',
  doctorName: 'Dr. Sarah Smith',
  specialty: 'Cardiologist',
  hospital: 'Central Hospital',
  date: '2024-02-15',
  time: '10:00 AM',
  queueNumber: 'A123',
  status: 'completed' as const,
  prescriptions: [
    {
      id: 'p1',
      issueDate: '2024-02-15',
      doctor: 'Dr. Sarah Smith',
      status: 'available' as const
    }
  ],
  reports: [
    {
      id: 'r1',
      name: 'Blood Test Report',
      laboratory: 'Central Lab',
      status: 'available' as const,
      issueDate: '2024-02-15'
    },
    {
      id: 'r2',
      name: 'ECG Report',
      laboratory: 'Cardiac Lab',
      status: 'pending' as const,
      issueDate: '2024-02-15'
    }
  ],
  payment: {
    amount: 150,
    status: 'completed' as const,
    currency: 'EVERS'
  }
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => (
  <span className={`px-3 py-1 rounded-full text-sm inline-flex items-center gap-2 
    ${status === 'completed' || status === 'available' 
      ? 'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-50'
      : status === 'pending'
      ? 'bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-50'
      : 'bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-50'
    }`}>
    {status === 'completed' && <FaCheckCircle className="w-4 h-4" />}
    {status.charAt(0).toUpperCase() + status.slice(1)}
  </span>
);

const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-6 border border-gray-200 dark:border-gray-700">
    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">{title}</h2>
    {children}
  </div>
);

const AppointmentDetails: React.FC<AppointmentDetailsProps> = ({ appointment }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <SectionCard title="Appointment Details">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaUserMd className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-gray-900 dark:text-gray-100 font-medium">{appointment.doctorName}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.specialty}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaHospital className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <p className="text-gray-900 dark:text-gray-100">{appointment.hospital}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaClock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-gray-900 dark:text-gray-100">{appointment.date}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-gray-600 dark:text-gray-400">Queue Number:</p>
              <p className="text-gray-900 dark:text-gray-100 font-medium">{appointment.queueNumber}</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <StatusBadge status={appointment.status} />
        </div>
      </SectionCard>

      <SectionCard title="Prescriptions">
        {appointment.prescriptions.map((prescription) => (
          <div key={prescription.id} className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
            <div className="flex items-center gap-3">
              <FaFileAlt className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-gray-900 dark:text-gray-100">Prescription from {prescription.doctor}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Issued: {prescription.issueDate}</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              View
            </button>
          </div>
        ))}
      </SectionCard>

      <SectionCard title="Reports">
        {appointment.reports.map((report) => (
          <div key={report.id} className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
            <div className="flex items-center gap-3">
              <FaFlask className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-gray-900 dark:text-gray-100">{report.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{report.laboratory}</p>
              </div>
            </div>
            <StatusBadge status={report.status} />
          </div>
        ))}
      </SectionCard>

      <SectionCard title="Payment Information">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaDollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {appointment.payment.amount} {appointment.payment.currency}
            </span>
          </div>
          <StatusBadge status={appointment.payment.status} />
        </div>
      </SectionCard>
    </div>
  );
};

const AppointmentDetailsWrapper: React.FC = () => {
  // Get the appointment ID from URL params
  // TODO: Use ID to fetch appointment data from API
  const appointment = sampleAppointmentData;

  if (!appointment) {
    return <div className="p-6">Loading...</div>;
  }

  return <AppointmentDetails appointment={appointment} />;
};

export default AppointmentDetailsWrapper;