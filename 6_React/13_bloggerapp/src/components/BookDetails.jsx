import React from 'react';

function BookDetails({ books }) {
  return (
    <div>
      <h2>Book Details</h2>
      {/* This uses the .map() function to render a list [cite: 7] */}
      {books.map((book) => (
        // Using a key is essential for lists in React [cite: 5]
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;