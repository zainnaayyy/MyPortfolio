import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MailChimpForm from "../MailChimpForm/MailChimpForm";
import { Logo, NavIcon1, NavIcon2, NavIcon3 } from "../../assets";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailChimpForm />
          <Col sm={6}>
            <img src={Logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-centered tx-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/muhammad-zain-abdullah-721181197/">
                <img src={NavIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/obliviousbrat">
                <img src={NavIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/obliviousbrat/">
                <img src={NavIcon3} alt="" />
              </a>
            </div>
            <p>TM © 2023 ObliviousDev. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
