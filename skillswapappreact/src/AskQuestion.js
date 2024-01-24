import React, { useState } from "react";
import "./AskQuestion.css";
import { useNavigate } from "react-router-dom";

const AskQuestion = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [newCommentState, setNewCommentState] = useState({});
  const navigate = useNavigate();

  const handleAddPost = () => {
    if (newPost.trim() !== "") {
      setPosts((prevPosts) => [
        ...prevPosts,
        { id: Date.now(), content: newPost, comments: [] },
      ]);
      setNewPost("");
    }
  };

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

  const handleLogout = () => {
    // Add your logout logic here
    navigate("/");
  };

  return (
    <div className="ask-question">
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
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
