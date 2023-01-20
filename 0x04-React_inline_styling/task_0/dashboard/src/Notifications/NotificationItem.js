import React from 'react';
import './Notifications.css'
import { markAsRead } from './Notifications';
import propTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
    }
  render(){
  if (this.props.value) return(<li data-notification-type={this.props.type} onClick={() => {markAsRead(0)}}>{this.props.value}</li>)
  if (this.props.html) return(<li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={() => {markAsRead(1)}}></li>)
  return (<li data-notification-type={this.props.type} onClick={() => {markAsRead(2)}}></li>)
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
