import React from 'react'
import "./header.scss"
import logo from '../logosvg/logo.png'
import {BsFillCartCheckFill,BsFillMoonFill,BsSunFill} from 'react-icons/bs';
import{GiHamburgerMenu}from 'react-icons/gi'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
   <header>
    <div className='main-page'>

          <div className='header-area'>
        
            <div className="logo">
              <img src={logo}/>
            </div>
            <ul className='big-menyu'>
              <li >
          
                <ul className='submenyu'>
                  <li>
                    <Link to='/main'>
                    Main Demo
                    </Link>
                  </li>
                  <li>
                    <Link to='/corporateagency'>Corporate Agency</Link>
                  </li>
                  <li>
                    <Link to='/personal'>Personal Portfolio</Link>
                  </li>
                  <li>
                    <Link to='/minimal'>Minimal Portfolio</Link>
                  </li>
                  <li>
                    <Link to='/digital'>Digital Agancy</Link>
                  </li>
                  <li>
                    <Link to='/corporate'>Corporate Bussnisse</Link>
                  </li>
                  <li>
                    <Link to='/portfolioone'>Portfolio One Page</Link>
                  </li>
                  <li>
                    <Link to='/personal'>Personal Portfolio</Link>
                  </li>
                  <li>
                    <Link to='/bussines'>Bussnise</Link>
                  </li>
                </ul>
                <Link to='/'>Home</Link>
              </li>
              <li>
              <ul className='submenyu'>
                  <li><Link to='/aboutus'>About Us</Link></li>
                  <li><Link to='/aboutme'>About Me</Link></li>
                  <li><Link to='/aboutclassik'>About Classic</Link></li>
               
                </ul>
                <Link to='/about'>About</Link>
              </li>
              <li>
              <ul className='submenyu'>
                  <li>
                    <Link to='/ourservices'>Our Services</Link>
                  </li>
                  <li>
                    <Link to='/ourportfolio'>Our Portfolio</Link>
                  </li>
                  <li>
                    <Link to='/servicesdetail'>Service Details</Link>
                  </li>
                  <li>
                    <Link to='/portfolidetails'>Portfolio Details</Link>
                  </li>
                  <li>
                    <Link to='/404pages'>404 Pages</Link>
                  </li>
                  <li>
                    <Link to='/searcdetails'>Searc Details</Link>
                  </li>
                </ul>
                <Link to='/pages'>Pages</Link>
              </li>
              <li>
              <ul className='submenyu'>
                  <li> <Link to='/team'>Team Mebers</Link></li>
                  <li> <Link to='/ourpricing'>Our Pricing</Link></li>
                  <li><Link to='/galery'>Galery </Link></li>
                  <li><Link to='/progrress'>Progress Bar</Link></li>
                  <li> <Link to='/services'>Services</Link> </li>
                  <li> <Link to='/portfolio'>Portfolio Style</Link></li>
                  <li> <Link to='/Braound'>Braound</Link></li>
                  <li> <Link to='/country'>Countrys</Link></li>
                  <li> <Link to='/Maps'>Google Maps</Link></li>
                </ul>
                <Link to='/element'>Elements</Link>
              </li>
              <li><Link to='/shop'>Shop</Link>
              <ul className='submenyu'>
              <li> <Link to='/shop/lyout'>Shop Lyout</Link></li>
              <li><Link to='/single'>Single Product </Link></li>
              <li> <Link to='/account'>My Account</Link></li>
              <li> <Link to='/signup'>Sign In / Sign Up</Link></li>
              <li> <Link to='/Checkout'>Checkout</Link></li>
              <li> <Link to='/Card'>Cart</Link></li>
                </ul>
              </li>
              <li> <Link to='/Blog'>Blog</Link>
              <ul className='submenyu'>
             <li><Link to='/list'>Blog List </Link></li>
             <li><Link to='/post'>Standart Post </Link></li>
                  <li> <Link to='/video'>Video Post</Link></li>
                  <li> <Link to='/galer'>Galery Post</Link></li>
                  <li> <Link to='/postgalery'>Audio Post</Link></li>
                  <li><Link to='/linkpost'>Link Post </Link></li>
                  <li> <Link to='/default'>Default Blog</Link></li>
                </ul>
              </li>
              <li><Link to='/Contact'>Contact </Link></li>
              <div className='basket'>
              <BsFillCartCheckFill className='icon'/>
            <span className="rbt-cart-count">0</span>
              </div>
            <div className='light'>
            <BsFillMoonFill className='moon'/>
            <BsSunFill className='dark'/>
            </div>

            <button><Link to='/buynow'>Buy Now </Link></button>
            </ul>
            <GiHamburgerMenu className='burger'/>
          </div>
        
         
    </div>
     
   </header>
  )
}

export default Header