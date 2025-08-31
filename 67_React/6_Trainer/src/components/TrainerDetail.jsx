import React from 'react';
import { useParams } from 'react-router-dom';
import TrainersMock from '../data/TrainersMock';

function TrainerDetail() {
  const { id } = useParams();
  const trainer = TrainersMock.find((t) => t.id === parseInt(id));

  if (!trainer) return <p>Trainer not found</p>;

  return (
    <div>
      <h3>Trainers Details</h3>
      <strong>{trainer.name} ({trainer.stream})</strong>
      <p>{trainer.email}</p>
      <p>{trainer.phone}</p>
      <ul>
        {trainer.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerDetail;
