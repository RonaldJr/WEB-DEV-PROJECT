import React, { useState } from 'react';
import './AskQuestion.css';

const AskQuestion = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement logic to submit the question
    console.log(`Title: ${title}\nContent: ${content}`);
  
  };

  return (
    <div className="ask-question">
      <h2>Ask a Question</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AskQuestion;
