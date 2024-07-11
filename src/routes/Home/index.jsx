import Home from '../../scenes/Home'
import Introduction from '../../scenes/Introduction'
import TableOfContent from '../../scenes/Table-Of-Content'
import ITICoursesDetails from '../../scenes/ITI-Courses-Details'
import WhatAreITICourses from '../../scenes/What-Are-ITI-Courses'
import BestITICourse from '../../scenes/Best-ITI-Course'
import Conclusion from '../../scenes/Conclusion'
import Locations from '../../scenes/Locations'
// import Form from '../../scenes/Form'

const index = () => {
  
  return (
    <div>
      <Home />
      <Introduction />
      <BestITICourse />
      <TableOfContent />
      <ITICoursesDetails />
      <WhatAreITICourses />
      <Conclusion />
      <Locations />
      {/* <Form /> */}
    </div>
  )
}

export default index