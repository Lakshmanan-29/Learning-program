import React from 'react';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import './index.css';

function App() {
  const showCourses = true;
  const showBooks = true;
  const showBlogs = true;

  return (
    <div className="container">
      <CourseDetails show={showCourses} />
      <BookDetails visible={showBooks} />
      <BlogDetails showBlogs={showBlogs} />
    </div>
  );
}

export default App;
