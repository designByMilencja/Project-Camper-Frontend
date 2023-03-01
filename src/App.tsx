import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TestInterface} from 'types';

export function App() {
  const foobar:TestInterface = {
    x: 1,
  }
  console.log(foobar)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


