import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
export { default as Form } from "./components/Form";
export { default as DivisibleResults } from "./components/DivisibleResults";
export {
  divisibleBy2,
  divisibleBy3,
  divisibleBy4,
  divisibleBy5,
  divisibleBy6,
  divisibleBy7,
  divisibleBy8,
  divisibleBy9,
} from "./functions/divisionLogic";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
