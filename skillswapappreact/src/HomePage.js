// HomePage.js
import React, { useState } from 'react';
import './HomePage.css';

const HomePage = ({ handleLogout, loggedIn }) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim() !== '') {
      setPosts([...posts, { text: newPost, comments: [] }]);
      setNewPost('');
    }
  };

  const handleCommentSubmit = (postIndex, commentText) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      updatedPosts[postIndex].comments.push(commentText);
      return updatedPosts;
    });
  };

  return (
    <div className="home-page">
      <header className="header">
        <h1 className="title">Your Feed</h1>
        {loggedIn && <button onClick={handleLogout} className="logout-btn">Logout</button>}
      </header>

      <div className="post-section">
        <form onSubmit={handlePostSubmit} className="post-form">
          <label>
            Share your experience:
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
          </label>
          <button type="submit">Post</button>
        </form>
      </div>

      <div className="post-list">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <p>{post.text}</p>

            <div className="comment-section">
              <label>
                Add your comment:
                <input
                  type="text"
                  name={`comment-${index}`}
                  placeholder="Type your comment..."
                />
              </label>
              <button
                type="button"
                onClick={() => {
                  const commentText = document.getElementsByName(`comment-${index}`)[0].value;
                  handleCommentSubmit(index, commentText);
                }}
              >
                Comment
              </button>
            </div>

            <div className="comment-list">
              {post.comments.length > 0 ? (
                <ul>
                  {post.comments.map((comment, commentIndex) => (
                    <li key={commentIndex} className="comment">
                      {comment}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No comments yet.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
