import React from "react";
import "./Home.css";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Jumbotron id="jumbo">
        <h1>Mayank kestwal</h1>
        <p>
          I'm an Web and Data Science Enthusiast focused
          on creating sloutions for the real word problems.
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;
