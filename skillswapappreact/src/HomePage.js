// HomePage.js
import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handleAddPost = () => {
    if (newPost.trim() !== '') {
      setPosts((prevPosts) => [
        ...prevPosts,
        { id: Date.now(), content: newPost, comments: [] },
      ]);
      setNewPost('');
    }
  };

  const handleAddComment = (postId, newComment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
  };

  return (
    <div className="facebook-container">
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
                <li key={index} className="comment">{comment}</li>
              ))}
            </ul>
            <div className="comment-form">
              <input
                type="text"
                placeholder="Write a comment..."
                onChange={(e) => handleAddComment(post.id, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
