let notifList = require('../../../../notifications.json')
const {normalize, schema, idAttribute} = require('normalizr')

function getAllNotificationsByUser(userId) {
  let notifications = [];
  for (notif in normalizedData.entities) {
    console.log(notif)
    if (notif.id === userId) {
      notifications.push(notif.context)
    }
  }
  return notifications;
}

const user = new schema.Entity("users");
const message = new schema.Entity('messages', {
  idAttribute: 'guid'
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

const normalizedData = normalize(notifList, [notification])

module.exports = [normalizedData, getAllNotificationsByUser]

console.log(getAllNotificationsByUser('5debd764a7c57c7839d722e9'))
