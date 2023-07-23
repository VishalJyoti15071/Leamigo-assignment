import Link from 'react'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://www.mytransfers.com/app_logos/store.png"
        alt="mytransport logo"
        className="logo"
      />
    </Link>

    <div className="link-container">
      <Link to="/airports-ports-stations" className="link-cont">
        <li>Desinations</li>
      </Link>
      <Link to="/detail" className="link-cont">
        <li>My Booking</li>
      </Link>
      <Link to="/travelAgency" className="link-cont">
        <li>Travel Agencies</li>
      </Link>
      <Link to="/hc/en-150" className="link-cont">
        <li>Help Center</li>
      </Link>
      <Link to="/" className="link-cont">
        <li>Country</li>
      </Link>
      <Link to="/" className="link-cont">
        <li>Currency</li>
      </Link>
      <Link to="/login" className="link-cont">
        <li>Login</li>
      </Link>
    </div>
  </div>
)

export default Header
