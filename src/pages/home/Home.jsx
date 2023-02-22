import React from "react";
import { HeroBanner } from "./heroBanner/HeroBanner";
import "./style.scss";

HeroBanner;

export const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
    </div>
  );
};
