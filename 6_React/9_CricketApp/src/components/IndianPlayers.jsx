import React from 'react';

const IndianPlayers = () => {
  // Odd and Even team players
  const oddTeam = ['Mr. Virat', 'Mr. Rohit', 'Mr. Dhoni', 'Mr. Jadeja', 'Mr. Shami'];
  const evenTeam = ['Mr. Raina', 'Mr. Gill', 'Mr. Rahul', 'Mr. Iyer', 'Mr. Ashwin'];

  // Destructuring example
  const [odd1, odd2, ...restOdd] = oddTeam;
  const [even1, even2, ...restEven] = evenTeam;

  // T20 + Ranji Players merging
  const T20Players = ['Mr. Virat', 'Mr. Rohit', 'Mr. Pant'];
  const RanjiPlayers = ['Mr. Pujara', 'Mr. Rahane'];
  const mergedPlayers = [...T20Players, ...RanjiPlayers]; // ES6 spread

  return (
    <div style={{ padding: '20px' }}>
      <h2>Odd Team Players (Destructured)</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        {restOdd.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <hr />

      <h2>Even Team Players (Destructured)</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        {restEven.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <hr />

      <h2>Merged T20 and Ranji Trophy Players</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
