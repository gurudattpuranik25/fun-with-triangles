import React, { useState } from "react";

function IsTriangle() {
  const [firstAngle, setFirstAngle] = useState("");
  const [secondAngle, setSecondAngle] = useState("");
  const [thirdAngle, setThirdAngle] = useState("");
  const [result, setResult] = useState("");

  const checkForTriangle = (angle1, angle2, angle3) => {
    let intAngle1 = parseInt(angle1);
    let intAngle2 = parseInt(angle2);
    let intAngle3 = parseInt(angle3);

    if (angle1 === "" || angle2 === "" || angle3 === "")
      setResult("Enter all the fields ⛔");
    else {
      if (angle1 === "0" || angle2 === "0" || angle3 === "0")
        setResult("Angles cannot be zero.");
      else {
        if (angle1 < 0 || angle2 < 0 || angle3 < 0)
          setResult("Angles cannot be negative!!");
        else {
          if (intAngle1 + intAngle2 + intAngle3 > 180)
            setResult(
              "Oops...the sum of all angles is greater than 180 deg. 😢"
            );
          else if (intAngle1 + intAngle2 + intAngle3 < 180) {
            setResult("Oops...the sum of all angles is less than 180 deg. 😢");
          } else {
            setResult("Hurray...the angles entered forms a triangle. 🥳");
          }
        }
      }
    }
  };

  return (
    <div className="section ">
      <h2>Enter the angles below to know if they form a triangle.</h2>
      <p style={{ paddingBottom: "0.5rem" }}>
        (Hint: Sum of three angles is 180 deg.)
      </p>
      <div className="form">
        <input
          type="number"
          placeholder="Angle 1"
          value={firstAngle}
          required
          onChange={(e) => setFirstAngle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Angle 2"
          value={secondAngle}
          required
          onChange={(e) => setSecondAngle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Angle 3"
          value={thirdAngle}
          required
          onChange={(e) => setThirdAngle(e.target.value)}
        />
        <div>
          <button
            onClick={() =>
              checkForTriangle(firstAngle, secondAngle, thirdAngle)
            }
          >
            Check
          </button>
          <button onClick={() => window.location.reload()}>Reset</button>
        </div>
      </div>
      <p className="result">{result}</p>
    </div>
  );
}

export default IsTriangle;
