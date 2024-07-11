import './index.css'

const index = () => {
  return (
    <div id='ITICoursesDetails' className='center'>
      <h2>ITI Course Details</h2>
      <table>
        <tr>
          <th>Particulars</th>
          <th>Details</th>
        </tr>

        <tr>
          <td>Course Name</td>
          <td>ITI Course</td>
        </tr>
        <tr>
          <td>ITI Full Form</td>
          <td>Industrial Training Institute</td>
        </tr>
        <tr>
          <td>Duration</td>
          <td>1 Year</td>
        </tr>
        <tr>
          <td>Admission Process</td>
          <td>Online</td>
        </tr>
        <tr>
          <td>Eligibility</td>
          <td>ITI + 12th Pass</td>
        </tr>
        <tr>
          <td>Fee Structure</td>
          <td>$ 6,000</td>
        </tr>
      </table>
    </div>
  )
}

export default index