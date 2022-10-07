import React from "react";
import data from "../helper/data";
// import Picture from "../components/Picture";
import Picture from "../components/Picture";

const Homepage = () => {
  return (
    <div>
      <h1 style={{ color: "blue" }}>ALBUMS</h1>
      <div className="pictures">
        {data.map((x) => {
          return <Picture data={x} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
