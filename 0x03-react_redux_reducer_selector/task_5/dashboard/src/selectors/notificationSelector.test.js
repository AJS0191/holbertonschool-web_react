const {filterTypeSelected, getNotifications, getUnreadNotifications} = require('notificationSelector');

describe('filterTypeSelected', () => {
  it('filters by type', () => {
    expect(notificationSelector(state).toEqual(
      'DEFAULT'
    )
    )})});

describe('getNotifications', () => {
  it('filters by type', () => {
    expect(getNotifications(state).toEqual(
      []
    )
    )})});

describe('notificationSelector', () => {
  it('filters by type', () => {
    expect(getUnreadNotifications(state).toEqual(
      []
    )
    )})});
