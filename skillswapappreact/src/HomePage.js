// HomePage.js
import React, { useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = ({ handleLogout, loggedIn }) => {
  const [answers, setAnswers] = useState(Array(3).fill(""));
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "How to use React hooks?",
      votes: 10,
      answers: 5,
      userAnswers: [
        "Hook into the power of React hooks!",
        "UseEffect basics",
        "Custom hooks example",
        "Understanding useState",
      ],
    },
    {
      id: 2,
      title: "What is the difference between props and state?",
      votes: 15,
      answers: 8,
      userAnswers: [
        "Props are for passing data from parent to child components.",
        "State is for managing component-specific data.",
        "Differences in use cases and behavior.",
      ],
    },
    {
      id: 3,
      title: "How to style components in React?",
      votes: 8,
      answers: 3,
      userAnswers: [
        "Using inline styles",
        "CSS-in-JS libraries like styled-components",
        "CSS Modules for modular styles",
      ],
    },
    // Add more sample questions as needed
  ]);

  const handleAnswerSubmit = (questionIndex, answer) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = answer;
      return updatedAnswers;
    });

    // Update the userAnswers property in the questions array
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].userAnswers.push(answer);
      return updatedQuestions;
    });
  };

  const handleViewAnswers = (questionIndex) => {
    setSelectedQuestion(questionIndex);
  };

  const handleHideAnswers = () => {
    setSelectedQuestion(null);
  };

  const handleSortByVotes = () => {
    const sortedQuestions = [...questions].sort((a, b) => b.votes - a.votes);
    setQuestions(sortedQuestions);
  };

  const handleSortByAnswers = () => {
    const sortedQuestions = [...questions].sort(
      (a, b) => b.userAnswers.length - a.userAnswers.length
    );
    setQuestions(sortedQuestions);
  };

  const handleUpvote = (questionIndex) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].votes += 1;
      return updatedQuestions;
    });
  };

  const handleDownvote = (questionIndex) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].votes -= 1;
      return updatedQuestions;
    });
  };

  const navigate = useNavigate();

  return (
    <div className="home-page">
      <header className="header">
        <h1 className="title">SwapSkill</h1>
        {loggedIn && (
          <div className="user-profile">
  
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        )}
      </header>

      <div className="welcome-message">
        {loggedIn && (
          <p>
            Welcome back! Explore the latest questions and contribute to the
            community.
          </p>
        )}
        {!loggedIn && (
          <p>
            Join SwapSkill to connect, learn, and share knowledge with others.
          </p>
        )}
      </div>

      <div className="question-list-header">
        <h2>Latest Questions</h2>
        <div className="sort-options">
          <button onClick={handleSortByVotes}>Sort by Votes</button>
          <button onClick={handleSortByAnswers}>Sort by Answers</button>
        </div>
      </div>

      <div className="question-list">
        {questions.map(
          ({ id, title, votes, answers: numAnswers, userAnswers }, index) => (
            <div key={id} className="question">
              <div className="votes">
                <button onClick={() => handleUpvote(index)}>Upvote</button>
                <span>{votes}</span>
                <button onClick={() => handleDownvote(index)}>Downvote</button>
              </div>
              <div className="question-details">
                <h3>{title}</h3>
                <p>{numAnswers} Answers</p>
                {selectedQuestion === index && (
                  <div className="answers-container">
                    <h4>Answers:</h4>
                    <ul>
                      {userAnswers.map((answer, answerIndex) => (
                        <li key={answerIndex}>{answer}</li>
                      ))}
                    </ul>
                    <button onClick={handleHideAnswers}>Hide Answers</button>
                  </div>
                )}
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
                <button
                  onClick={() => handleAnswerSubmit(index, answers[index])}
                >
                  Submit Answer
                </button>
                <button onClick={() => handleViewAnswers(index)}>
                  View Answers
                </button>
              </div>
            </div>
          )
        )}
      </div>

      <div className="cta-section">
        <h2>Ready to get started?</h2>
        <p>Ask your own question or help others by providing answers.</p>
        <button className="cta-btn" onClick={() => navigate("/ask-question")}>
          Ask a Question
        </button>
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
