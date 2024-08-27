import React from 'react';
import { useSelector } from 'react-redux';

const PostsList = () => {
  const { posts, status, error } = useSelector((state) => state.reddit);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            {post.thumbnail && post.thumbnail !== 'self' && (
              <img src={post.thumbnail} alt={post.title} />
            )}
            <p>{post.selftext}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;