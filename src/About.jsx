import React from "react";
import { Button, Card } from "react-bootstrap";
import Data from "./AboutData";
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();
const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" mt-4 d-flex">
            {Data.map((data) => {
              return (
                <>
                  <Card
                  data-aos="fade-up" data-aos-duration="1500"
                    className="w-100 mx-1"
                    style={{
                      width: "13rem",
                    }}
                  >
                    <Card.Body className="">
                      <Card.Title className="fw-light">
                        {data.price}
                        <span
                          className="ms-5"
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
                        <img className="ms-5 ps-2" src={data.img} alt="" />
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </div>

        <div className="row mt-5 ">
          <div data-aos="fade-right" data-aos-duration="1000" className="aimg col-10 col-md-7 col-lg-5 ">
            <img

              src="./images/aboutpic.png"
              height="400px"
              width="450px"
              alt="About"
            />
          </div>
          <div className="apara col-md-4 col-lg-6 col-10 m-3" >
            <h2 data-aos="fade-left" data-aos-duration="1000">
              About <span style={{ color: "orange" }}>Hash21</span>{" "}
            </h2>
            <p className="fs-5" data-aos="fade-left" data-aos-duration="1000">
              Hash21 is a perfect Blockchain-centric private company that
              provides its customers with embryonic crypto assets, smart money,
              and digital currency project. We, as investors, believe in
              investing in the right people at the right time.
              <span style={{ display: "block" }}>
                We believe in providing the proper support and guidance through
                our well-established network to get our customers to reach
                heights.
              </span>
            </p>
            <Button
              className="btn border-0 rounded-pill btn-lg"
              style={{ backgroundColor: "orange" }}
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
