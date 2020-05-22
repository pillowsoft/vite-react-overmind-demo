import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {useApp} from './overmind-store';


import styled from 'styled-components';


// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: red;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export function App() {
  const { state, actions } = useApp();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title>Hello!</Title>
        <Title>Hello Vite + React + Overmind + Styled-Components</Title>
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
          Learn React!!!!!
        </a>
      </header>
    </div>
  );
}
