import React from "react";
import Header from "../../src/organisms/header/header.js";
import Carosel from "../../src/molecules/carosel/carosel.jsx";
import Card from "../../src/atoms/card/card";
import LargeCard from "../../src/atoms/largeCard/largeCard.jsx";

const Landing = () => {
  return (
    <div>
      <Header />
      <Carosel />
      <Card title="Watch and learn" />
      <Card title="Shows you love" />
      <Card title="Newly Added" />
      <Card title="Discovering Animal Friends" />
      <Card title="Superstars" />
      <Card title="Investigation Special" />
      <Card title="When show biz meets science" />
      <LargeCard />
      <Card title="In first lane" />
      <Card title="When disaster strikes" />
      <Card title="Bear Grills" />
      <Card title="Animals Appeal" />
      <Card title="Favouraties" />
      <Card title="Need some Space?" />
    </div>
  );
};

export default Landing;
