import React from "react";
import "./feature-info.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featured-items">
        <span className="featured-title">Revenue</span>
        <div className="featured-item-container">
          <span className="featured-value">$2459</span>
          <span className="featured-rate">
            -1.45 <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compared To Last Month</span>
      </div>
      <div className="featured-items">
        <span className="featured-title">Sales</span>
        <div className="featured-item-container">
          <span className="featured-value">$45059</span>
          <span className="featured-rate">
            -1.05
            <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compared to the Last Month</span>
      </div>
      <div className="featured-items">
        <span className="featured-title">Cost</span>
        <div className="featured-item-container">
          <span className="featured-value">$57822</span>
          <span className="featured-rate">
            +2.45
            <ArrowUpward className="featured-icon" />
          </span>
        </div>
        <span className="featured-sub">Compared To Last Month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
