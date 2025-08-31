import React, { useState } from 'react';

function ComplaintRegister() {
  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionId = Math.floor(Math.random() * 1000);

    alert(`Thanks ${name}
Your Complaint was Submitted.
Transaction ID is: ${transactionId}`);
    
    setName('');
    setComplaint('');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: 'red', fontWeight: 'bold' }}>Register your complaints here!!!</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '10px' }}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ padding: '5px', borderRadius: '4px' }}
          />
        </div>
        <div style={{ margin: '10px' }}>
          <label htmlFor="complaint">Complaint: </label>
          <textarea
            id="complaint"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            required
            rows={4}
            cols={30}
            style={{ padding: '5px', borderRadius: '4px' }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComplaintRegister;
