import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Destinations from './Components/Destinations/Destinations';
import StayingConfirm from './Components/StayingConfirm/StayingConfirm';
import Error from './Components/Error/Error';

export const UserContext = createContext()

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: "",
    password: "",
    massages: ""
  })
  const [PlaceData, setPlaceData] = useState(0)
  return (
    <UserContext.Provider value={{ getPlaceInfo: [PlaceData, setPlaceData], UserInfo: [loggedInUser, setLoggedInUser] }}>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/news" >
            <Home></Home>
          </Route>
          <Route path="/destination" >
            <Destinations></Destinations>
          </Route>
          <PrivateRoute path="/StayingConfirm" >
            <StayingConfirm></StayingConfirm>
          </PrivateRoute>
          <Route path="/place/:Id">
            <Booking></Booking>
          </Route>
          <Route path="/Login" >
            <Login></Login>
          </Route>
          <PrivateRoute path="/contact" >
            <Destinations></Destinations>
          </PrivateRoute>
          <Route path="/blog" >
            <Destinations></Destinations>
          </Route>
          <Route path="*" >
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
