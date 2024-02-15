import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/shresth_avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiMedium } from "react-icons/si";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hey 👋🏻 !! Hello! I'm a recent graduate from
              <i><b className="purple">{" "}The University of Texas at Arlington</b></i> ,
              holding a <i><b className="purple">{" "} Master's</b></i> degree in
              <i><b className="purple">{" "}Computer Science</b></i>.
               Currently, I'm immersed in the world of software engineering at UTARI, collaborating with senior researchers to transform their requirements into tangible products.


              <br />
              <br />
              Previously, I honed my skills as a <i><b className="purple">{" "}Software Developer</b></i> at <i><b className="purple">{" "}NTT Data Services</b></i>,
              crafting innovative web applications for diverse clients across sectors like healthcare and e-commerce.

              <br />
              <br />
               Excited to share my journey and insights with you on this platform!"

              <br />
              <br />
             To know more about me please refer to the  <i><b className="purple">{" "}Resume</b></i> section.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/grudge17"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shresthp/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
