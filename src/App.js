import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import IsTriangle from "./IsTriangle";
import Quiz from "./Quiz";
import CalculateHypotenuse from "./CalculateHypotenuse";
import AreaOfTriangle from "./AreaOfTriangle";
import Main from "./Main";

function App() {
  return (
    <div className="app">
      <Header />
      <div className=" routes">
        <Routes>
          <Route exact path="/" element={<Main />} />

          <Route path="/isTriangle" element={<IsTriangle />} />

          <Route path="/quiz" element={<Quiz />} />

          <Route
            path="/calculateHypotenuse"
            element={<CalculateHypotenuse />}
          />

          <Route path="/areaOfTriangle" element={<AreaOfTriangle />} />
        </Routes>
      </div>
      <div className="social-icons ">
        <div className="footer">Copyright &copy; 2022 - Gurudatt Puranik</div>
        <a href="https://twitter.com/PuranikGurudatt">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/gurudatt-puranik-0933b0195/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/gurudatt_puranik/">
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://github.com/gurudattpuranik25">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <p className="responsiveFooter">
        Copyright &copy; 2022 - Gurudatt Puranik
      </p>
    </div>
  );
}

export default App;
