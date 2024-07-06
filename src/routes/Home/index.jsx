import Home from '../../sections/Home'
import Introduction from '../../sections/Introduction'
import TableOfContent from '../../sections/Table-Of-Content'
import ITICoursesDetails from '../../sections/ITI-Courses-Details'
import WhatAreITICourses from '../../sections/What-Are-ITI-Courses'
import BestITICourse from '../../sections/Best-ITI-Course'
import Conclusion from '../../sections/Conclusion'
import Locations from '../../sections/Locations'
import Form from '../../sections/Form'

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