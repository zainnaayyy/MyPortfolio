import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ContactImage } from "../../assets";
import emailjs from "emailjs-com";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { BrowserRouter as Router } from "react-router-dom";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify(formDetails);

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch("http://localhost:5000/contact", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //         setButtonText("Send");
  //         setFormDetails(formInitialDetails);
  //         if (result.code === 200) {
  //           setStatus({ success: true, message: "Message sent successfully" });
  //         } else {
  //           setStatus({
  //             success: false,
  //             message: "Something went wrong, please try again later.",
  //           });
  //         }
  //     })
  //     .catch((error) => setStatus({
  //         success: false,
  //         message: "Something went wrong, please try again later.",
  //       }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        "service_it0pfxs",
        "template_gi7wx7o",
        e.target,
        "tcGVS5tcyq9Y_07FA"
      )
      .then(
        (result) => {
          setButtonText("Send");
          setFormDetails(formInitialDetails);
          setStatus({
            success: true,
            message: "Message sent successfully",
          });
        },
        (error) => {
          setButtonText("Send");
          setStatus({
            success: false,
            message: "Something went wrong, please try again later.",
          });
        }
      );
  };

  return (
    <Router>
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={ContactImage} alt="Contact Me" />
          </Col>
          <Col md={6}>
          <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible
                        ? "animate__animated animate__shakeX"
                        : ""
                    }
                  >
            <h2>Get In Touch</h2>
            </div>
                )}
              </TrackVisibility>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="firstName"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="lastName"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="phone"
                    name="phone"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <textarea
                    row="6"
                    name="message"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
    </Router>
  );
};

export default Contact;
