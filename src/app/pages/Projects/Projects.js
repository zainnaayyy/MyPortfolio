import React from "react";
import {
  ColorSharp2,
  ProjectImage1,
  ProjectImage2,
  ProjectImage3,
} from "../../assets";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCards } from "../../components";

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: ProjectImage1,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: ProjectImage2,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: ProjectImage3,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: ProjectImage1,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: ProjectImage2,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: ProjectImage3,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={ColorSharp2} alt="" />
    </section>
  );
};

export default Projects;
