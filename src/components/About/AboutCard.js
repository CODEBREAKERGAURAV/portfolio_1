import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Hi everyone! I’m <span className="purple">Gaurav Yadav</span>{" "}
            from <span className="purple">Varanasi, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">Juspay</span>.
            <br />I hold an Integrated M.Sc. (IMSc) in{" "}
            <span className="purple">Mathematics and Computing</span> from{" "}
            <span className="purple">BIT Mesra</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired: */}
            Hello! I'm <span className="purple">Gaurav</span>, a passionate{" "}
            <span className="purple">Full-Stack Web Developer</span> based in{" "}
            <span className="purple">Varanasi,India</span>.
            <br />I enjoy creating things that live on the internet, whether
            that be <span className="purple">websites</span>,{" "}
            <span className="purple">applications</span>, or anything in
            between.
            <br />
            My goal is to always build products that provide{" "}
            <span className="purple">pixel-perfect</span>,{" "}
            <span className="purple">performant</span> experiences.
            <br />
            <br />
            I'm currently pursuing my{" "}
            <span className="purple">
              B.Tech in Computer Science and Information Technology
            </span>{" "}
            at <span className="purple">KIET Group of Institutions</span>.
            <br />
            Recently, I worked as a{" "}
            <span className="purple">Frontend Developer</span> at{" "}
            <span className="purple">ZapForm</span>, where I built{" "}
            <span className="purple">modular UI components</span> and optimized{" "}
            <span className="purple">application performance</span>.
            <br />
            <br />
            I was also a member of{" "}
            <span className="purple">CpByte Club</span>, where I organize{" "}
            <span className="purple">coding events</span> and mentor juniors in{" "}
            <span className="purple">Data Structures & Algorithms</span>.
            <br />
            <br />
            Technologies I work with:
            <br />▹ <span className="purple">React.js</span>
            <br />▹ <span className="purple">Next.js</span>
            <br />▹ <span className="purple">TypeScript</span>
            <br />▹ <span className="purple">Tailwind CSS</span>
            <br />▹ <span className="purple">Node.js</span>
            <br />▹ <span className="purple">MongoDB</span>
            <br/>
            <br/>
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Gaurav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
