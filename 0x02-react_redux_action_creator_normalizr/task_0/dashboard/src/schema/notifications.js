const notifList = require('../../../../notifications.json')

export function getAllNotificationsByUser(userId) {
  const  matchList = []
  for (notification in notifList) {
    if (userId === notification.author.id) {
      matchList.push(notification)
    }
  }
  return matchList
}


