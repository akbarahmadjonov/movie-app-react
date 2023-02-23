import React from "react";
import { HeroBanner } from "./heroBanner/HeroBanner";
import { Trending } from "./trending/Trending";
import "./style.scss";

HeroBanner;

export const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};
