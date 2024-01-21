// HomePage.js
import React, { useState } from 'react';
import './HomePage.css';

const HomePage = ({ handleLogout, loggedIn }) => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [answers, setAnswers] = useState({});

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim() !== '') {
      setQuestions([...questions, newQuestion]);
      setNewQuestion('');
    }
  };

  const handleAnswerSubmit = (questionIndex, answerText) => {
    setAnswers({
      ...answers,
      [questionIndex]: [...(answers[questionIndex] || []), answerText],
    });
  };

  return (
    <div className="home-page">
      <h1>What are your question?</h1>
      
      {loggedIn && <button onClick={handleLogout}>Logout</button>}

      {/* Ask a Question Form */}
      <form onSubmit={handleQuestionSubmit}>
        <label>
          Ask a Question:
          <textarea
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
        </label>
        <button type="submit">Ask</button>
      </form>

      {/* Display Questions */}
      {questions.map((question, index) => (
        <div key={index} className="question">
          <p>{question}</p>

          {/* Answer Form */}
          <form
            className="answerForm"
            onSubmit={(e) => {
              e.preventDefault();
              const answerText = e.target.elements.answer.value;
              handleAnswerSubmit(index, answerText);
            }}
          >
            <label>
              Your Answer:
              <input type="text" name="answer" />
            </label>
            <button type="submit">Answer</button>
          </form>

          {/* Display Answers */}
          {answers[index] && answers[index].length > 0 && (
            <ul>
              {answers[index].map((answer, answerIndex) => (
                <li key={answerIndex} className="answer">
                  {answer}
                </li>
              ))}
            </ul>
          )}
          {(!answers[index] || answers[index].length === 0) && <p>No answers yet.</p>}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
