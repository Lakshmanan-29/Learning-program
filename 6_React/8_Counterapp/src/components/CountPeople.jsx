import React, { Component } from 'react';
import './CountPeople.css';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0
    };
  }

  UpdateEntry = () => {
    this.setState((prevState) => ({
      entryCount: prevState.entryCount + 1
    }));
  };

  UpdateExit = () => {
    this.setState((prevState) => ({
      exitCount: prevState.exitCount + 1
    }));
  };

  render() {
    return (
      <div className="container">
        <h2>People Counter</h2>
        <div className="counts">
          <p>People Entered: {this.state.entryCount}</p>
          <p>People Exited: {this.state.exitCount}</p>
        </div>
        <div className="buttons">
          <button onClick={this.UpdateEntry}>Login</button>
          <button onClick={this.UpdateExit}>Exit</button>
        </div>
      </div>
    );
  }
}

export default CountPeople;
