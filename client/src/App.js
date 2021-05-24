import React, { useState } from 'react';
import logo from './logo.svg'
import './App.css';
const axios = require('axios');

const App = () =>  {
  const [apiRes, setApiRes] = useState('')
  axios.get('http://localhost:9000/test').then((result) => {
      setApiRes(result.data)
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>{apiRes}</code> and save to reload.
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

export default App;
