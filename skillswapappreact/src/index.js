import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
=======
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import BrowserRouter
>>>>>>> main
import App from "./App";
import "./index.css";
import AskQuestion from "./AskQuestion";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
<<<<<<< HEAD
      <Route path="/ask-question" element={<AskQuestion />} />
=======
      <Route path="ask-question" element={<AskQuestion />} />
>>>>>>> main
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
