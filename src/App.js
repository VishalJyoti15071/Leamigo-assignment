import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Destinations from './components/Destinations'
import MyBooking from './components/MyBooking'
import TravelAgency from './components/TravelAgency'
import HelpCenter from './components/HelpCenter'
import Login from './components/Login'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/airports-ports-stations" component={Destinations} />
    <Route path="/detail" component={MyBooking} />
    <Route path="/travelAgency" component={TravelAgency} />
    <Route path="/hc/en-150" component={HelpCenter} />
    <Route path="/login" component={Login} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
