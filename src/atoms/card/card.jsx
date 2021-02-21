import React from "react";
import small from "../../assets/image/smallImage.jpg";
import Title from "../title/title";
import wonder from "../../assets/image/wonder.jpg";
import never from "../../assets/image/neverending.jpg";
import machinist from "../../assets/image/machinist.jpg";
import million from "../../assets/image/million.jpg";
import solider from "../../assets/image/soliders.png";
import "./card.scss";

const Card = ({title}) => {
  return (
    <div className="smallContainer">
    <div className="row">
      <div className="row">
        <Title title={title} />
        <h4 className="viewall">View All</h4>
      </div>
      <div className="column">
        <div className="card">
          <img src={small} alt="columnImage" className="cardImage"/>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={wonder} alt="columnImage" className="cardImage"/>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={never} alt="columnImage" className="cardImage"/>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={machinist} alt="columnImage" className="cardImage"/>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={solider} alt="columnImage" className="cardImage"/>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={million} alt="columnImage" className="cardImage"/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
