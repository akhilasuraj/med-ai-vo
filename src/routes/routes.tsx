import { Route, Routes } from 'react-router';
import Profile from '../Components/Profile/Profile';
import Layout from '../Components/Layout/Layout';
import Doctors from '../Components/Doctors/DoctorsGrid';
import DoctorRegistration from '../Components/Onboarding/DoctorRegistration';
import PatientRegistration from '../Components/Onboarding/PatientRegistration';
import Appointment from '../Components/Appointment/Appointment';
import ViewAppointments from '../Components/Appointment/ViewAppointments';
import AppointmentDetails from '../Components/Appointment/AppointmentDetails';
import Contact from '../Components/Contact/Contact';
import Dashboard from '../Components/Dashboard/Dashboard';
import Login from '../Components/Login/Login';
import Settings from '../Components/Settings/Settings';
import UserOnboarding from '../Components/Onboarding/UserOnboarding';
import Signup from '../Components/Login/Signup';
import LaboratoryRegistration from '../Components/Onboarding/LaboratoryRegistration';

const routes: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/appointments/new' element={<Appointment />} />
        <Route path='/appointments/view' element={<ViewAppointments />} />
        <Route path='/appointments/:id' element={<AppointmentDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/settings' element={<Settings />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/onboarding' element={<UserOnboarding />} />
      <Route path='/doctor-registration' element={<DoctorRegistration />} />
      <Route path='/patient-registration' element={<PatientRegistration />} />
      <Route path='/laboratory-registration' element={<LaboratoryRegistration />} />
    </Routes>
  );
};

export default routes;
