import './index.css'
import {AiFillStar} from 'react-icons/ai'

const Rating = () => (
  <div className="rating-container">
    <h2 className="rating-heading">Rated excellent by real customers</h2>
    <ul className="unordered-list-rat">
      <li className="ordered-list-rat">
        <div className="star-container">
          <p className="name-rat">Raphael B...</p>
          <div className="marker-stars-cont">
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
          </div>
        </div>
        <p className="description-rating">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Antonio was very good
        </p>
      </li>
      <li className="ordered-list-rat">
        <div className="star-container">
          <p className="name-rat">Matthias P...</p>
          <div className="marker-stars-cont">
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-blank" />
            </span>
          </div>
        </div>
        <p className="description-rating">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Top Service
        </p>
      </li>
      <li className="ordered-list-rat">
        <div className="star-container">
          <p className="name-rat">Zoran N...</p>
          <div className="marker-stars-cont">
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
          </div>
        </div>
        <p className="description-rating">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Everything correct and
          on time.
        </p>
      </li>
      <li className="ordered-list-rat">
        <div className="star-container">
          <p className="name-rat">John A...</p>
          <div className="marker-stars-cont">
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
          </div>
        </div>
        <p className="description-rating">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Everything went to
          plan, driver was on time and the trip was great
        </p>
      </li>
      <li className="ordered-list-rat">
        <div className="star-container">
          <p className="name-rat">Nicole S...</p>
          <div className="marker-stars-cont">
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
          </div>
        </div>
        <p className="description-rating">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Thank you! Everything
          was very good.
        </p>
      </li>
      <li className="ordered-list-rat">
        <div className="star-container">
          <p className="name-rat">Maria E...</p>
          <div className="marker-stars-cont">
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-solid" />
            </span>
            <span>
              <AiFillStar className="icon-blank" />
            </span>
          </div>
        </div>
        <p className="description-rating">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Thanks for the
          service, as it was for my mom traveling alone from airport to hotel. I
          do recommend a lot this service.
        </p>
      </li>
    </ul>
  </div>
)

export default Rating
