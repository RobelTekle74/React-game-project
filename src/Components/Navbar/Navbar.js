import React from "react";

//react router
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../HomePage/Home';
import Login from '../Login/Login';
import UProfile from '../Profile/UProfile';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import Register from '../Login/Register'
import { NavLink } from 'react-router-dom'

import "./Navbar.css"

class navbar extends React.Component{
  render() {
      return (
          <Router>
          <div>
            <ul id="nav">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/scores">Scores</NavLink>
              </li>
              <li>
                <NavLink to="/login">Sign in/Sign up</NavLink>
              </li>
            </ul>
    
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={UProfile} />
            {/* <Route path="/scores" component={ScoreBoard} /> */}
            <Route path="/login" component={Login} />
            <Route path='/register' component = {Register}/>
          </div>
      </Router>
      );
  }
}

export default navbar;