import logo from '../assets/holberton_logo.jpg';
import './App.css';
import year from '../utils/utils';
import ReactDOM from 'react-dom';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label id='email'>email</label>
        <input id='email'></input>
        <label id='password'>password</label>
        <input id='password'></input>
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <p>{year} </p>
      </footer>
    </div>
  );
}

export default App;
