import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import React, { useState, useRef, useEffect } from 'react';
import './index.css';

const logo = "<ArthurSant />";

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // OPEN & CLOSE MOBILE NAVBAR
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // CLICKING AWAY CLOSES THE NAVIGATION BAR
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={menuRef}>
      <div className='Navbar'>
         <div className='navbar container'>
            <div className='nav__left'>
               <ScrollLink to='Home' activeClass='active' spy={true}>
                  <Link to='/'>
                  Home
                  </Link>
               </ScrollLink>

               <ScrollLink to='Home' activeClass='active' spy={true}>
                  Courses
               </ScrollLink>
            </div>

            <div className='navbar__logo'>
               <img src="/ii-cut.png" alt="logo" className='ii__logo'/>
               <img src="/malta-logo.svg" alt="logo" className='malta__logo' />
            </div>

            <div className='toggleMenu' onClick={toggleMenu}>
               <span className='bar'></span>
               <span className='bar'></span>
               <span className='bar'></span>
            </div>

            <div className={`nav__right ${isOpen ? 'open' : ''}`}>
               <Link to='/'>
                  <button className='SingIn'>
                     Sing in
                  </button>
               </Link>
               <Link to='/'>
                  <button className='Register'>
                     Register
                  </button>
               </Link>
            </div> 
         </div>
      </div>
    </nav>
  );
}

export default Index;