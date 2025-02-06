import { Route, Routes } from 'react-router'
import Login from '../Components/Login/Login'
import Profile from '../Components/Profile/Profile'

const routes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default routes