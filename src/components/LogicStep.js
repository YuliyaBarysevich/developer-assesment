import React, { useState, useEffect } from "react";
import { Row, Form, ButtonGroup, Button, Container, Spinner } from 'react-bootstrap'

const LogicStep = (props) => {

  const [load, setLoad] = useState(false)

  const _handleChange = (e) => {
    props.onChange(e, "3")
  }

  const _previous = (e) => {
    e.preventDefault();
    props.previousStep()
    props.setLanguageTimerActive(true)
    props.setLogicTimerActive(false)
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
      <Container className={load ? "fade-in step-three" : "fade-out"}>
        <Row>
          <h2>Logic Questions</h2>
          <p>{props.logicSeconds} seconds</p>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label><span className="question">?</span> Write a function which returns the shortest palindrome from an array.</Form.Label>
            <span className="example">Input: ['madam', 'morning', 'mom', 'wondering', 'Aibohphobia'] =&gt; Output: 'mom'</span>
            <Form.Control
              as="textarea"
              rows={6}
              name="logic1"
              onChange={_handleChange}
              value={props.values.step3.logic1 || ''}
             />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label><span className="question">?</span> Explain the difference between visibility: hidden and display: none?</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              name="logic2"
              onChange={_handleChange}
              value={props.values.step3.logic2 || ''}
             />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label><span className="question">?</span> How block elements can be centered with CSS?</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              name="logic3"
              onChange={_handleChange}
              value={props.values.step3.logic3 || ''}
             />
          </Form.Group>
        </Row>
        <Row className="button-group">
          <ButtonGroup>
          <Button
              className="step3-button"
              type="button"
              name="previous"
              onClick={_previous}
              variant="dark"
            >
              Previous
            </Button>
            <Button
              className="step3-button"
              type="submit"
              name="next"
              variant="dark"
              disabled={props.isLoading}
              onClick={() => props.setLogicTimerActive(false)}
            >
              {props.isLoading ? (
                <Spinner 
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ): null}
              Submit
            </Button>
          </ButtonGroup>
        </Row>
      </Container>
    </>
  )
}

export default LogicStep;