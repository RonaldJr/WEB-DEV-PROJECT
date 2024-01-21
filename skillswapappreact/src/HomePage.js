// HomePage.js
import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [newComment, setNewComment] = useState(''); // Define newComment state

  const handleAddPost = () => {
    if (newPost.trim() !== '') {
      setPosts((prevPosts) => [
        ...prevPosts,
        { id: Date.now(), content: newPost, comments: [] },
      ]);
      setNewPost('');
    }
  };

  const handleAddComment = (postId, comment) => { // Use comment instead of newComment
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
    setNewComment(''); // Reset the newComment state
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
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)} // Update newComment state
              />
              <button onClick={() => handleAddComment(post.id, newComment)}>
                Comment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
