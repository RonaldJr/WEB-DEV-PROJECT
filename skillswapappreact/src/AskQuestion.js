import React, { useState } from "react";
import "./AskQuestion.css";
import { useLocation } from "react-router-dom";

const AskQuestion = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Implement logic to submit the question (e.g., using an API)
    const response = await submitQuestionToServer({ title, content });

    // Check if the question was successfully submitted
    if (response.status === "success") {
      // Redirect to the homepage
      location.push("/");
    } else {
      // Handle error scenario
      console.error("Failed to submit question.");
    }
  };

  const submitQuestionToServer = async (questionData) => {
    return { status: "success" };
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
