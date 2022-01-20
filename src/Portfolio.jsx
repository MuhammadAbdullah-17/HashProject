import React from "react";
import { Button } from "react-bootstrap";
import PortfolioData from "./PortfolioData";

const Portfolio = () => {
  return (
    <div className="mt-5" style={{ backgroundColor: "orange" }} id="Portfolio">
      <div className="container text-white">
        <div className="row text-center pt-5">
          <h4>Hash21</h4>
          <h1>Portfolio</h1>
        </div>
        <div
          //data-aos="fade-up"
          //data-aos-duration="1500"   col-10 col-md-5 col-lg-2 col-xl-3   pimgs col-12 col-md-12 col-lg-12 mt-5
          className="pimgs mt-4"
        >
          {PortfolioData.map((data) => {
            return (
              <>
                <Button
                  className="btn col-10 col-lg-3 col-md-4 imag mb-5 mx-4"
                  style={{ backgroundColor: "transparent" }}
                >
                  <img
                    src={data.img}
                    alt="portfolio"
                    height="70px"
                    width="190px"
                  />
                </Button>
                <Button
                  className="btn col-10 col-lg-3 col-md-4 imag mb-5 mx-4"
                  style={{ backgroundColor: "transparent", marginLeft: "20px" }}
                >
                  <img
                    src={data.img}
                    alt="portfolio"
                    height="70px"
                    width="190px"
                  />
                </Button>
                <Button
                  className="btn col-10 col-lg-3 col-md-4 imag mb-5 mx-4"
                  style={{ backgroundColor: "transparent", marginLeft: "20px" }}
                >
                  <img
                    src={data.img}
                    alt="portfolio"
                    height="70px"
                    width="190px"
                  />
                </Button>
                <Button
                  className="btn col-10 col-lg-3 col-md-4 imag mb-5 mx-4"
                  style={{ backgroundColor: "transparent", marginLeft: "20px" }}
                >
                  <img
                    src={data.img}
                    alt="portfolio"
                    height="70px"
                    width="190px"
                  />
                </Button>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
