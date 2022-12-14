import { Link } from 'react-router-dom'

const AdminNavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/admin/changePassword">Change Password</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin/login">Log In</Link></li>
            <li><Link to="/admin/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default AdminNavBar
