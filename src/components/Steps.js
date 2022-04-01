import React from "react";
import { Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";


const Steps = (props) => {
  return (
    <Row>
      <ul className="steps">
        <li className="step-round" name={props.currentStep === 1 || props.currentStep === 2 || props.currentStep === 3 ? 'active' : 'not-active'}>1</li>
        <li className={props.currentStep === 2 || props.currentStep === 3 ? 'divider active-divider' : 'divider'}></li>
        <li className="step-round" name={props.currentStep === 2 || props.currentStep === 3 ? 'active' : 'not-active'}>2</li>
        <li className={props.currentStep === 3 ? 'divider active-divider' : 'divider'}></li>
        <li className="step-round" name={props.currentStep === 3 ? 'active' : 'not-active'}>3</li>
      </ul>
    </Row>
  )
}

export default Steps;