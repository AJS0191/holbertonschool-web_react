import propTypes from "prop-types";
import React from "react";


const NotificationItemShape = 
propTypes.shape({
  id: propTypes.number.isRequired, html: propTypes.shape({__html: propTypes.string,}), type: propTypes.string.isRequired, value: propTypes.string
})

export default NotificationItemShape;
