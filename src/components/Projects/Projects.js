import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Student Academic Portal"
              description=" Developed a website for University of Texas using MVC model and NodeJS framework where I wrote APIs using REST framework and wrote service layer, business logic and created Data access Object classes.
                            Wrote Unit and Integration test cases using JEST Framework and utilised Mocking Function API, scheduled, updated and allotted tasks to the team mates as a Scrum Master."

              // demoLink="#" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DropBox Application"
              description="Constructed a multi-threaded Dropbox-like synchronized storage service to Upload, Download, Delete and update files
                           and maintain optimal data retrieval speeds where I synchronized folders on the client side, e.g., creating a new file, etc. were reflected on the server side automatically using
                           RPC-based communication."

              // demoLink="#" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ChatGenius"
              description="Designed and developed an end-to-end chat application on Azure using Microsoft BOT framework and MVC architecture, enabling users to place meal orders, while incorporating Machine Learning techniques such as Language Understanding Intelligent Service and Bing Spell Check API to enhance the BOT’s intelligence."
              // demoLink="#" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/#/Plant_AI"
              // demoLink="#" <--------Please include a demo link here
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
