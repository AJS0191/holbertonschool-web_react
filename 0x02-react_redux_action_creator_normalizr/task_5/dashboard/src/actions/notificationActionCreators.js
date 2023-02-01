const { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters} = require('./notificationActionTypes')

function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index: index
  }
}

function setTypeFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter: filter
  }
}

module.exports = {markAsRead, setTypeFilter}

console.log(setTypeFilter(NotificationTypeFilters.DEFAULT))
