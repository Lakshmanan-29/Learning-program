import React from 'react';

const BookDetails = ({ visible }) => (
  visible && (
    <div className="column">
      <h2>Book Details</h2>
      <div>
        <strong>Master React</strong>
        <p>670</p>
      </div>
      <div>
        <strong>Deep Dive into Angular 11</strong>
        <p>800</p>
      </div>
      <div>
        <strong>Mongo Essentials</strong>
        <p>450</p>
      </div>
    </div>
  )
);

export default BookDetails;
