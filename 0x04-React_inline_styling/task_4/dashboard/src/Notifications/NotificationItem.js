import React from 'react';
import { markAsRead } from './Notifications';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
    }
  render(){
    const styles = StyleSheet.create({
      notifU: {
        color: 'red',
        '@media (max-width: 900px)': {
          width: '100%',
          borderBottomStyle: 'solid',
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          padding: '10px 8px',
          listStyleType: 'none',
          marginLeft: -40
        }
      },
      notifN: {
        color: 'blue',
        '@media (max-width: 900px)': {
          width: '100%',
          borderBottomStyle: 'solid',
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          padding: '10px 8px',
          listStyleType: 'none',
          marginLeft: -40
        }
      },
    })
  if (this.props.value) {
    if (this.props.type == 'urgent') return(<li  className={`${css(styles.notifU)}`} data-notification-type={this.props.type} onClick={() => {markAsRead(0)}}>{this.props.value}</li>)
    else
      return(<li  className={`${css(styles.notifN)}`}  data-notification-type={this.props.type} onClick={() => {markAsRead(0)}}>{this.props.value}</li>)}
  if (this.props.html) return(<li className={`${css(styles.notifU)}`} data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={() => {markAsRead(1)}}></li>)
  return (<li className={`${css(styles.notifN)}`} data-notification-type={this.props.type} onClick={() => {markAsRead(2)}}></li>)
};
}

NotificationItem.propTypes = {
  type: propTypes.string,
  value: propTypes.string,
  html: propTypes.shape({__html: propTypes.string,}),
}

NotificationItem.defaultProps = {
  type: '',
  value: '',
  html: {},
}

export default NotificationItem;
