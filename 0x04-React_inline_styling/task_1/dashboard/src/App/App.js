import logo from '../assets/holberton_logo.jpg';
import year from '../utils/utils';
import React from 'react';
import getLatestNotification from "../Notifications/Notificationget"
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList'
import Notifications from '../Notifications/Notifications'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import BodySection from '../BodySection/BodySection';
import {StyleSheet, css} from 'aphrodite'


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
  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'h'){
        alert('Logging you out');
        this.props.logOut();
      }    })
  };
  constructor(props) {
    super(props);
  }

  
render() {
  const styles = StyleSheet.create({
    App:{
      textAlign: 'center'
    },
    footer: {
      fontStyle: 'italic',
      color: 'black',
    },
    body: {
      color: 'black',
      marginTop: 40,
      minHeight: 400,
      borderBottom: 'solid 2px red',
    },
    AppH: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: 'red',
    borderBottom: 'solid 2px red',
    }
  })
  return (
    <React.Fragment>
    <div className={`${css(styles.App)}`}>
      <header className={`${css(styles.AppH)}`}>
        <Header/>
      </header>
      <body className={`${css(styles.body)}`}>
      {this.props.isLoggedin ? <BodySectionWithMarginBottom title='Course list'><CourseList listCourses={listCourses}/></BodySectionWithMarginBottom> : <BodySectionWithMarginBottom title='Log in to continue'><Login /></BodySectionWithMarginBottom>}
      <BodySection title='News from the school'>
        <p>Testing testing random strings here. They are coming for yOUUUU!</p>
      </BodySection>
      </body>
      <footer className={`${css(styles.footer)}`}>
        <Footer/>
      </footer>
    </div>
    </React.Fragment>
  )};
}

App.propTypes = {
  isLoggedin: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedin: false,
  logOut:  () => void 0
}

export {App, listNotification};
