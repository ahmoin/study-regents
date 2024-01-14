import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Card from "./components/Card";
import SignIn from "./components/googleSignIn/signIn";
import "./Home.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <Navbar
        title="Study Regents"
        link="/study-regents/"
        logo="study-regents.svg"
      />
      <div className="my-16" />
      <Jumbotron
        mainText="The best tool to study for Regents."
        subText="Simplify your Regents preparation with our comprehensive study tool – your key to mastering the material, acing exams, and securing success."
      />
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <SignIn />
      </div>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:ms-2 sm:me-2 pt-12">
        <Card
          mainText="Blazingly fast"
          subText="Designed in pursuit of high-speed performance"
          logo="🔥"
          link="#"
        />
        <Card
          mainText="Open source"
          subText="Study Regents is free and open source"
          logo="💻"
          link="https://github.com/ahsanmoin05/study-regents"
        />
        <Card
          mainText="Make it yours"
          subText="Custom themes, icons and emojis"
          logo="📐"
          link="#"
        />
      </div>
      <Footer
        title="Study Regents"
        link="/study-regents/"
        logo="study-regents.svg"
        subText="Simplify your Regents preparation with our comprehensive study tool – your key to mastering the material, acing exams, and securing success."
      />
    </>
  </React.StrictMode>
);
