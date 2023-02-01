const {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER} = require('./uiActionTypes')

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

boundLogIn = (dispatch) => {bindActionCreators(login, dispatch)}
boundLogout = (dispatch) => {bindActionCreators(logout, dispatch)}
boundDisplayNotificationDrawer = (dispatch) => {bindActionCreators(displayNotificationDrawer, dispatch)}
boundHideNotificationDrawer = (dispatch) => {bindActionCreators(hideNotificationDrawer, dispatch)}

module.exports = {login, logout, displayNotificationDrawer, hideNotificationDrawer, boundLogIn, boundDisplayNotificationDrawer, boundLogout, boundHideNotificationDrawer}
