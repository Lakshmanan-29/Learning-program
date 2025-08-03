import React, { useState } from 'react';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import { courses, books, blogs } from './data';
import './App.css';

function App() {
  // State to control which component is visible
  const [visibleSection, setVisibleSection] = useState('all');

  return (
    <div className="App">
      <header className="app-header">
        <h1>Blogger App</h1>
        <nav>
          {/* Buttons to update the state and conditionally render components */}
          <button onClick={() => setVisibleSection('all')}>Show All</button>
          <button onClick={() => setVisibleSection('courses')}>Courses</button>
          <button onClick={() => setVisibleSection('books')}>Books</button>
          <button onClick={() => setVisibleSection('blogs')}>Blogs</button>
        </nav>
      </header>
      
      {/* This container will hold our conditionally rendered components */}
      <div className="details-container">
        {/* Method 1: Logical '&&' Operator */}
        {(visibleSection === 'all' || visibleSection === 'courses') && <CourseDetails courses={courses} />}
        
        {(visibleSection === 'all' || visibleSection === 'books') && <BookDetails books={books} />}

        {(visibleSection === 'all' || visibleSection === 'blogs') && <BlogDetails blogs={blogs} />}
      </div>

      <div className="explanation">
        <h3>Other Ways to Implement Conditional Rendering [cite: 2, 21]</h3>
        <p><b>Ternary Operator:</b> Good for simple if/else. Example: `isLoggedIn ? <Welcome /> : <Login />`</p>
        <p><b>If/Else Statement:</b> Use a standard JavaScript if/else outside of the JSX to decide which component to render. This is useful for more complex logic.</p>
      </div>
    </div>
  );
}

export default App;