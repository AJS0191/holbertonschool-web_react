import logo from '../assets/holberton_logo.jpg';
import './Header.css';
import React from 'react';

function Header(){
  return (
    <React.Fragment>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1></React.Fragment>)
}

export default Header;
