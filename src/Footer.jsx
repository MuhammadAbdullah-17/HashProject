import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container foo col-10 col-sm-12 overflow-hidden col-md-10 col-lg-10" data-aos="fade-up" data-aos-duration="1500">
      <div className="row col-12 mt-5" >
        <div className="fimg mx-0 col-md-3 col-lg-2 col-2 col-sm-4">
          <img className="" src="./images/logo.png" alt="logo" />
        </div>
        <div className="ms-auto col-3 col-md-3 col-lg-3">
          <h5 className="d-flex">Follow Us On</h5>
          <i className="fab fa-facebook mx-2" style={{ color: "orange" }}></i>
          <i class="fab fa-twitter" style={{ color: "orange" }}></i>
        </div>
      </div>

      <div className="text-black col-4">
        <Nav className="m-0 mt-4 mb-4">
          <NavLink className="fnav" exact to="/">
            Home
          </NavLink>
          <NavLink className="fnav" exact to="/About">
            About Us
          </NavLink>
          <NavLink className="fnav" exact to="/Services">
            Services
          </NavLink>
          <NavLink className="fnav" exact to="/Portfolio">
            Portfolio
          </NavLink>
          <NavLink className="fnav" exact to="/Contact">
            Contact US
          </NavLink>
        </Nav>
      </div>
      <div className="row mt-2 text-center text-md-left text-lg-left text-sm-left">
        <div className="col-12 col-md-5">
          <h6>Terms And Conditions | Privacy Policy | Accessiblity | Legal</h6>
        </div>
        <div className=" ms-auto col-12 col-md-4">
          <h6 className="">All Rights Reserved @Copyright 2022.</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
