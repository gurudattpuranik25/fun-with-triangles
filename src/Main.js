import React from "react";
import homeImage1 from "./images/homeImage1.jpg";
import homeImage2 from "./images/homeImage2.jpg";
import homeImage3 from "./images/homeImage3.jpg";
import "./App.css";

function Main() {
  return (
    <div className="main">
      <div className="images">
        <img className=" homeImage " src={homeImage1} alt="" />
        <img className=" homeImage " src={homeImage2} alt="" />
        <img className=" homeImage " src={homeImage3} alt="" />
      </div>
      <div className="homeInfo">
        <p className="description">
          A triangle, as we all know, is a polygon with three edges and three
          vertices. It is one of the basic shapes in geometry. A triangle with
          vertices A, B, and C is denoted \triangle ABC. In Euclidean geometry,
          any three points, when non-collinear, determine a unique triangle and
          simultaneously, a unique plane.
        </p>
        <p className="linksInfo">
          Want to have fun with triangles? checkout the links in the header!
        </p>
      </div>
    </div>
  );
}

export default Main;
