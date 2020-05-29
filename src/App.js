import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Howdy y'all!
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=j5a0jTc9S10&list=PLVbxVQf7e2KRz1J34jFf7jDJFDT9lvnQ9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to learn React
        </a>
      </header>
    </div>
  );
}

export default App;
