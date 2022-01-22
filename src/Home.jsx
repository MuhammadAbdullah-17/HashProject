import React from "react";
import { Carousel } from "react-bootstrap";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import pb from './images/pb.png'
import pbbg from './images/pbbg.png'
import bg1 from './images/bg1.png'
import bg2 from './images/bg2.png'
import homepic from './images/homepic.png'

const Home = () => {
  return (
    <>
    <div
      className="bg-img"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <div
        className="bg-img"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition:'center'
        }}
      >
        <Header />
        <Carousel className="container">
          <Carousel.Item interval={3000}>
            <div className="row">
              <div className="col-md-4 col-10 col-sm-10 m-4 mt-5 text-left text-black fw-bolder">
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
                    src={pbbg}
                    alt="PlayButton"
                  />
                  <img
                    className="img2"
                    src={pb}
                    alt="PlayButton"
                  />
                </div>
                <h4>Watch Now</h4>
              </div>

              <div className="homeimg col-12 col-sm-10 mx-sm-auto col-md-6 col-lg-6 mt-5 ms-auto">
                <img
                  className="d-block mt-md-5 ms-lg-auto"
                  src={homepic}
                  alt="Home Img"
                  height="310px"
                  width="412px"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div className="row">
              <div className="col-md-4 col-10 col-sm-10 m-4 mt-5 text-left text-black fw-bolder">
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
                    src={pbbg}
                    alt="PlayButton"
                  />
                  <img
                    className="img2"
                    src={pb}
                    alt="PlayButton"
                  />
                </div>
                <h4>Watch Now</h4>
              </div>

              <div className="homeimg col-12 col-sm-10 mx-sm-auto col-md-6 col-lg-6 mt-5 ms-auto">
                <img
                  className="d-block mt-md-5 ms-lg-auto"
                  src={homepic}
                  alt="Home Img"
                  height="310px"
                  width="412px"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div className="row">
              <div className="col-md-4 col-10 col-sm-10 m-4 mt-5 text-left text-black fw-bolder">
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
                    src={pbbg}
                    alt="PlayButton"
                  />
                  <img
                    className="img2"
                    src={pb}
                    alt="PlayButton"
                  />
                </div>
                <h4>Watch Now</h4>
              </div>

              <div className="homeimg col-12 col-sm-10 mx-sm-auto col-md-6 col-lg-6 mt-5 ms-auto">
                <img
                  className="d-block mt-md-5 ms-lg-auto"
                  src={homepic}
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
