import React from "react";
import { HeroBanner } from "./heroBanner/HeroBanner";
import { Trending } from "./trending/Trending";
import { Popular } from "./popular/Popular";
import "./style.scss";
import { TopRated } from "./topRated/TopRated";

HeroBanner;

export const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};
