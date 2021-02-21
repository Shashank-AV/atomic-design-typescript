import React from "react";
import "./header.scss";
import logoImage from "../../assets/logo/logo.png";
import searchSvg from "../../assets/svg/iconfinder.svg";
import Label from "../../atoms/label/label.jsx";
import Search from "../../molecules/search/search.jsx";
import Button from "../../atoms/button/index.tsx";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img alt="discovery" className="discovery" src={logoImage} />
      </div>
      <div className="header-right">
        <Label className="label-container" label="Home" />
        <Label className="label-container" label="Explore" />
        <Label className="label-container" label="Shorts" />
        <Label className="label-container" label="Mindblow" />
        <Label className="label-container" label="Premium" />
      </div>
      <div className="search-container" classProps="search-container">
        <Search 
          className="search"
          imgClassname="searchSvg"
          src={searchSvg}
        />
      </div>
      <div>
        <Button 
        type="button" className="button-container"
        >Sign In</Button>
      </div>
    </div>
  );
};

export default Header;
