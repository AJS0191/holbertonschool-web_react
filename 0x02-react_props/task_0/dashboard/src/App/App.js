import logo from '../assets/holberton_logo.jpg';
import './App.css';
import year from '../utils/utils';
import React from 'react';
import Notifications from "../Notifications/Notifications"
import Header from '../Header/header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList'



function App(isLoggedin = true) {

  if (isLoggedin == false){
    let Body = Login;
  } else {
    let Body = CourseList;
  }
  return (
    <React.Fragment>
    <Notifications />
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <body className="App-body">
        
      </body>
      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
    </React.Fragment>
  );
}

export default App;
