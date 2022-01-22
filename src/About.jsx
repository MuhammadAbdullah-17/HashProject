import React from "react";
import { Button, Card } from "react-bootstrap";
import Data from "./AboutData";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import aboutpic from './images/aboutpic.png'
AOS.init();
const About = () => {
  const [showResults, setShowResults] = React.useState(false);
  const Submit = () => setShowResults(!showResults);
  return (
    <>
      <div className="container" id="About">
        <div className="mt-4">
          <div className="row mx-auto">
            {Data.map((data) => {
              return (
                <>
                  <Card
                    // data-aos="fade-up" data-aos-duration="1500"
                    className="mx-auto card col-10 mb-1"
                    style={{
                      width: "15rem",
                    }}
                  >
                    <Card.Body>
                      <Card.Title className="fw-light">
                        {data.price}
                        <span
                          className="ms-4"
                          style={
                            data.color === "red"
                              ? { color: "red" }
                              : { color: "lightGreen" }
                          }
                        >
                          {data.value}
                        </span>
                        <img className="mx-1" src={data.arrowImage} alt="" />
                      </Card.Title>
                      <Card.Subtitle className="mb-2 mt-3 text-muted">
                        {data.line}
                        <img className="ms-3 ps-2" src={data.img} alt="" />
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </div>

        <div className="row mt-5 mx-auto">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="aimg col-10 col-md-7 col-lg-5 "
          >
            <img
              src={aboutpic}
              height="400px"
              width="450px"
              alt="About"
            />
          </div>
          <div className="apara col-md-4 col-lg-6 col-10 m-3 mx-auto">
            <h2 data-aos="fade-up" data-aos-duration="1000">
              About <span style={{ color: "orange" }}>Hash21</span>{" "}
            </h2>
            <p className="fs-5" data-aos="fade-up" data-aos-duration="1000">
              Hash21 is a perfect Blockchain-centric private company that
              provides its customers with embryonic crypto assets, smart money,
              and digital currency project. We, as investors, believe in
              investing in the right people at the right time.
              <span style={{ display: showResults ? "block" : "none" }}>
                We believe in providing the proper support and guidance through
                our well-established network to get our customers to reach
                heights.
              </span>
            </p>

            <Button
              className="btn border-0 rounded-pill btn-lg"
              style={{ backgroundColor: "orange" }}
              onClick={Submit}
            >
              {showResults ? <h5>Show Less</h5> : <h5>Show More</h5>}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
