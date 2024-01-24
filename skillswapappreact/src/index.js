import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import AskQuestion from "./AskQuestion";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ask-question" element={<AskQuestion />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
