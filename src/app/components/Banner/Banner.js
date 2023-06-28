import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { HeaderImage } from "../../assets";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  //eslint-disable-next-line
  const [index, setIndex] = useState(1);
  const toRotate = ["MERN DevOps Engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    //eslint-disable-next-line
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi I'm Zain `}
                <span className="wrap">{text}</span>
              </h1>
              <p>
                As a MERN DevOps Engineer with 2 years of experience, I
                specialize in building and deploying high-performance web
                applications that meet business requirements with top-notch
                security, reliability, and scalability. I have expertise in
                cloud infrastructure, containerization technologies, CI/CD
                pipelines, monitoring tools, and a strong background in React,
                Node.js, MongoDB, and AWS. With my skills and experience, I can
                effectively manage the entire software development life cycle
                and exceed expectations in delivering results.
              </p>
              <HashLink className="hash" to="#connect">
                <button>
                  Let’s Connect <ArrowRightCircle size={25} />
                </button>
              </HashLink>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={HeaderImage} alt="HeaderImage" />
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};

export default Banner;
