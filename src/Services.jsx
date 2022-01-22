import React from "react";
import { Card } from "react-bootstrap";
import servicesData from './servicesData'

const Services = () => {
  return (
    <div className="container" id="Services">
      <div className="row text-center mt-4">
        <h5 className="col-12 " style={{ color: "orange" }}>
          Our Vision
        </h5>
        <h2>What We Do</h2>
        <p className="fs-5 text-black-50">
          The aim of Hash21 is to become one of the top Blockchain-centric
          venture capital businesses and keep providing our customers crypto
          assets and smart money for the longest time.
        </p>
      </div>
      <div className="cards row mt-3 mx-auto col-12 col-sm-12 col-md-12 col-lg-12">
        {servicesData.map((data) => {
          return (
            <>
              <Card style={{ width: "20rem", marginLeft:"45px", borderRadius:"2%" }} className="card mb-md-4 mb-sm-4 mb-3 text-center mx-auto fs-5 pt-4">
                <Card.Img variant="top" src={data.img} height="50px" width="50px"/>
                <Card.Body className="mx-3">
                  <Card.Title>{data.heading}</Card.Title>
                  <Card.Text>{data.text}</Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
