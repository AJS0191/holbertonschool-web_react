import React from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css'
import propTypes from 'prop-types'



class Notification extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
  return (
    <div className='Notifications'>
      <button style={{'marginLeft':'95%', 'ariaLabel': 'Close', 'onclick': 'closeButton()'}}>X</button>
      <p>
      Here is the list of notifications
      </p>
      <ul>
        {this.props.listNotification.length === 0 && (
          <li>No new notification for now</li>
        )}
        {
            this.props.listNotification.map(notification => (
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


  
}

function markAsRead(id) {
  console.log(`Notification ${id} has been marked as read`)
}
Notification.propTypes = {
  listNotification: propTypes.array,
  markAsRead: propTypes.func,

}

Notification.defaultProps = {
  listNotification: [],
  markAsRead: () => {},

}

export {Notification,  markAsRead};
