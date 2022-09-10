import React, { useState } from "react";
import "./App.css";

function Quiz() {
  const [result, setResult] = useState("");

  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const [fifth, setFifth] = useState("");

  const answers = [
    "right",
    "180 degrees",
    "three",
    "pythagoras",
    "longest side of a triangle",
  ];

  const submitQuiz = (first, second, third, fourth, fifth) => {
    const selectedAnswers = [first, second, third, fourth, fifth];
    let score = 0;

    for (let i = 0; i < selectedAnswers.length; i++) {
      if (selectedAnswers[i] === answers[i]) score++;
    }
    setResult(`You scored ${score}/5`);
  };

  return (
    <div className="section">
      <h2>Test Your Knowledge!</h2>
      <form className="container">
        <ul>
          <li>
            <p>This type of triangle has one 90 degree angle.</p>
            <div className="options">
              <input
                type="radio"
                name="one"
                id="Acute"
                value="acute"
                onChange={(e) => setFirst(e.target.value)}
              />
              <label htmlFor="Acute">Acute</label>
            </div>
            <div className="options">
              <input
                type="radio"
                name="one"
                id="Right"
                value="right"
                onChange={(e) => setFirst(e.target.value)}
              />
              <label htmlFor="Right">Right</label>
            </div>
            <div className="options">
              <input
                type="radio"
                name="one"
                id="Obtuse"
                value="obtuse"
                onChange={(e) => setFirst(e.target.value)}
              />
              <label htmlFor="Obtuse">Obtuse</label>
            </div>
          </li>
          <li>
            <p>All 3 interior angles of a triangle add up to</p>
            <div className="options">
              <input
                type="radio"
                name="two"
                id="180"
                value="180 degrees"
                onChange={(e) => setSecond(e.target.value)}
              />
              <label htmlFor="180">180 degrees</label>
            </div>
            <div className="options">
              <input
                type="radio"
                name="two"
                id="90"
                value="90 degrees"
                onChange={(e) => setSecond(e.target.value)}
              />
              <label htmlFor="90">90 degrees</label>
            </div>
            <div className="options">
              <input
                type="radio"
                name="two"
                id="120"
                value="120 degrees"
                onChange={(e) => setSecond(e.target.value)}
              />
              <label htmlFor="120">120 degrees</label>
            </div>
          </li>
          <li>
            <p>How many sides does a triangle have?</p>
            <div className="options">
              <input
                type="radio"
                name="three"
                id="four"
                value="four"
                onChange={(e) => setThird(e.target.value)}
              />
              <label htmlFor="four">Four</label>
            </div>
            <div className="options">
              <input
                type="radio"
                name="three"
                id="three"
                value="three"
                onChange={(e) => setThird(e.target.value)}
              />
              <label htmlFor="three">Three</label>
            </div>
            <div className="options">
              <input
                type="radio"
                name="three"
                id="five"
                value="five"
                onChange={(e) => setThird(e.target.value)}
              />
              <label htmlFor="five">Five</label>
            </div>
          </li>
          <li>
            <p>Which ancient Greek philosopher studied triangles?</p>
            <div className="options">
              <input
                type="radio"
                name="four"
                id="Plato"
                value="plato"
                onChange={(e) => setFourth(e.target.value)}
              />
              <label htmlFor="Plato">Plato</label>
            </div>
            <div className="options">
              <input
                type="radio"
                name="four"
                id="Pythagoras"
                value="pythagoras"
                onChange={(e) => setFourth(e.target.value)}
              />
              <label htmlFor="Pythagoras">Pythagoras</label>
            </div>
            <div className="options">
              <input
                type="radio"
                name="four"
                id="Socrates"
                value="socrates"
                onChange={(e) => setFourth(e.target.value)}
              />
              <label htmlFor="Socrates">Socrates</label>
            </div>
          </li>

          <li>
            <p>What is a hypotenuse? </p>
            <div className="options">
              <input
                type="radio"
                name="five"
                id="Longest Side of a Triangle"
                value="longest side of a triangle"
                onChange={(e) => setFifth(e.target.value)}
              />
              <label htmlFor="Longest Side of a Triangle">
                Longest Side of a Triangle
              </label>
            </div>
            <div className="options">
              <input
                type="radio"
                name="five"
                id="A triangle with four sides"
                value="a triangle with four sides"
                onChange={(e) => setFifth(e.target.value)}
              />
              <label htmlFor="A triangle with four sides">
                A triangle with four sides
              </label>
            </div>
            <div className="options">
              <input
                type="radio"
                name="five"
                id="A triangle with three right angles"
                value="a triangle with three right angles "
                onChange={(e) => setFifth(e.target.value)}
              />
              <label htmlFor="A triangle with three right angles">
                A triangle with three right angles
              </label>
            </div>
          </li>
        </ul>
      </form>
      <div>
        <button
          className="btn-submit"
          onClick={() => submitQuiz(first, second, third, fourth, fifth)}
        >
          Submit
        </button>
        <button className="btn-submit" onClick={() => window.location.reload()}>
          Reset
        </button>
      </div>

      <p className="result">{result}</p>
    </div>
  );
}

export default Quiz;
