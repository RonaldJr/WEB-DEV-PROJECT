// HomePage.js
import React, { useState } from 'react';

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
    <div>
      <h3>Home Page</h3>

      {/* Post Form */}
      <form onSubmit={handlePostSubmit}>
        <label>
          New Post:
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Post</button>
      </form>

      {/* Display Posts */}
      {posts.map((post, index) => (
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
          <ul>
            {post.comments.map((comment, commentIndex) => (
              <li key={commentIndex}>{comment}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
