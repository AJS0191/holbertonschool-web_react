import logo from '../assets/holberton_logo.jpg';
import './App.css';
import year from '../utils/utils';
import React from 'react';
import getLatestNotification from "../Notifications/Notificationget"
import Header from '../Header/header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList'
import Notifications from '../Notifications/Notifications'


const listCourses = [
  {id:1, name:'ES6', credit: 60},
  {id:2, name:'Webpack', credit: 20},
  {id:3, name:'React', credit: 40},
];

const listNotification = [
  {id: 1, type: 'default', value: 'New course Available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
	{id: 3, type: 'urgent', html: {__html: getLatestNotification()}},
]

class App extends React.Component {
  constructor(props) {
    super(props);
  }
render() {
  return (
    <React.Fragment>
    <Notifications listNotification={listNotification}/>
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <body className="App-body">
      {this.props.isLoggedin ? <CourseList listCourses={listCourses}/> : <Login />}
      </body>
      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
    </React.Fragment>
  )};
}

App.propTypes = {
  isLoggedin: PropTypes.bool
}

App.defaultProps = {
  isLoggedin: false
}

export default App;
