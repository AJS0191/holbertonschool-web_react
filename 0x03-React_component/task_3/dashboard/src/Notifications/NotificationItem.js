import React from 'react';
import './Notifications.css'
import { markAsRead } from './Notifications';

const NotificationItem = ({type, value, html, key}) => {
  if (value) return(<li data-notification-type={type} onClick={() => {markAsRead(0)}}>{value}</li>)
  if (html) return(<li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => {markAsRead(1)}}></li>)
  return (<li data-notification-type={type} onClick={() => {markAsRead(2)}}></li>)
};

export default NotificationItem;
