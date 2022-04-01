import { useState, useEffect } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({step1:{}, step2:{}, step3:{}});

  // useEffect(() => {
  //   if(values) {
  //     console.log(values);
  //   }
  // }, [values]);

  const handleChange = (e, step) => {
    const { name, value } = e.target;
    if(step == "1"){
      values.step1[name] = value;
      setValues({...values});
    }else if (step == "2") {
      values.step2[name] = value;
      setValues({...values});
    }else if (step == "3") {
      values.step3[name] = value;
      setValues({...values});
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    callback(values);
  }

  return [handleSubmit, handleChange, values, setValues]
}


export default useForm;