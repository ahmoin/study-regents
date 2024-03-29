import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import "./Home.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <Navbar
        title="Algebra Two"
        link="/study-regents/"
        logo="../study-regents.svg"
      />
      <div className="my-16" />
      <Jumbotron
        mainText="This is place of the place for Algebra Two."
        subText="Simplify your Regents preparation with our comprehensive study tool – your key to mastering the material, acing exams, and securing success."
      />
    </>
  </React.StrictMode>
);
