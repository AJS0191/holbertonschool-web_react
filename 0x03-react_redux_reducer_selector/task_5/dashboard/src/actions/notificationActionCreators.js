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

boundMarkAsRead = (dispatch) => {bindActionCreators(markAsRead, dispatch)}
boundSetTypeFilter = (dispatch) => {bindActionCreators(setTypeFilter, dispatch)}

module.exports = {markAsRead, setTypeFilter, boundMarkAsRead, boundSetTypeFilter}

console.log(setTypeFilter(NotificationTypeFilters.DEFAULT))
