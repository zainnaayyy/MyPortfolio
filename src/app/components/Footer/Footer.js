import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MailChimpForm from "../MailChimpForm/MailChimpForm";
import { LogoWhite, NavIconWhite1, NavIconWhite2, NavIconWhite3 } from "../../assets";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailChimpForm />
          <Col sm={6}>
            <img src={LogoWhite} alt="Logo" />
          </Col>
          <Col sm={6} className="text-centered tx-sm-end">
            <div className="social-icon-footer">
              <a className='linkedIn' href="https://www.linkedin.com/in/muhammad-zain-abdullah-721181197/">
                <img src={NavIconWhite1} alt="" />
              </a>
              <a className='fb' href="https://www.facebook.com/obliviousbrat">
                <img src={NavIconWhite2} alt="" />
              </a>
              <a className='insta' href="https://www.instagram.com/obliviousbrat/">
                <img src={NavIconWhite3} alt="" />
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
