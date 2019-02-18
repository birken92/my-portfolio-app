import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './signupForm';
import SignIn from './signIn';

import '../signApp.css';

class AboutMe extends Component {
  render() {
    return (
        <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="./signIn" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or 
                  <NavLink exact to="./signupForm" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/" component={SignIn}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default AboutMe;
