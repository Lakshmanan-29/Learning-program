// filepath: d:\Digital Nurture\6_React\13_bloggerapp\src\components\CourseDetails.jsx
function CourseDetails({ courses }) {
  if (!courses || courses.length === 0) {
    return <p>No courses available.</p>;
  }
  return (
    <div>
      <h2>Course Details</h2>
      {courses.map(course => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}
// ...existing code...
