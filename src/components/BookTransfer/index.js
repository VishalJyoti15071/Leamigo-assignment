import './index.css'
import {FaCar, FaShuttleVan} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {RiCustomerServiceFill} from 'react-icons/ri'

const BookTransfer = () => (
  <div className="book-travel-container">
    <div className="heading-container">
      <h1 className="book-heading">
        Book your <span className="highlight">transfer</span> to the{' '}
        <span className="highlight">Airport</span> or your private ride with
        ease. Enjoy our service at best rates available.
      </h1>
    </div>
    <div className="description-container">
      <ul className="unordered-list-book">
        <li className="ordered-list-book">
          <FaCar className="carLogo" />
          <p className="name-rat">DOOR-TO-DOOR</p>
          <p className="description-rat">
            From the Airport directly to your destination
          </p>
        </li>
        <li className="ordered-list-book">
          <FaShuttleVan className="carLogo" />
          <p className="name-rat">PRIVATE TRANSFERS</p>
          <p className="description-rat">
            We offer only private transfers, no shared service
          </p>
        </li>
        <li className="ordered-list-book">
          <CgProfile className="carLogo" />
          <p className="name-rat">MEET & GREET</p>
          <p className="description-rat">
            Our driver will meet & greet you in the arrivals hall
          </p>
        </li>
        <li className="ordered-list-book">
          <RiCustomerServiceFill className="carLogo" />
          <p className="name-rat">24/7 CUSTOMER SUPPORT</p>
          <p className="description-rat">
            We are here to help! Before, during and after your trip
          </p>
        </li>
      </ul>
      <div className="full-image-container">
        <img
          src="https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/banner-1.webp"
          alt="banner"
          className="image1"
        />
        <p className="para">
          Safe and disinfected transfers around the world, enjoy the best rates
          online
        </p>
      </div>
    </div>
  </div>
)

export default BookTransfer

//
//
// https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/app_logos/googleplay.png
// https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/app_logos/appstore.png
// https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/visa.svg
// https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/mc.svg
// https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/maestro.svg
// https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/amex.svg
// https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/carnet.svg
