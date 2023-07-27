import {Component} from 'react'
import {BsToggleOff, BsToggleOn, BsArrowLeftRight} from 'react-icons/bs'
import {AiFillClockCircle, AiFillCaretDown} from 'react-icons/ai'
import {FaArrowRight} from 'react-icons/fa'
import {MdPeople} from 'react-icons/md'
import {HiLocationMarker} from 'react-icons/hi'
import './index.css'
import Header from '../Header'
import Rating from '../Rating'
import BookTransfer from '../BookTransfer'
import MostPopular from '../MostPopular'
import DidYou from '../DidYou'
import ComfortAndSafety from '../ComfortAndSafety'
import BottomDescription from '../BottomDescription'

class Home extends Component {
  state = {isOneway: true, userInputFrom: '', userInputTo: '', isBlur: false}

  setTrip = () => {
    this.setState(prevState => ({isOneway: !prevState.isOneway}))
  }

  render() {
    const {isOneway, userInputFrom, userInputTo, isBlur} = this.state
    return (
      <div className="container">
        <div className="main-container">
          <Header />
          <h1 className="main-heading">
            Are you looking for airport transfers?
          </h1>
          <p className="main-paragraph">You have come to the right place</p>
          <form className="form-container" onSubmit={this.onSubmitButton}>
            <div className="one-way-container">
              {isOneway ? (
                <span className="toggle-text">
                  One-Way
                  <BsToggleOn className="toggle" onClick={this.setTrip} />
                </span>
              ) : (
                <span className="toggle-text">
                  Round-Trip
                  <BsToggleOff className="toggle" onClick={this.setTrip} />
                </span>
              )}
            </div>
            <div className="input-container">
              <div className="first-input-container">
                <div className="search">
                  <HiLocationMarker className="locator" />
                  <input
                    type="search"
                    className="input-text"
                    placeholder="From: Start typing your pickup location"
                    value={userInputFrom}
                    onChange={this.onChangeFrom}
                  />
                </div>
                {isBlur ? <p className="alert-para">Mandatory</p> : null}
                <div className="search-date">
                  <input
                    type="date"
                    value="Fri, Apr 26"
                    className="date-cont"
                  />
                  <div className="from-time">
                    <AiFillClockCircle /> 23:30
                  </div>
                </div>
              </div>
              {isOneway ? (
                <FaArrowRight className="from-to" />
              ) : (
                <BsArrowLeftRight className="from-to" />
              )}
              <div className="second-input-container">
                <div className="search">
                  <HiLocationMarker className="locator" />
                  <input
                    type="search"
                    className="input-text"
                    placeholder="From: To typing your dropoff location"
                    value={userInputTo}
                    onChange={this.onChangeTo}
                  />
                </div>
                {isBlur ? <p className="alert-para">Mandatory</p> : null}
                <div className="search-date">
                  <input
                    type="date"
                    value="Fri, Apr 26"
                    className="date-cont"
                  />
                  <div className="from-time">
                    <AiFillClockCircle /> 23:30
                  </div>
                </div>
              </div>
              <div className="third-input-container">
                <div className="number-of-Pass">
                  <MdPeople />
                  <span>1 Adult</span>
                </div>
                <AiFillCaretDown className="down-arrow" />
              </div>
              <button className="search-button" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
        <Rating />
        <BookTransfer />
        <MostPopular />
        <DidYou />
        <ComfortAndSafety />
        <BottomDescription />
      </div>
    )
  }
}

export default Home
