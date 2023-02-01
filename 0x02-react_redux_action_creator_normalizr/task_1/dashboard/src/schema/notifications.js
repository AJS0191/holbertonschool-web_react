let notifList = require('../../../../notifications.json')
const {normalize, schema, idAttribute} = require('normalizr')

function getAllNotificationsByUser(userId) {
  let matchList = []
  for (noti in notifList) {
    if (userId === noti.id) {
      matchList.push(noti)
    }
  }
  return matchList
}

const user = new schema.Entity("users");
const message = new schema.Entity('messages', {
  idAttribute: 'guid'
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: [message]
});

const normalizedData = normalize(notifList, [notification])

module.exports = [normalizedData, getAllNotificationsByUser]
