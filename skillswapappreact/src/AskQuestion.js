import React, { useState } from "react";
import "./AskQuestion.css";
import { useNavigate } from "react-router-dom";

const AskQuestion = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [newCommentState, setNewCommentState] = useState({});

  const submitQuestionToServer = async (question) => {
    // Implement logic to submit the question (e.g., using an API)
    // Return a promise that resolves with the response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ status: "success" });
      }, 2000);
    });
  const handleAddPost = () => {
    if (newPost.trim() !== "") {
      setPosts((prevPosts) => [
        ...prevPosts,
        { id: Date.now(), content: newPost, comments: [] },
      ]);
      setNewPost("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Implement logic to submit the question (e.g., using an API)
    const response = await submitQuestionToServer({ title, content });

    // Check if the question was successfully submitted
    if (response.status === "success") {
      // Redirect to the homepage
      navigate("/");
    } else {
      // Handle error scenario
      console.error("Failed to submit question.");
  const handleAddComment = (postId, comment) => {
    if (comment.trim() !== "") {
      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comments: [...post.comments, comment],
            };
          }
          return post;
        })
      );
      setNewCommentState((prev) => ({ ...prev, [postId]: "" }));
    }
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
      <div className="post-form">
        <textarea
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={handleAddPost}>Post</button>
      </div>

      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <p className="post-content">{post.content}</p>
            <ul className="comment-list">
              {post.comments.map((comment, index) => (
                <li key={index} className="comment">
                  {comment}
                </li>
              ))}
            </ul>
            <div className="comment-form">
              <input
                type="text"
                placeholder="Write a comment..."
                value={newCommentState[post.id] || ""}
                onChange={(e) =>
                  setNewCommentState((prev) => ({
                    ...prev,
                    [post.id]: e.target.value,
                  }))
                }
              />
              <button
                onClick={() =>
                  handleAddComment(post.id, newCommentState[post.id])
                }
              >
                Comment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AskQuestion;
