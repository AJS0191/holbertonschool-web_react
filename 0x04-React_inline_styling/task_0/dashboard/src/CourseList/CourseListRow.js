import React from 'react';
import propTypes from 'prop-types';


function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    return(
      <tr style={{ backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab' }}>
        {isHeader && textSecondCell == null && (
          <>
          <th id="main-line" colSpan='2'>{textFirstCell}</th>
          </>
        )}
        {isHeader && textSecondCell !== null &&(
<>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
</>
        )}
        {!isHeader && (
<>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
</>
        )}
      </tr>
    )
  
  
  
}

CourseListRow.propTypes = {
  textFirstCell: propTypes.string.isRequired,
  textSecondCell: propTypes.oneOfType([propTypes.string, propTypes.number]),
  isHeader: propTypes.bool
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
}
export default CourseListRow;
