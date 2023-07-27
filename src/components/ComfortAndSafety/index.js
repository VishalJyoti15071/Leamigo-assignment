import './index.css'

const ComfortAndSafety = () => (
  <div className="comfort-container">
    <div className="heading-container1">
      <h1 className="book-heading1">
        Maximum comfort and safety during your trip
      </h1>
    </div>
    <ul className="unordered-list-book1">
      <li className="ordered-list-book1">
        <img
          src="https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/car-1.jpg"
          alt="banner"
          className="image2"
        />
        <p className="name-rat">ECONOMY CLASS</p>
        <p className="description-rat">
          For a couple or a family with children
        </p>
      </li>
      <li className="ordered-list-book1">
        <img
          src="https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/car-2.jpg"
          alt="banner"
          className="image2"
        />
        <p className="name-rat">BUSINESS CLASS</p>
        <p className="description-rat">Comfortable for business trips</p>
      </li>
      <li className="ordered-list-book1">
        <img
          src="https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/car-3.jpg"
          alt="banner"
          className="image2"
        />
        <p className="name-rat">FOR GROUPS</p>
        <p className="description-rat">
          For groups up to 19 people or with large luggage
        </p>
      </li>
    </ul>
    <h1 className="book-heading1">
      Download the Mytransfers app on your mobile phone.
    </h1>
    <div className="playstore">
      <img
        src="https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/app_logos/googleplay.png"
        alt="playstore"
        className="playstore-img"
      />
      <img
        src="https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/app_logos/appstore.png"
        alt="playstore"
        className="playstore-img"
      />
    </div>
  </div>
)

export default ComfortAndSafety
