const { SELECT_COURSE, UNSELECT_COURSE } = require("./courseActionTypes")
const {bindActionCreators} = require('redux')

function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index: index
  }
}

function unselectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index: index
  }
}

boundSelectCourse = (dispatch) => {bindActionCreators(selectCourse, dispatch)}
boundUnselectCourse = (dispatch) => {bindActionCreators(unselectCourse, dispatch)}

module.exports = {selectCourse, unselectCourse, boundSelectCourse, boundUnselectCourse}


