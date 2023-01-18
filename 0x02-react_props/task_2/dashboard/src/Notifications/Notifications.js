import React from 'react';
import NotificationItem from './NotificationItem';
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
        <NotificationItem type='normal' value='New course available'/>
        <NotificationItem type='urgent' value='New resume available'/>
        <NotificationItem type='urgent' html={{ __html: getLatestNotification() }}/>
      </ul>
    </div>
  )
}

function getLatestNotification() {
  return (
    '<strong>Urgent requirement</strong> - complete by EOD'
  )
}
