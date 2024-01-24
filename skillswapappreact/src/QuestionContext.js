// QuestionContext.js
<<<<<<< HEAD
import React, { createContext, useContext, useState } from "react";
=======
import React, { createContext, useContext, useState } from 'react';
>>>>>>> main

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (question) => {
    setQuestions((prevQuestions) => [...prevQuestions, question]);
  };

  return (
    <QuestionContext.Provider value={{ questions, addQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => {
  return useContext(QuestionContext);
};
