import React from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css'
import propTypes from 'prop-types'

export default NotificationList;



function closeButton() {
  console.log('Close button has been clicked')
}

function NotificationList({listNotification}) {
  return (
    <div className='Notifications'>
      <button style={{'marginLeft':'95%', 'ariaLabel': 'Close', 'onclick': 'closeButton()'}}>X</button>
      <p>
      Here is the list of notifications
      </p>
      <ul>
        {listNotification.length === 0 && (
          <li>No new notification for now</li>
        )}
        {
            listNotification.map(notification => (
              <NotificationItem 
                          key={notification.id}
                          type={notification.type}
                          value={notification.value}
                          html={notification.html} />
            ))
          }
      </ul>
    </div>
  )
}

NotificationList.propTypes = {
  listNotification: propTypes.array
}

NotificationList.defaultProps = {
  listNotification: []
}


