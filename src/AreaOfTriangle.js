import React, { useState } from "react";

function AreaOfTriangle() {
  const calculateArea = (base, height) => {
    const b = parseInt(base);
    const h = parseInt(height);
    if (base === "" || height === "") setresult("All fields are mandatory");
    else {
      if (base <= 0 || height <= 0)
        setresult(
          "Sides cannot be zero or negative, please enter a positive length"
        );
      else {
        const area = 0.5 * b * h;
        setresult(`Area of tringle is ${area}`);
      }
    }
  };

  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [result, setresult] = useState("");

  return (
    <div className="section">
      <h2>Area of Triangle</h2>
      <h3 style={{ fontWeight: "normal", paddingBottom: "1.2rem" }}>
        Area of triangle is calculated using the formula 0.5*base*height.
        (provided base & height is given)
      </h3>
      <div className="form">
        <input
          type="number"
          placeholder="Enter the base"
          value={base}
          required
          onChange={(e) => setBase(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter the height"
          value={height}
          required
          onChange={(e) => setHeight(e.target.value)}
        />
        <div>
          <button onClick={() => calculateArea(base, height)}>Check</button>
          <button onClick={() => window.location.reload()}>Reset</button>
        </div>
      </div>
      <p className="result">{result}</p>
    </div>
  );
}

export default AreaOfTriangle;
