const {getIn, Map} = require('immutable')

function filterTypeSelected(state) {
  return getIn(state, filter)
}

function getNotifications(state) {
  return getIn(state, notifications)
}

function getUnreadNotifications(state) {
  return getNotifications(state).filter((state) => getIn(state, markAsRead) === 'unread')
}

module.exports = {filterTypeSelected, getNotifications, getUnreadNotifications}
