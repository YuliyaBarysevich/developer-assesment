import React, { useState, useEffect } from "react";
import { Row, Form, ButtonGroup, Button, Container, Spinner } from 'react-bootstrap'
import inputImg from '../assets/input.png'
import outputImg from '../assets/output.png'
import matrix from '../assets/matrix.png'

const LogicStep = (props) => {

  const [load, setLoad] = useState(false)
  const [isHintOpen_1, setHintOpen_1] = useState(false)
  const [isHintOpen_2, setHintOpen_2] = useState(false)

  const _handleChange = (e) => {
    props.onChange(e, "3")
  }

  const _previous = (e) => {
    e.preventDefault();
    props.previousStep()
    props.setLanguageTimerActive(true)
    props.setLogicTimerActive(false)
  }

  const handleHint_1 = () => {
    setHintOpen_1(!isHintOpen_1)
  }

  const handleHint_2 = () => {
    setHintOpen_2(!isHintOpen_2)
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
            <Form.Label><span className="question">?</span> Given a limited size bag and a set of items (array of objects), each with a weight, a value and an id. You have to put the maximum amount of items in the bag, so total weight is less or equal to the given bag size limit and the total value is as large as possible. Return an array of the item id's in the bag.</Form.Label>
            <input type="button" value="Open Hint" className="button-hint" onClick={handleHint_1}/>
            <div className={isHintOpen_1 ? "opened-hint" : "closed-hint"}>
              <span>Input:</span>
              <img src={inputImg} />
              <span>Output:</span>
              <img src={outputImg} />
            </div>
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
            <Form.Label><span className="question">?</span> There is a robot on an <span className="bold">m</span> x <span className="bold">n</span> grid. The robot is initially located at the top-left corner. The robot tries to move to the bottom-right corner. The robot can only move either down or right at any point in time.</Form.Label>
            <span className="example">Given the two integers <span className="bold">m</span> and <span className="bold">n</span>, return the number of possible unique paths that the robot can take to reach the bottom-right corner.</span>
            <input type="button" value="Open Hint" className="button-hint" onClick={handleHint_2}/>
            <div className={isHintOpen_2 ? "opened-hint" : "closed-hint"}>
              <img src={matrix} />
            </div>
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