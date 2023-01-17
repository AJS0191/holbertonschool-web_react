import React from 'react';
import './Notifications.css'


export default NotificationList;

function closeButton() {
  console.log('Close button has been clicked')
}

function NotificationList() {
  return (
    <div className='Notifications'>
      <button style={{'marginLeft':'95%', 'ariaLabel': 'Close', 'onclick': 'closeButton()'}}>X</button>
      <p>
      Here is the list of notifications
      </p>
      <ul>
        <li className='normal'>New course available</li>
        <li className='urgent'>New resume available</li>
        <li className='urgent' dangerouslySetInnerHTML={{__html:getLatestNotification()}}></li>
      </ul>
    </div>
  )
}

function getLatestNotification() {
  return (
    '<strong>Urgent requirement</strong> - complete by EOD'
  )
}
