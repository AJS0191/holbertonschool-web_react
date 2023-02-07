const {markAsRead, setTypeFilter} = require('./notificationActionCreators')
const { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters} = require('./notificationActionTypes')

describe('markAsRead', () => {
  it('Should return given action', () => {
    expect(markAsRead(1).toEqual({ type: MARK_AS_READ, index: 1}))
  })
});

describe('setTypeFilter', () => {
  it('Should return given action', () => {
    expect(setTypeFilter(NotificationTypeFilters.DEFAULT).toEqual({ type: SET_TYPE_FILTER, filter: 'DEFAULT'}))
  })
});
