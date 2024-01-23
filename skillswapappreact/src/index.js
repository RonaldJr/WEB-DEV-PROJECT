import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import "./index.css";
import AskQuestion from "./AskQuestion";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Ask-Question" element={<AskQuestion />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
