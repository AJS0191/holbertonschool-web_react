const {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_FAILURE, LOGIN_SUCCESS} = require('./uiActionTypes')

function login(email, password) {
  return {
    type: LOGIN,
    user: {email, password}
  }
}

function logout() {
  return {
    type: LOGOUT
  }
}

function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  }
}

function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  }
}

function loginFailure() {
  return {
    type: LOGIN_FAILURE
  }
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  }
}

function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('http://localhost:3000/login-success.json')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then((data) => {
        dispatch(loginSuccess(data));
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };}

boundLogIn = (dispatch) => {bindActionCreators(login, dispatch)}
boundLogout = (dispatch) => {bindActionCreators(logout, dispatch)}
boundDisplayNotificationDrawer = (dispatch) => {bindActionCreators(displayNotificationDrawer, dispatch)}
boundHideNotificationDrawer = (dispatch) => {bindActionCreators(hideNotificationDrawer, dispatch)}
boundLoginFail = (dispatch) => {bindActionCreators(loginFailure, dispatch)}
boundLoginSuccess = (dispatch) => {bindActionCreators(loginSuccess, dispatch)}

module.exports = {login, logout, displayNotificationDrawer, hideNotificationDrawer, boundLogIn, boundDisplayNotificationDrawer, boundLogout, boundHideNotificationDrawer}
