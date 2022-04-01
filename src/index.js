import React from "react";
import ReactDOM from 'react-dom';

import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  return (
    <App />
  )
}

const rootEl = document.getElementById('root');
ReactDOM.render(<Main />, rootEl)