import {FaPlane} from 'react-icons/fa'
import websiteLogo from '../Header/assets/websiteLogo.png'
import './index.css'

const BottomDescription = () => (
  <div className="bottom-description-container">
    <ul className="unordered-container">
      <li className="order-bottom-you">
        <h1 className="bottom-heading">Book your airport transfer worldwide</h1>
        <p className="desc">
          Mytransfers offers private airport transfers bookings with instant
          confirmation worldwide. We work directly with local drivers and select
          the best services for our clients. In this way we ensure that your
          vacation will start in the best possible way.
          <br /> We constantly review our service to ensure that you will enjoy
          your ride with Mytransfers in any destination you choose.
        </p>
      </li>
      <li className="order-bottom-you">
        <h1 className="bottom-heading">Book your airport transfer worldwide</h1>
        <p className="desc">
          Choose your origin and destination and in just 3 click you will have
          your private transfer booked. Forget about long waiting taxi lines at
          the airport, our driver will be waiting for you with a sign at your
          arrival.
        </p>
      </li>
      <li className="order-bottom-you">
        <h1 className="bottom-heading">Book your airport transfer worldwide</h1>
        <p className="desc">
          With us you can book your private transfer from any airport, port or
          train station. We monitor the arrival of the means of transport to
          ensure that your transfer will be carried out on time and with the
          maximum guarantees of quality and safety.
        </p>
      </li>
    </ul>
    <div className="term-and-condition-container">
      <div className="term-and-condition-card">
        <img src={websiteLogo} alt="company-logo" className="company-logo" />
        <div className="play-store-card">
          <img
            src="https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/app_logos/googleplay.png"
            alt="card-logo"
            className="card-logo"
          />
          <img
            src="https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/app_logos/appstore.png"
            alt="card-logo"
            className="card-logo"
          />
        </div>
      </div>
      <div className="term-and-condition-card">
        <div className="help-info">
          <FaPlane /> <h1 className="help-center-head">HELP & INFORMATION</h1>
        </div>
        <div className="help-center">
          <p className="help-center-para">Terms & Conditions</p>
          <p className="help-center-para">Help Centre</p>
          <p className="help-center-para">Privacy Policy</p>
          <p className="help-center-para">About Us</p>
          <p className="help-center-para">Cookie Policy</p>
        </div>
      </div>
      <div className="term-and-condition-card">
        <div className="help-info">
          <FaPlane /> <h1 className="help-center-head">WORK WITH US</h1>
        </div>
        <div className="help-center">
          <p className="help-center-para">Travel Agencies</p>
          <p className="help-center-para">Drive with us</p>
          <p className="help-center-para">Driver platform</p>
        </div>
      </div>
    </div>
    <div className="logo-container">
      <ul className="logo-card-image">
        <li className="logo-card-order">
          <img
            src="https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/visa.svg"
            alt="company"
            className="card-img"
          />
        </li>
        <li className="logo-card-order">
          <img
            src="https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/mc.svg"
            alt="company"
            className="card-img"
          />
        </li>
        <li className="logo-card-order">
          <img
            src="https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/maestro.svg"
            alt="company"
            className="card-img"
          />
        </li>
        <li className="logo-card-order">
          <img
            src="https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/amex.svg"
            alt="company"
            className="card-img"
          />
        </li>
        <li className="logo-card-order">
          <img
            src="https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/carnet.svg"
            alt="company"
            className="card-img"
          />
        </li>
      </ul>
      <div className="logo-card-para">
        <p className="conclude">
          C/ D’En Bosc 16 Palma de Mallorca Illes Balears 07002 ES | (+34) 911
          880 435
        </p>
        <p className="conclude">© MyTransfers. 2023. All rights reserved.</p>
      </div>
    </div>
  </div>
)

export default BottomDescription
