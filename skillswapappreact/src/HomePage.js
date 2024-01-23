import React, { useState } from 'react';
import './HomePage.css';

const HomePage = ({ handleLogout, loggedIn }) => {
  const [answers, setAnswers] = useState(Array(3).fill(''));

  const questions = [
    { id: 1, title: 'How to use React hooks?', votes: 10, answers: 5, userAnswers: [] },
    { id: 2, title: 'What is the difference between props and state?', votes: 15, answers: 8, userAnswers: [] },
    { id: 3, title: 'How to style components in React?', votes: 8, answers: 3, userAnswers: [] },
    // Add more sample questions as needed
  ];

  const handleAnswerSubmit = (questionIndex, answer) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = answer;
      return updatedAnswers;
    });

    // Update the userAnswers property in the questions array
    questions[questionIndex].userAnswers.push(answer);
  };

  return (
    <div className="home-page">
      <header className="header">
        <h1 className="title">SwapSkill</h1>
        {loggedIn && <button onClick={handleLogout} className="logout-btn">Logout</button>}
      </header>

      <div className="welcome-message">
        {loggedIn && <p>Welcome back! Explore the latest questions and contribute to the community.</p>}
        {!loggedIn && <p>Join SwapSkill to connect, learn, and share knowledge with others.</p>}
      </div>

      <div className="question-list">
        {questions.map(({ id, title, votes, answers: numAnswers, userAnswers }, index) => (
          <div key={id} className="question">
            <div className="votes">{votes}</div>
            <div className="question-details">
              <h3>{title}</h3>
              <p>{numAnswers} Answers</p>
            </div>
            <div className="answer-section">
              <textarea
                value={answers[index]}
                onChange={(e) => {
                  const updatedAnswers = [...answers];
                  updatedAnswers[index] = e.target.value;
                  setAnswers(updatedAnswers);
                }}
                placeholder="Your Answer..."
              />
              <button onClick={() => handleAnswerSubmit(index, answers[index])}>
                Submit Answer
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2>Ready to get started?</h2>
        <p>Ask your own question or help others by providing answers.</p>
        <button className="cta-btn">Ask a Question</button>
      </div>

      <div className="featured-section">
        <h2>Featured Topics</h2>
        <ul className="featured-topics-list">
          <li>React.js</li>
          <li>JavaScript</li>
          <li>Web Development</li>
          {/* Add more featured topics as needed */}
        </ul>
      </div>

      <div className="user-stats">
        <h2>Your Stats</h2>
        <div className="stats">
          <div className="stat-item">
            <strong>Questions Asked:</strong> 5
          </div>
          <div className="stat-item">
            <strong>Answers Given:</strong> 10
          </div>
          <div className="stat-item">
            <strong>Upvotes Received:</strong> 20
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
