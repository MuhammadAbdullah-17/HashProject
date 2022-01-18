import React from "react";
import { Carousel } from "react-bootstrap";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
    <div
      className="bg-img"
      style={{
        backgroundImage: "url(./images/bg1.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition:'center'
      }}
    >
      <div
        className="bg-img"
        style={{
          backgroundImage: "url(./images/bg2.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition:'center'
        }}
      >
        <Header />
        <Carousel className="container">
          <Carousel.Item interval={3000}>
            <div className="row">
              <div className="col-md-4 col-10 col-sm-10 m-lg-5 m-md-4 m-sm-4 m-4 text-left text-black fw-bolder">
                <p style={{ color: "orange" }}>
                  Convert ideas into practical Applications.
                </p>
                <h1>We found & support blockchain projects</h1>
                <h4>
                  Quisque tincidunt molestie erat quis viverra. Proin Quisque
                  tincidunt molestie erat quis viverra.
                </h4>
                <div className="imgContainer d-flex float-left">
                  <img
                    className="img1"
                    src="./images/pbbg.png"
                    alt="PlayButton"
                  />
                  <img
                    className="img2"
                    src="./images/pb.png"
                    alt="PlayButton"
                  />
                </div>
                <h4>Watch Now</h4>
              </div>

              <div className="homeimg col-12 col-sm-10 mx-sm-auto col-md-6 col-lg-6 mt-5 ms-auto">
                <img
                  className="d-block mt-md-5 ms-lg-auto"
                  src="./images/homepic.png"
                  alt="Home Img"
                  height="310px"
                  width="412px"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div className="row">
              <div className="col-md-4 col-10 col-sm-10 m-lg-5 m-md-4 m-sm-4 m-4 text-left text-black fw-bolder">
                <p style={{ color: "orange" }}>
                  Convert ideas into practical Applications.
                </p>
                <h1>We found & support blockchain projects</h1>
                <h4>
                  Quisque tincidunt molestie erat quis viverra. Proin Quisque
                  tincidunt molestie erat quis viverra.
                </h4>
                <div className="imgContainer d-flex float-left">
                  <img
                    className="img1"
                    src="./images/pbbg.png"
                    alt="PlayButton"
                  />
                  <img
                    className="img2"
                    src="./images/pb.png"
                    alt="PlayButton"
                  />
                </div>
                <h4>Watch Now</h4>
              </div>

              <div className="homeimg col-12 col-sm-10 mx-sm-auto col-md-6 col-lg-6 mt-5 ms-auto">
                <img
                  className="d-block mt-md-5 ms-lg-auto"
                  src="./images/homepic.png"
                  alt="Home Img"
                  height="310px"
                  width="412px"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div className="row">
              <div className="col-md-4 col-10 col-sm-10 m-lg-5 m-md-4 m-sm-4 m-4 text-left text-black fw-bolder">
                <p style={{ color: "orange" }}>
                  Convert ideas into practical Applications.
                </p>
                <h1>We found & support blockchain projects</h1>
                <h4>
                  Quisque tincidunt molestie erat quis viverra. Proin Quisque
                  tincidunt molestie erat quis viverra.
                </h4>
                <div className="imgContainer d-flex float-left">
                  <img
                    className="img1"
                    src="./images/pbbg.png"
                    alt="PlayButton"
                  />
                  <img
                    className="img2"
                    src="./images/pb.png"
                    alt="PlayButton"
                  />
                </div>
                <h4>Watch Now</h4>
              </div>

              <div className="homeimg col-12 col-sm-10 mx-sm-auto col-md-6 col-lg-6 mt-5 ms-auto">
                <img
                  className="d-block mt-md-5 ms-lg-auto"
                  src="./images/homepic.png"
                  alt="Home Img"
                  height="310px"
                  width="412px"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        
      </div>
    </div>
    <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  );
};

export default Home;
