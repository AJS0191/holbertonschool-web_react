import React from 'react';
import NotificationItem from './NotificationItem';
import propTypes from 'prop-types'
import {StyleSheet, css} from 'aphrodite'



class Notification extends React.Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.listNotification.length > this.props.listNotification.length) {
      return true
    }
    return false
  }
  render(){
    const styles = StyleSheet.create({
      notifB: {
        borderStyle:  'solid',
        borderColor: 'red',
        borderWidth: 2,
        padding: 4
      },
    })
  return (
    <div className={`${css(styles.notifB)}`}>
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
