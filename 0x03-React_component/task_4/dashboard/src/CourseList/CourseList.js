import './CourseList.css'
import CourseListRow from './CourseListRow'
import React from 'react';
import CourseShape from './CourseShape';
import propTypes from 'prop-types'

function CourseList({listCourses}) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" textSecondCell={null} isHeader={true}/>
        <CourseListRow textFirstCell="Course Name" textSecondCell='Credit' isHeader={true}/>
      </thead>
      <tbody>
        {listCourses.length === 0 && (
          <tr>
            <td>No course available yet</td>
          </tr>
        )}
        {
          listCourses.map(course => (
            <CourseListRow
                        key={course.id}
                        textFirstCell={course.name}
                        textSecondCell={course.credit} />
          ))
        }
      </tbody>
    </table>
  )
}

CourseList.propTypes = {
  listCourses: propTypes.array
}

CourseList.defaultProps = {
  listCourses: []
}

export default CourseList;
