import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { WordsContextProvider } from "./components/context/WordsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WordsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WordsContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
