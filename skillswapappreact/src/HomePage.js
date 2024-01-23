// HomePage.js
import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [newCommentState, setNewCommentState] = useState({}); // Separate state for comments

  const handleAddPost = () => {
    if (newPost.trim() !== '') {
      setPosts((prevPosts) => [
        ...prevPosts,
        { id: Date.now(), content: newPost, comments: [] },
      ]);
      setNewPost('');
    }
  };

  const handleAddComment = (postId, comment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
    setNewCommentState((prev) => ({ ...prev, [postId]: '' })); // Reset the newComment state for the specific post
  };

  return (
    <div className="swapskill-container">
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
                value={newCommentState[post.id] || ''}
                onChange={(e) =>
                  setNewCommentState((prev) => ({
                    ...prev,
                    [post.id]: e.target.value,
                  }))
                }
              />
              <button onClick={() => handleAddComment(post.id, newCommentState[post.id])}>
                
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
