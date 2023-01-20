import logo from '../assets/holberton_logo.jpg';
import './Login.css';
import year from '../utils/utils';
import React from 'react';



function Login() {
  return (
    <React.Fragment>
        <p>Login to access the full dashboard</p>
        <label id='email'>email</label>
        <input id='email'></input>
        <label id='password'>password</label>
        <input id='password'></input>
        <button>OK</button>
      </React.Fragment>
  )
}

export default Login;
