import React from 'react';

const BlogDetails = ({ showBlogs }) => {
  const renderContent = showBlogs
    ? (
        <div className="column">
          <h2>Blog Details</h2>
          <div>
            <strong>React Learning</strong>
            <p><em>Stephen Biz</em></p>
            <p>Welcome to learning React!</p>
          </div>
          <div>
            <strong>Installation</strong>
            <p><em>Schwezdenier</em></p>
            <p>You can install React from npm.</p>
          </div>
        </div>
      )
    : null;

  return renderContent;
};

export default BlogDetails;
