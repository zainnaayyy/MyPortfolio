import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ContactImage } from "../../assets";
import emailjs from "emailjs-com";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { BrowserRouter as Router } from "react-router-dom";
import { Form, Input } from "antd";
import Swal from 'sweetalert2'

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

  const handleSubmit = (values) => {
    setButtonText("Sending...");
    emailjs
      .send(
        "service_vi1yiol",
        "template_rh7i461",
        values,
        "tcGVS5tcyq9Y_07FA"
      )
      .then(
        (result) => {
          setButtonText("Send");
          setFormDetails(formInitialDetails);
          Swal.fire({
            icon: 'success',
            title: 'Mail sent successfully.',
            text: 'Thanks for contacting.'
          })
        },
        (error) => {
          setButtonText("Send");
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        }
      );
  };

  const onFinishFailed = (errorInfo) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Form is incomplete!'
    })
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
                      isVisible ? "animate__animated animate__shakeX" : ""
                    }
                  >
                    <h2>Get In Touch</h2>
                  </div>
                )}
              </TrackVisibility>
              <Form
                name="contactForm"
                initialValues={{
                  remember: true,
                }}
                onFinish={handleSubmit}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Row>
                  <Col sm={6} className="px-1">
                    <Form.Item
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your first name!",
                        },
                      ]}
                    >
                      <Input 
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                      />
                    </Form.Item>
                  </Col>
                  <Col sm={6} className="px-1">
                  <Form.Item
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your last name!",
                        },
                      ]}
                    >
                      <Input 
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) =>
                        onFormUpdate("lastName", e.target.value)
                      }
                      />
                    </Form.Item>
                  </Col>
                  <Col sm={6} className="px-1">
                  <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your email!",
                        },
                      ]}
                    >
                      <Input 
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) =>
                        onFormUpdate("email", e.target.value)
                      }
                      />
                    </Form.Item>
                  </Col>
                  <Col sm={6} className="px-1">
                  <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                      ]}
                    >
                      <Input 
                      type="phone"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) =>
                        onFormUpdate("phone", e.target.value)
                      }
                      />
                    </Form.Item>
                  </Col>
                  <Col sm={6} className="px-1">
                  <Form.Item
                      name="message"
                      rules={[
                        {
                          required: true,
                          message: "Please input your message!",
                        },
                      ]}
                    >
                      <Input.TextArea
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) =>
                        onFormUpdate("message", e.target.value)
                      }
                      />
                    </Form.Item>
                    <Form.Item>
                      <button type="submit">
                        <span>{buttonText}</span>
                      </button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};

export default Contact;
