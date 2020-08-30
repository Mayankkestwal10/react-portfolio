import React from "react";
import "./About.css";
import { Col, Row } from "react-bootstrap";
import SkillsChart from './SkillsChart'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about-div">
      <Row>
        <Col className="about-col" xs={8} md={6}>
          <div>
            <h1>About ME</h1>
            <p className="intro">
              I'm a Final year B.Tech CSE Student and pursuing my degree from Lovely Professional University.
            </p>
            <p className="about-desc">
              A Vision with no match and a potential asset for any organization.
            </p>
            <p>
              <a className="contact-icon"  href="https://www.github.com/Mayankkestwal10">
                <FontAwesomeIcon icon={faGithub} size="3x"/>
              </a>
              <a className="contact-icon" href="https://www.linkedin.com/in/mayank-kestwal">
                <FontAwesomeIcon icon={faLinkedin} size="3x"/>
              </a>
              <a className="contact-icon" href="mailto:mayankkestwal8@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="3x"/>
              </a>
            </p>
          </div>
        </Col>
        <Col className="about-col" xs={8} md={6}>
          <img
            className="about-img"
            src="IMG_20191111_022339.jpg"
            alt="My pic"
          ></img>
        </Col>
      </Row>
      <div className="skills-div">
        <h2 id="title-myskills">My Skills</h2>
        <SkillsChart/>
      </div>
    </div>
  );
};

export default About;
