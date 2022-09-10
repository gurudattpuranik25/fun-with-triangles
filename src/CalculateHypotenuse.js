import React, { useState } from "react";

function CalculateHypotenuse() {
  const claculateHypotenuse = (firstSide, secondSide) => {
    const side1 = parseInt(firstSide);
    const side2 = parseInt(secondSide);
    if (firstSide === "" || secondSide === "")
      setresult("All fields are mandatory");
    else {
      if (firstSide <= 0 || secondSide <= 0)
        setresult(
          "Sides cannot be zero or negative, please enter a positive length"
        );
      else {
        const hypotenuse = Math.sqrt(side1 * side1 + side2 * side2);
        setresult(`Hypotenuse for the corresponding lengths is ${hypotenuse}`);
      }
    }
  };

  const [firstSide, setFirstSide] = useState("");
  const [secondSide, setSecondSide] = useState("");
  const [result, setresult] = useState("");

  return (
    <div className="section">
      <h2>Calculate Hypotenuse</h2>
      <h3 style={{ fontWeight: "normal", paddingBottom: "1.2rem" }}>
        Hypotenuse is the longest side of a triangle and is calculated using the
        formula a2+b2=c2
      </h3>
      <div className="form">
        <input
          type="number"
          placeholder="Enter the first side"
          value={firstSide}
          required
          onChange={(e) => setFirstSide(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter the second side"
          value={secondSide}
          required
          onChange={(e) => setSecondSide(e.target.value)}
        />
        <div>
          <button onClick={() => claculateHypotenuse(firstSide, secondSide)}>
            Check
          </button>
          <button onClick={() => window.location.reload()}>Reset</button>
        </div>
      </div>
      <p className="result">{result}</p>
    </div>
  );
}

export default CalculateHypotenuse;
