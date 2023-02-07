const {login, logout, displayNotificationDrawer, hideNotificationDrawer} = require('./uiActionCreators');
const { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } = require('./uiActionTypes');


describe('login', () => {
  it('Should return given action', () => {
    expect(login('a', 'b').toEqual({ type: LOGIN, user: {'a':'b'} }))
  })
});

describe('logout', () => {
  it('Should return given action', () => {
    expect(logout.toEqual({ type: LOGOUT}))
  })
});

describe('displayNotificationDrawer', () => {
  it('Should return given action', () => {
    expect(displayNotificationDrawer.toEqual({ type: DISPLAY_NOTIFICATION_DRAWER}))
  })
});

describe('hideNotificationDrawer', () => {
  it('Should return given action', () => {
    expect(hideNotificationDrawer.toEqual({ type: HIDE_NOTIFICATION_DRAWER}))
  })
});
