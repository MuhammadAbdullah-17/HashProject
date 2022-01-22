import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './App.css'
import logo from './images/logo.png'
const Header = () => {
  return (
    <>
      <div className="container">
      <div className="row">
        <div className="col-12">
          <Navbar  expand="lg">
            <Container>
              <Navbar.Brand  href="/Home"><img className="himg col-sm-8" src={logo} alt="Logo" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto mt-2 ">
                  <a className="nav mt-2" exact href="/">Home</a>
                  <a className="nav mt-2" exact href="#About">About Us</a>
                  <a className="nav mt-2" exact href="#Services">Services</a>
                  <a className="nav mt-2" exact href="#Portfolio">Portfolio</a>
                  <a className="nav mt-2" exact href="#Contact">Contact US</a>
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
