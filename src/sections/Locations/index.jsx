import { ImLocation } from "react-icons/im"; 

import './index.css'

const index = () => {
  return (
    <div id='Locations' className='center'>
      <div className='Locations container'>
        <h2>Locations</h2>
        <img src="/world-map.png" />

        <div className='Locations__blocks container'>

          <div className='Location'>
            <h2>Malta</h2>
            <div className="Location__second">
              <ImLocation className='location__mark' />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ut corrupti!
              </p>
            </div>
          </div>
          <div className='Location'>
            <h2>Malta</h2>
            <div className="Location__second">
              <ImLocation className='location__mark' />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ut corrupti!
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default index