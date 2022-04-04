import React, { useState, useEffect } from "react";
import Intro from "./Intro";
import Test from "./Test";
import SuccessMessage from "./SuccessMessage";
import useForm from "../hooks/form";
import useAxios from "../hooks/axios";

const Result = () => {

  const [list, setList] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false)
  const [isLoading, setLoading] = useState(false);
  const [handleSubmit, handleChange, values, setValues] = useForm(submitForm)
  const [getData, addNewData] = useAxios(list)


  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  }

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  }

  function submitForm(form){
    //TODO
    //Change here
    _addData(form)
    console.log('works')
  } 

  // useEffect(() => {
  //   getData((data) => setValues(data))
  // })

  const _addData = async (data) => {
    setLoading(true);
    addNewData(data, (response) => {
      if(!response.error) {
        setList([...list, response]);
        setLoading(false);
        setValues({});
        setShowSuccess(true);
      } else {
        setLoading(false);
      }
    })
  }



  return (
    <>
      <Intro currentStep={currentStep} />
      <Test 
        currentStep={currentStep}
        nextStep={nextStep}
        previousStep={previousStep}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        values={values}
        setValues={setValues}
        setCurrentStep={setCurrentStep}
        isLoading={isLoading}
      />
      <SuccessMessage show={showSuccess} onHide={() => setShowSuccess(false)}  />
    </>
  )
}

export default Result;