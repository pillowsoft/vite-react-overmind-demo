import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {useApp} from './overmind-store'

export function App() {
  const { state, actions } = useApp();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + Overmind!</p>
          <button onClick={() => actions.increaseCount()} style={{marginBottom: 10}}>
            Increase Count
          </button>
     
          <button onClick={() => actions.decreaseCount()}>
            Decrease Count
          </button>
        <h5>
            count is: {state.count}
        </h5>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, Vite and Overmind!!!!!
        </a>
      </header>
    </div>
  );
}
