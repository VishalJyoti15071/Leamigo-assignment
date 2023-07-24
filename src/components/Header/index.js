import {AiFillCaretDown} from 'react-icons/ai'
import {BsPersonFill} from 'react-icons/bs'
import websiteLogo from './assets/websiteLogo.png'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="nav-container">
      <a href="/">
        <img
          src={websiteLogo}
          alt="website logo"
          className="home-website-logo"
        />
      </a>
      <ul className="nav-items-container">
        <li>
          <a href="/airports-ports-stations" className="link-item">
            Desinations
          </a>
        </li>
        <li>
          <a href="/detail" className="link-item">
            My Booking
          </a>
        </li>
        <li>
          <a href="/travelAgency" className="link-item">
            Travel Agencies
            <span>
              <AiFillCaretDown className="down-arrow" />
            </span>
          </a>
        </li>
        <li>
          <a href="/hc/en-150" className="link-item">
            Help Center
          </a>
        </li>
        <li>
          <a href="/" className="link-item">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/14/17/united-kingdom-162452_640.png"
              alt="country"
              className="country-logo"
            />
            <span>
              <AiFillCaretDown className="down-arrow" />
            </span>
          </a>
        </li>
        <li>
          <a href="/" className="link-item">
            EUR
            <span>
              <AiFillCaretDown className="down-arrow" />
            </span>
          </a>
        </li>
        <li>
          <a href="/login">
            <button type="button" className="login-button">
              <BsPersonFill className="login-person" />
              <span>Login</span>
            </button>
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
