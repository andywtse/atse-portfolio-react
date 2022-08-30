import {useState} from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import ChangePassword from '../ChangePassword/ChangePassword'
import AdminNavBar from '../../components/NavBar/AdminNavBar';

const Admin = props => {

  const navigate = useNavigate()

  const [user, setUser] = useState(authService.getUser())

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <AdminNavBar user={user} handleLogout={handleLogout}/>
      <Routes>
      <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  );
};

export default Admin;