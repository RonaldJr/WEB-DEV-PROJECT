// HomePage.js
import React, { useState } from 'react';
import './HomePage.css'; // Import your stylesheet for styling

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim() !== '') {
      setPosts([...posts, { text: newPost, comments: [] }]);
      setNewPost('');
    }
  };

  const handleCommentSubmit = (postId, commentText) => {
    const updatedPosts = posts.map((post, index) => {
      if (index === postId) {
        return { ...post, comments: [...post.comments, commentText] };
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Awesome Blog!</h1>

      {/* Post Form */}
      <form onSubmit={handlePostSubmit}>
        <label>
          Share your thoughts:
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
        </label>
        <button type="submit">Post</button>
      </form>
      
      {/* Display Posts */}
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className="post">
            <p>{post.text}</p>

            {/* Comment Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const commentText = e.target.elements.comment.value;
                handleCommentSubmit(index, commentText);
              }}
            >
              <label>
                Add Comment:
                <input type="text" name="comment" />
              </label>
              <button type="submit">Comment</button>
            </form>

            {/* Display Comments */}
            {post.comments.length > 0 && (
              <ul>
                {post.comments.map((comment, commentIndex) => (
                  <li key={commentIndex}>{comment}</li>
                ))}
              </ul>
            )}
            {post.comments.length === 0 && <p>No comments yet.</p>}
          </div>
        ))
      ) : (
        <p>No posts available. Be the first to share!</p>
      )}
    </div>
  );
};

export default HomePage;
