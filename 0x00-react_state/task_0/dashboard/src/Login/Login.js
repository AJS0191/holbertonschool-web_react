import logo from '../assets/holberton_logo.jpg';
import year from '../utils/utils';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';




 
function Login() {
  const styles = StyleSheet.create({
    login: {
      '@media (max-width: 900px)': {
        display: 'flex',
        flexDirection: 'column'
      }
    }
  })
  return (
    <React.Fragment>
      <div className={`${css(styles.login)}`}>
        <p>Login to access the full dashboard</p>
        <label id='email'>email</label>
        <input id='email'></input>
        <label id='password'>password</label>
        <input id='password'></input>
        <button>OK</button>
      </div>
      </React.Fragment>
  )
}

export default Login;
