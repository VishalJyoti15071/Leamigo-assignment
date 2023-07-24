import './index.css'
import {AiFillStar} from 'react-icons/ai'

const Rating = () => (
  <div className="rating-container">
    <h2 className="rating-heading">Rated excellent by real customers</h2>
    <ul className="unordered-list-rat">
      <li className="ordered-list-rat">
        <div className="star-name-container">
          <p className="name-rat">Raphael B...</p>
          <div className="marker-stars-cont">
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
          </div>
        </div>
        <p className="description-rat"> Antonio was very good</p>
      </li>
      <li className="ordered-list-rat">
        <div className="star-name-container">
          <p className="name-rat">Matthias P...</p>
          <div className="marker-stars-cont">
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-blank">
              <AiFillStar />
            </span>
          </div>
        </div>
        <p className="description-rat">Top Service</p>
      </li>
      <li className="ordered-list-rat">
        <div className="star-name-container">
          <p className="name-rat">Zoran N...</p>
          <div className="marker-stars-cont">
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
          </div>
        </div>
        <p className="description-rat">Everything correct and on time.</p>
      </li>
      <li className="ordered-list-rat">
        <div className="star-name-container">
          <p className="name-rat">John A...</p>
          <div className="marker-stars-cont">
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
          </div>
        </div>
        <p className="description-rat">
          Everything went to plan, driver was on time and the trip was great
        </p>
      </li>
      <li className="ordered-list-rat">
        <div className="star-name-container">
          <p className="name-rat">Nicole S...</p>
          <div className="marker-stars-cont">
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
          </div>
        </div>
        <p className="description-rat">Thank you! Everything was very good.</p>
      </li>
      <li className="ordered-list-rat">
        <div className="star-name-container">
          <p className="name-rat">Maria E...</p>
          <div className="marker-stars-cont">
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-solid">
              <AiFillStar />
            </span>
            <span className="icon-blank">
              <AiFillStar />
            </span>
          </div>
        </div>
        <p className="description-rat">
          Thanks for the service, as it was for my mom traveling alone from
          airport to hotel. I do recommend a lot this service.
        </p>
      </li>
    </ul>
  </div>
)

export default Rating
