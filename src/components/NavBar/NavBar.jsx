import { Link } from 'react-router-dom'

const NavBar = props => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
