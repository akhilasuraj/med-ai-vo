import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRound, Stethoscope, TestTube } from 'lucide-react';

type UserRole = 'patient' | 'doctor' | 'laboratory';

interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  selected: boolean;
  onClick: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ icon, title, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-200 ${
      selected
        ? 'bg-blue-100 dark:bg-blue-900 border-2 border-blue-500'
        : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
    }`}
  >
    <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
  </button>
);

const UserOnboarding = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedRole) {
      if (selectedRole === 'doctor') {
        navigate('/doctor-registration');
      } else if (selectedRole === 'patient') {
        navigate('/patient-registration');
      } else if (selectedRole === 'laboratory') {
        navigate('/laboratory-registration');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to MedAIVO
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Please select your role to customize your experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RoleCard
            icon={<UserRound size={40} />}
            title="Patient"
            selected={selectedRole === 'patient'}
            onClick={() => setSelectedRole('patient')}
          />
          <RoleCard
            icon={<Stethoscope size={40} />}
            title="Doctor"
            selected={selectedRole === 'doctor'}
            onClick={() => setSelectedRole('doctor')}
          />
          <RoleCard
            icon={<TestTube size={40} />}
            title="Laboratory"
            selected={selectedRole === 'laboratory'}
            onClick={() => setSelectedRole('laboratory')}
          />
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleContinue}
            disabled={!selectedRole}
            className={`px-8 py-3 rounded-lg text-white font-medium transition-all duration-200 ${
              selectedRole
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserOnboarding;