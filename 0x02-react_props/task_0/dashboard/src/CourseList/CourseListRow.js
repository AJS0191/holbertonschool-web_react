import React from 'react';


function CourseListRow(isHeader=false, textFirstCell, textSecondCell=null) {
    if (isHeader) {
      if (textSecondCell == null) {
        return (
          <tr>
            <th>{textFirstCell}</th>
          </tr>
        )
      }
      return (
      <tr>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
      )
    }
    else {
      <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    }
}

export default CourseListRow;
