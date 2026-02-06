import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/formal_dp.jpg";
import Tilt from "react-parallax-tilt";

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
              Hello! I'm Gaurav, a passionate frontend developer based in India. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experience.
              <br/>
              <br/>
              I'm currently pursuing my B.Tech in Computer Science and Information Technology at KIET Group of Institutions. Recently, I worked as a Frontend Developer at ZapForm, where I built modular UI components and optimized application performance.
              <br />
              <br />
              I'm also an active member of the CpByte Club, where I organize coding events and mentor juniors in Data Structures & Algorithms
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Html,CSS,JavaScript, C++, React, Node.js,Mongodb and ExpressJs{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications{" "}
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-circle " alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
