import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shresth Pal </span>
            currently located in <span className="purple"> Irving, Texas.</span>
            <br />
            I have completed my Masters in Computer science from the University of Texas at Arlington, and graduted in May 2023 with
            around 2+ years of intense development experience.
            <br />
            <br />
            I am currently  working as a software engineer at UTARI.
            <br />
            <br />
            Prior to that i worked as a Software developer at NTT Data Services where i designed and developed enterprise web applications for various clients, i had the opportunity to work for various domains be it healthcare or ecommerce

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Love to watch Movies.
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shresth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
