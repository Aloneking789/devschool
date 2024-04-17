import React, {useEffect , useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link, animateScroll as scroll } from 'react-scroll';
// import { useEffect, useState } from 'react'
const Navbar = () => {
   const [sticky,setsticky] = useState(false);
      useEffect(()=>{
        window.addEventListener('scroll',()=>(
          window.scrollY > 50 ? setsticky(true) : setsticky(false)
        ))
      },[]);

      const [mobileMenu,setMobileMenu]=useState(false);
      const toggleMenu =()=>{
        mobileMenu?setMobileMenu(false):setMobileMenu(true);
      }

  return (
    <nav className={`container ${sticky?' dark-nav':''}`}>
      <img src={logo} alt='' className='logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
  <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
  <li><Link to='program' smooth={true} offset={-400} duration={500}>Program</Link></li>
  <li><Link to='about' smooth={true} offset={-200} duration={500}>About Us</Link></li>
  <li><Link to='campus' smooth={true} offset={-320} duration={500}>Campus</Link></li>
  <li><Link to='testimonials' smooth={true} offset={-300} duration={500}>Testimonials</Link></li>
  <li><Link to='contact' smooth={true} offset={-100} duration={500}><button className='btn'>Contact us</button></Link></li>
</ul>
<img src={menu_icon} className='menu-icon' onClick={toggleMenu}></img>
    </nav>
  )
}

export default Navbar
