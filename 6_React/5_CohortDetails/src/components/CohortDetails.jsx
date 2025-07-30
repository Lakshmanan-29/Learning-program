import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ name, date, status, coach, trainer }) {
  const headingStyle = {
    color: status === 'Ongoing' ? 'green' : 'blue',
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{name}</h3>
      <dl>
        <dt>Started On</dt>
        <dd>{date}</dd>
        <dt>Current Status</dt>
        <dd>{status}</dd>
        <dt>Coach</dt>
        <dd>{coach}</dd>
        <dt>Trainer</dt>
        <dd>{trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
