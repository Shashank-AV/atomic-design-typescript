import React from "react";
import small from "../../assets/image/smallImage.jpg";
import "./largeCard.scss";

const LargeCard = ({ title }) => {
  return (
    <div className="smallContainer">
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={small} alt="columnImage" className="largecardImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
