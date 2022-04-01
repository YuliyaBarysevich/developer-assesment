import React, { useEffect, useState } from "react";
import { Form, Container, Row, Button, ButtonGroup } from "react-bootstrap";
import CssStep from "./CssStep";
import LanguageStep from "./LanguageStep";
import LogicStep from "./LogicStep";


const Test = (props) => {


  ////////////////////////////
  // Timer handlers
  ////////////////////////////


  const [cssSeconds, setCssSeconds] = useState(props.values.step1.time1 || 0)
  const [isCssTimerActive, setCssTimerActive] = useState(false)
  const [languageSeconds, setLanguageSeconds] = useState(props.values.step2.time1 || 0)
  const [isLanguageTimerActive, setLanguageTimerActive] = useState(false)
  const [logicSeconds, setLogicSeconds] = useState(props.values.step3.time3 || 0)
  const [isLogicTimerActive, setLogicTimerActive] = useState(false)

  useEffect(() => {
    let interval = null;
    if (isCssTimerActive) {
      interval = setInterval(() => {
        setCssSeconds(seconds => seconds + 1);
      }, 1000);
      props.values.step1.time1 = cssSeconds;
      props.setValues({...props.values});
    } 
    // else if (!isCssTimerActive && cssSeconds !== 0) {
    //   clearInterval(interval);
    // }
    return () => clearInterval(interval);
  }, [isCssTimerActive, cssSeconds]);

  useEffect(() => {
    let interval = null;
    if (isLanguageTimerActive) {
      interval = setInterval(() => {
        setLanguageSeconds(seconds => seconds + 1);
      }, 1000);
      props.values.step2.time2 = languageSeconds;
      props.setValues({...props.values});
    } 
    // else if (!isCssTimerActive && cssSeconds !== 0) {
    //   clearInterval(interval);
    // }
    return () => clearInterval(interval);
  }, [isLanguageTimerActive, languageSeconds]);


  useEffect(() => {
    let interval = null;
    if (isLogicTimerActive) {
      interval = setInterval(() => {
        setLogicSeconds(seconds => seconds + 1);
      }, 1000);
      props.values.step3.time3 = logicSeconds;
      props.setValues({...props.values});
    } 
    // else if (!isCssTimerActive && cssSeconds !== 0) {
    //   clearInterval(interval);
    // }
    return () => clearInterval(interval);
  }, [isLogicTimerActive, logicSeconds]);


  const handleStart = (e) => {
    e.preventDefault()
    props.setCurrentStep(1)
    setCssTimerActive(!isCssTimerActive)
  }

  return (
    <>
    {props.currentStep === 0 && (
      <Container className="start-button-container">
        <Row>
          <h3>Please, click a button to start an assignment.</h3>
          <ButtonGroup>
            <Button onClick={handleStart} variant="dark">Start</Button>
          </ButtonGroup>
        </Row>
      </Container>
    )}
    <Form onSubmit={props.handleSubmit}>
      {props.currentStep === 1 && (
        <CssStep
          values={props.values}
          setValues={props.setValues}
          onChange={props.handleChange}
          nextStep={props.nextStep}
          setCssTimerActive={setCssTimerActive}
          isCssTimerActive={isCssTimerActive}
          cssSeconds={cssSeconds}
          setLanguageTimerActive={setLanguageTimerActive}
          isLanguageTimerActive={isLanguageTimerActive}
        />
      )}
      {props.currentStep === 2 && (
        <LanguageStep
          values={props.values}
          onChange={props.handleChange}
          nextStep={props.nextStep} 
          previousStep={props.previousStep}
          setCssTimerActive={setCssTimerActive}
          languageSeconds={languageSeconds}
          setLanguageTimerActive={setLanguageTimerActive}
          setLogicTimerActive={setLogicTimerActive}
        />
      )}
       {props.currentStep === 3 && (
        <LogicStep
          values={props.values}
          onChange={props.handleChange} 
          previousStep={props.previousStep}
          isLoading={props.isLoading}
          setLogicTimerActive={setLogicTimerActive}
          setLanguageTimerActive={setLanguageTimerActive}
          logicSeconds={logicSeconds}
        />
      )}
    </Form>
    </>
  )
};

export default Test;