import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (name.length < 5) {
      alert('Name must be at least 5 characters long!');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      alert('Email must contain "@" and "."');
      return;
    }
    if (password.length < 8) {
      alert('Password must be 8 characters long!');
      return;
    }

    alert(`Thank you ${name}, your registration is complete!`);
    // Optionally reset form
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2 style={{ color: 'red', fontWeight: 'bold' }}>Register Here!!!</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '10px' }}>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div style={{ margin: '10px' }}>
          <label>Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ margin: '10px' }}>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
