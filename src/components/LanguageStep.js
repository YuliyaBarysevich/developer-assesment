import React, { useState, useEffect } from "react";
import { Row, Form, ButtonGroup, Button, Container } from 'react-bootstrap'

const LanguageStep = (props) => {

  const [load, setLoad] = useState(false)

  const _next = (e) => {
    e.preventDefault();
    props.nextStep();
    props.setLogicTimerActive(true)
    props.setLanguageTimerActive(false)
  }

  const _previous = (e) => {
    e.preventDefault();
    props.previousStep()
    props.setCssTimerActive(true)
    props.setLanguageTimerActive(false)
  }

  const _handleChange = (e) => {
    props.onChange(e, "2")
  }

  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    });
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 1000)
  }, [load])

  return (
    <>
      <Container className={load ? "fade-in step-two" : "fade-out"}>
        <Row>
          <h2>Programming Questions</h2>
          <p>{props.languageSeconds} seconds</p>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label><span className="question">?</span> Provide the best way to combine two objects. (Language: JavaScript)</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              name="language1"
              onChange={_handleChange}
              value={props.values.step2.language1 || ''}
             />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label><span className="question">?</span> Provide a shorthand syntax for writing functions. (Language: JavaScript)</Form.Label>
            <span className="example">Ex: write a function that returns the sum of two numbers.</span>
            <Form.Control
              as="textarea"
              rows={6}
              name="language2"
              onChange={_handleChange}
              value={props.values.step2.language2 || ''}
             />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label><span className="question">?</span> Convert a string to an array. (Language: PHP)</Form.Label>
            <span class="example">Input: 'Hello' =&gt; Output: ['H', 'e', 'l', 'l', 'o']</span>
            <Form.Control
              as="textarea"
              rows={6}
              name="language2"
              onChange={_handleChange}
              value={props.values.step2.language2 || ''}
             />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label><span className="question">?</span> What is difference between abstract class and interface? (Language: PHP)</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              name="language2"
              onChange={_handleChange}
              value={props.values.step2.language2 || ''}
             />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label><span className="question">?</span> Create a React Component which renders a button. When the button is clicked it should display text: "Alert! Button was clicked!". (Language: JavaScript, Library: React) </Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              name="language3"
              onChange={_handleChange}
              value={props.values.step2.language3 || ''}
             />
          </Form.Group>
        </Row>
        <Row className="button-group">
          <ButtonGroup>
          <Button
              className="step1-button"
              type="button"
              name="previous"
              onClick={_previous}
              variant="dark"
            >
              Previous
            </Button>
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

export default LanguageStep;