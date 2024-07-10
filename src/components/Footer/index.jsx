import { FaYoutubeSquare } from "react-icons/fa"; 
import { BsLinkedin } from "react-icons/bs"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { FaFacebookF } from "react-icons/fa"; 
import './index.css'

const index = () => {
  return (
    <div>
      <div id='Footer__Black'>
        <div className='center'>
          <div className='Footer__1 container'>
            <div className='Footer__1__content'>
              <h2>Sing up to our Newsletter to receive awesokme content in your inbox, every month</h2>
              <div>
                <input type="email" placeholder='Email ID' />
                <button>Sing up</button>
              </div>
            </div>
            <div className='Footer__1__text'>
              <p>We don't span!</p>
              <p>Read our privacy policy for more info.</p>
            </div>
          </div> 
        </div>     
      </div>

        <div id="Footer__Blue" className='center'>
          <div className='Footer__2 container'>
            <div className='FooterBlue__2__grid'>

              <div className='Footer__grid__1'>
                <h2>Study Via App</h2>
                <p>Get link in sms our whats app the mycareer app.</p>
                <p>Enter Mobile Number</p>
                <input type="text" placeholder='+91 ' />
                <button>Get the Link</button>
              </div>

              <div className='Footer__grid__2'>
                <h2>Our Curses</h2>
                <a>Mechanic</a>
                <a>Civil Work</a>
                <a>Eetrician</a>
                <a>Fitter</a>
                <a>Welder</a>
                <a>Draughtsman (Civil)</a>
                <a>Mechanic (Motor)</a>
              </div>

              <div className='Footer__grid__3'>
                <h3>Help & Support</h3>
                <a>Contact Us</a>
                <a>Term & Conditions</a>
                <a>Privacy Policy</a>
                <div className='Footer__grid__social'>
                  <BsLinkedin />
                  <FaFacebookF />
                  <AiOutlineTwitter />
                  <FaYoutubeSquare />
                </div>
              </div>
            </div>

            <div className='copy container center'>
              <p class="footer-copy">
                <a href="https://github.com/ArthurSantDev" target="_blank" class="footer__copy-link">&#169;2024 Arthur Sant. All right reserved.</a>
              </p>
            </div>
          </div>
        </div>
      </div>

  )
}

export default index