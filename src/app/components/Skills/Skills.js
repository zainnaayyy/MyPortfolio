import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Meter1, Meter2, Meter3, ColorSharp1 } from "../../assets";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { BrowserRouter as Router } from "react-router-dom";

const Skills = () => {
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
                <TrackVisibility>
                  {({ isVisible }) => (
                    <>
                      <div
                        className={
                          isVisible
                            ? "animate__animated animate__lightSpeedInLeft"
                            : "animate__animated animate__lightSpeedOutRight"
                        }
                      >
                        <h2>Skills</h2>
                      </div>
                      <div
                        className={
                          isVisible
                            ? "animate__animated animate__lightSpeedInRight animate__slow"
                            : "animate__animated animate__lightSpeedOutLeft"
                        }
                      >
                        <p>
                          As an accomplished MERN DevOps Engineer, I possess a
                          wide range of technical skills and expertise that
                          allow me to create high-performing web applications.
                          My mastery of front-end and back-end technologies like
                          React, Node.js, and MongoDB, along with my
                          comprehensive knowledge of cloud infrastructure,
                          containerization technologies, CI/CD pipelines, and
                          monitoring tools, enable me to manage the complete
                          software development life cycle from inception to
                          deployment. My commitment to delivering exceptional
                          results that surpass client expectations and my
                          ability to build and maintain robust and scalable web
                          applications make me a valuable asset to any
                          development team.
                        </p>
                      </div>
                    </>
                  )}
                </TrackVisibility>
                <Carousel
                  responsive={responsive}
                  arrows={false}
                  autoPlay
                  autoPlaySpeed={1500}
                  customTransition="all 1.5s linear"
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={Meter1} alt="" />
                    <h5>Web Development Technologies</h5>
                  </div>
                  <div className="item">
                    <img src={Meter2} alt="" />
                    <h5>Web Frameworks</h5>
                  </div>
                  <div className="item">
                    <img src={Meter3} alt="" />
                    <h5>Databases</h5>
                  </div>
                  <div className="item">
                    <img src={Meter1} alt="" />
                    <h5>Version Control Tools</h5>
                  </div>
                  <div className="item">
                    <img src={Meter2} alt="" />
                    <h5>Operating Systems</h5>
                  </div>
                  <div className="item">
                    <img src={Meter3} alt="" />
                    <h5>Cloud Platforms</h5>
                  </div>
                  <div className="item">
                    <img src={Meter1} alt="" />
                    <h5>Containerization Technologies</h5>
                  </div>
                  <div className="item">
                    <img src={Meter2} alt="" />
                    <h5>CI/CD Tools</h5>
                  </div>
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
