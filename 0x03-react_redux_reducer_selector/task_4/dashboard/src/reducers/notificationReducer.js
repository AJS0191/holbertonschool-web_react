const { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATION_SUCCESS} = require('../actions/notificationActionTypes');
const {Map} = require('immutable')

const notif0 = Map({
  notifications: [],
  filter: DEFAULT
});

function notifReducer(action) {
  let notifR = []
  switch(action.type){
    case FETCH_NOTIFICATION_SUCCESS:
      for (notif in action.data) {
        holder = notif.set(isRead, false)
      }
      holder = notificationNormalizer(holder);
      notifR.push(holder)
      return {
        filter: 'DEFAULT',
        notifications: notifR
      }
    case MARK_AS_READ:
      for (notif in action.data) {
        if (notif.id === action.index){
          holder = notif.set(isRead, true)
          notifR.push(holder)
        } else {
          notifR.push(notif)
        }
      }
      return {
        filter: 'DEFAULT',
        notifications: notifR
      }
    case SET_TYPE_FILTER:
      return notif0.set(filter, action.filter)
    default:
      return notif0
  }
}
