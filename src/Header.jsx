import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './App.css'
const Header = () => {
  return (
    <>
      <div className="container">
      <div className="row">
        <div className="col-12">
          <Navbar  expand="lg">
            <Container>
              <Navbar.Brand  href="/Home"><img className="himg col-sm-8" src="./images/logo.png" alt="Logo" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto nav">
                  <NavLink className="nav" exact to="/">Home</NavLink>
                  <NavLink className="nav" exact to="/About">About Us</NavLink>
                  <NavLink className="nav" exact to="/Services">Services</NavLink>
                  <NavLink className="nav" exact to="/Portfolio">Portfolio</NavLink>
                  <NavLink className="nav" exact to="/Contact">Contact US</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
