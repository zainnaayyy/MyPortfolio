import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ColorSharp1 } from "../../assets";
import { BrowserRouter as Router } from "react-router-dom";
import { Progress } from "antd";

const Skills = () => {
  const skills = [
    {
      name: "Web Development Technologies",
      exp: 95,
    },
    {
      name: "Web Frameworks",
      exp: 85,
    },
    {
      name: "Databases",
      exp: 60,
    },
    {
      name: "Version Control Tools",
      exp: 70,
    },
    {
      name: "Operating Systems",
      exp: 80,
    },
    {
      name: "Cloud Platforms",
      exp: 75,
    },
    {
      name: "Containerization Technologies",
      exp: 50,
    },
    {
      name: "CI/CD Tools",
      exp: 65,
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Router>
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skills</h2>
                <p>
                  As an accomplished MERN DevOps Engineer, I possess a wide
                  range of technical skills and expertise that allow me to
                  create high-performing web applications. My mastery of
                  front-end and back-end technologies like React, Node.js, and
                  MongoDB, along with my comprehensive knowledge of cloud
                  infrastructure, containerization technologies, CI/CD
                  pipelines, and monitoring tools, enable me to manage the
                  complete software development life cycle from inception to
                  deployment. My commitment to delivering exceptional results
                  that surpass client expectations and my ability to build and
                  maintain robust and scalable web applications make me a
                  valuable asset to any development team.
                </p>
                <Carousel
                  responsive={responsive}
                  arrows={false}
                  autoPlay
                  autoPlaySpeed={1500}
                  customTransition="all 1.5s linear"
                  infinite={true}
                  className="skill-slider"
                >
                  {skills &&
                    skills.map((skill, index) => {
                      return (
                        <div key={index} className="item">
                          <Progress
                            type="circle"
                            size={100}
                            strokeWidth={10}
                            percent={skill.exp}
                            trailColor="transparent"
                            strokeColor={{
                              "0%": "rgba(37,98,138,1)",
                              "100%": "rgba(79,21,71,1)",
                            }}
                          />
                          <h5>{skill.name}</h5>
                        </div>
                      );
                    })}
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img className="background-image-left" src={ColorSharp1} alt="" />
      </section>
    </Router>
  );
};

export default Skills;
