// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header">
    <ul className="nav-links">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
