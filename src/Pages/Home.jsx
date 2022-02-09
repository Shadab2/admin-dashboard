import React from "react";
import Chart from "../Components/Charts/Chart";
import FeaturedInfo from "../Components/FeaturedInfo/FeaturedInfo";
import { userData } from "../Data/dummyData";
import "./Styles/home-styles.css";

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        dataKey="ActiveUsers"
        title="User Analytics"
        grid
      />
    </div>
  );
}

export default Home;
