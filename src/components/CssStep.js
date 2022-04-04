import React, { useState, useEffect } from "react";
import { Row, Form, ButtonGroup, Button, Container } from 'react-bootstrap'

const CssStep = (props) => {

  const [load, setLoad] = useState(false)

  const _next = (e) => {
    e.preventDefault();
    props.nextStep();
    props.setCssTimerActive(false)
    props.setLanguageTimerActive(true)
  }

  const _handleChange = (e) => {
    props.onChange(e, "1")
  }

  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 1000)
  }, [load]);

  return (
    <>
      <Container className={load ? "fade-in step-one" : "fade-out"}>
        <Row>
          <h2>CSS Questions</h2>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label><span className="question">?</span> What is the CSS Box model and what are its elements?</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="css1"
              onChange={_handleChange}
              value={props.values.step1.css1 || ''}
             />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label><span className="question">?</span> Provide all ways to hide an element without removing it from the DOM.</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="css2"
              onChange={_handleChange}
              value={props.values.step1.css2 || ''}
             />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label><span className="question">?</span> How block elements can be centered with CSS?(vertically and horizontally)</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="css3"
              onChange={_handleChange}
              value={props.values.step1.css3 || ''}
             />
          </Form.Group>
        </Row>
        <Row className="button-group">
          <ButtonGroup>
            <Button
              className="step1-button"
              type="button"
              name="next"
              onClick={_next}
              variant="dark"
            >
              Next
            </Button>
          </ButtonGroup>
        </Row>
      </Container>
    </>
  )
}

export default CssStep;