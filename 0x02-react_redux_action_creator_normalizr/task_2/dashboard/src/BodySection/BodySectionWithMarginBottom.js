import React from 'react';
import propTypes from 'prop-types';
import BodySection from './BodySection'
import {StyleSheet, css} from 'aphrodite'



class BodySectionWithMarginBottom extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const styles = StyleSheet.create({
      BodyWrap: {
        marginBottom: 40
      }
    })
    return (
      
    <div className={`${css(styles.BodyWrap)}`}>
      <BodySection {...this.props}></BodySection>
    </div>
)
  }
}

export default BodySectionWithMarginBottom;
