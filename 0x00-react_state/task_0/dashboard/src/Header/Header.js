import logo from '../assets/holberton_logo.jpg';
import React from 'react';
import {StyleSheet, css} from 'aphrodite'

function Header(){
  const styles = StyleSheet.create({
    Logo: {
      height: '40vmin',
      pointerEvents: 'none',
    }
  })
  return (
    <React.Fragment>
        <img src={logo} className={`${css(styles.Logo)}`} alt="logo" />
        <h1>
          School dashboard
        </h1></React.Fragment>)
}

export default Header;
