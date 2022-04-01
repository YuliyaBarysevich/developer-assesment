import React from "react";
import { Container } from "react-bootstrap";
import Steps from "./Steps";

const Intro = (props) => {
  return (
    <Container className="intro">
      <h1>Software Developer Assessment</h1>
      <p>If you're wondering if you would make a good software developer, take our short test and get an idea of where you stand.</p>
      <Steps currentStep={props.currentStep} />

    </Container>

  )
}

export default Intro;