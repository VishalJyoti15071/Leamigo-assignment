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
  state = {
    isOneway: true,
    userInputFrom: '',
    userInputFromDate: 'Fri, Apr 26',
    userInputTo: '',
    userInputToDate: '',
    isBlur: false,
    adult: 1,
    children: 0,
    infants: 1,
    isAddShow: false,
  }

  setTrip = () => {
    this.setState(prevState => ({isOneway: !prevState.isOneway}))
  }

  onSubmitButton = async event => {
    event.preventDefault()
  }

  onChangeFrom = event => {
    this.setState({userInputFrom: event.target.value})
  }

  onChangeTo = event => {
    this.setState({userInputTo: event.target.value})
  }

  onChangeFromDate = event => {
    const {isOneway, userInputFromDate, userInputToDate} = this.state
    if (isOneway === true) {
      this.setState({userInputFromDate: event.target.value})
    } else {
      this.setState({
        userInputFromDate: event.target.value,
        userInputToDate: event.target.value,
      })
      const date = userInputFromDate.getDate()
      console.log(date)
    }
  }

  onClickAddPassenger = () => {
    this.setState(prevState => ({isAddShow: !prevState.isAddShow}))
  }

  onChangeToDate = event => {
    this.setState({userInputToDate: event.target.value})
  }

  onClickNegativeA = () => {
    const {adult} = this.state
    if (adult > 0) {
      this.setState(prevState => ({adult: prevState.adult - 1}))
    }
  }

  onClickNegativeC = () => {
    const {children} = this.state
    if (children > 0) {
      this.setState(prevState => ({children: prevState.children - 1}))
    }
  }

  onClickNegativeI = () => {
    const {infants} = this.state
    if (infants > 0) {
      this.setState(prevState => ({infants: prevState.infants - 1}))
    }
  }

  onClickPositiveA = () => {
    this.setState(prevState => ({adult: prevState.adult + 1}))
  }

  onClickPositiveC = () => {
    this.setState(prevState => ({children: prevState.children + 1}))
  }

  onClickPositiveI = () => {
    this.setState(prevState => ({infants: prevState.infants + 1}))
  }

  render() {
    const {
      isOneway,
      userInputFrom,
      userInputFromDate,
      userInputToDate,
      userInputTo,
      isBlur,
      adult,
      children,
      infants,
      isAddShow,
    } = this.state
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
                    value={userInputFromDate}
                    className="date-cont"
                    onChange={this.onChangeFromDate}
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
                    value={userInputToDate}
                    className="date-cont"
                    onChange={this.onChangeToDate}
                  />
                  <div className="from-time">
                    <AiFillClockCircle /> 23:30
                  </div>
                </div>
              </div>
              <div className="third-input-container">
                <button
                  type="button"
                  className="number-of-Pass"
                  onClick={this.onClickAddPassenger}
                >
                  <div className="logo-and-passenger">
                    <MdPeople />
                    <span className="passenger">
                      {`${adult} Adult ${children} Children ${infants} Infants 1
                    Adult 1 Childern 1 Infants`}
                    </span>
                  </div>
                  <AiFillCaretDown className="down-arrow" />
                </button>
                {isAddShow && (
                  <div className="passenger-container">
                    <span>Adults </span>
                    <div className="sign-container">
                      <button
                        className="button-adult"
                        type="button"
                        onClick={this.onClickNegativeA}
                      >
                        -
                      </button>
                      <span> {adult} </span>
                      <button
                        onClick={this.onClickPositiveA}
                        className="button-adult"
                        type="button"
                      >
                        +
                      </button>
                    </div>
                    <span>Childrens </span>
                    <div className="sign-container">
                      <button
                        onClick={this.onClickNegativeC}
                        className="button-adult"
                        type="button"
                      >
                        -
                      </button>
                      <span> {children} </span>
                      <button
                        onClick={this.onClickPositiveC}
                        className="button-adult"
                        type="button"
                      >
                        +
                      </button>
                    </div>
                    <span>Infants </span>
                    <div className="sign-container">
                      <button
                        onClick={this.onClickNegativeI}
                        className="button-adult"
                        type="button"
                      >
                        -
                      </button>
                      <span> {infants} </span>
                      <button
                        onClick={this.onClickPositiveI}
                        className="button-adult"
                        type="button"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
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
