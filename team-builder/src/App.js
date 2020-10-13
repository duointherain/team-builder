import React from 'react';
import logo from './logo.svg';
import './App.css';
import Teammember from "./Teammember";
import FriendForm from "./FriendForm";
import axios from "../axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="www.duointherain.com"
          target="_blank"
          
        >
          Visit my site!
        </a>
      </header>
    </div>
  );
}

export default App;
