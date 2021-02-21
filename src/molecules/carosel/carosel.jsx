import React from "react";
import pogaru from "../../assets/image/pogaru.webp";
import master from "../../assets/image/master.jpg";
import Pogaru from "../../assets/image/pogaru.jpg";
import CaroselCard from "../../atoms/caroselCard/caroselCard";

const Carosel = () => {
  return (
    <div>
      <div className="container">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div
            className="carousel-inner"
            style={{ borderRadius: "20px", width: "100%" }}
          >
            <div className="item">
              <img src={pogaru} alt="pogaru" />
            </div>

            <div className="item active">
              <img src={Pogaru} alt="kgf" />
            </div>

            <div className="item">
              <img src={master} alt="master" />
            </div>
          </div>

          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <CaroselCard />
    </div>
  );
};

export default Carosel;
