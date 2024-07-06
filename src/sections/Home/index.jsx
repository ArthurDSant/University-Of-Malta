import { Link as ScrollLink } from 'react-scroll';
import './index.css'

const bigerthan = '>' ;

const index = () => {
  return (
    <div id='Home' className='background__image'>
      <div className='Home container'>
        <div className='home__left'>
          <h4>Home {bigerthan} University of Malta</h4>
          <h1>University of Malta</h1>
          <ScrollLink to='Home'>
            <button className='SeeAllCourses'> 
              See All Courses
            </button>
          </ScrollLink>
        </div>
        <div className='home__right'>
          <img src="/logo-border.png" />
        </div>
      </div>
    </div>
  )
}

export default index