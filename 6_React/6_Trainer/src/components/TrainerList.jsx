import React from 'react';
import { Link } from 'react-router-dom';

function TrainerList({ trainers }) {
  return (
    <div>
      <h3>Trainers List</h3>
      <ul>
        {trainers.map((trainer) => (
          <li key={trainer.id}>
            <Link to={`/trainer/${trainer.id}`}>{trainer.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerList;
