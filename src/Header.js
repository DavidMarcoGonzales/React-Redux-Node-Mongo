import React, {Component} from "react";
import {IndexLink} from "react-router";
import NavLink from "./modules/NavLink";
import "./App.css";
import {Navbar, NavItem, Nav} from "react-bootstrap";

//import { Link } from 'react-router';
//import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="show-grid">
        <Navbar  >
          <Nav className="pdsa-sn-wrapper">
            <NavItem><IndexLink to="/">TCI</IndexLink></NavItem>
            <NavItem><NavLink to="/Rationale">Rationale</NavLink></NavItem>
            <NavItem><NavLink to="/Situational_Awareness">Situational Awareness</NavLink></NavItem>
            <NavItem><NavLink to="/TCI">TCI</NavLink></NavItem>
            <NavItem><NavLink to="/Assessment">Assessment</NavLink></NavItem>
            <NavItem><NavLink to="/about">About</NavLink></NavItem>

          </Nav>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
