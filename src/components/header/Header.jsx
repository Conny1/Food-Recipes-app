import React, { useEffect, useState } from 'react'

import './header.css'
import { NavLink} from 'react-router-dom'
import logo from '../../utils/images/logo.svg' 
import header1 from '../../utils/images/header.png'
import header2 from  '../../utils/images/header2.png'
import header3 from '../../utils/images/header3.png'
const images = [header1, header2, header3]
const Header = () => {
    const [modal, setModal] = useState(false);
    const [pic, setPic] = useState(0)
    

// toggle Menu button function
const MenuButton =()=>{
    setModal(!modal);
}
// Next pic every 3seconds
useEffect(()=>{
  const timer = setTimeout(()=>{
    if(pic === images.length-1){
      setPic(0)
    }else{
      setPic(pic+1)
    }
  }, 2000)
  return () =>clearTimeout(timer);
  

},[pic])

   
  return (
    <div className=' header'  >
      <div className='nav' >
        <div className='logo' >
            <img src={logo} alt="Logo" />
        </div  >
      <div className='navlist' >
        <NavLink to='/' ><li  >Home</li></NavLink>
      
       <li  ><a href="#about">About</a></li>
       <li><a href="#category">Categories</a></li>
       <NavLink to='/receip' ><li  >Recipes</li></NavLink>
       <li><a href="#photo">Photo Gallery </a></li>
      </div>
      <button onClick={MenuButton} >Menu</button>
      {
        modal && <div className='navToggle scale-up-ver-top ' >
        <NavLink to='/' ><li  >Home</li></NavLink>
      
      <li  ><a href="#about">About</a></li>
      <li><a href="#category">Categories</a></li>
      <NavLink to='/receip' ><li  >Recipes</li></NavLink>
      <li><a href="#photo">Photo Gallery </a></li>
        </div>
      }
      </div>

      <div className='header_container2' >
       <div className='textinfo' >
       <p>Chase the New Flavor</p>
        <h1>Love the Original test</h1>
        <p>Sit tellus lobortis sed 
            senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
  <NavLink to="/receip "  >  <button className='heartbeat' >Explore recipes</button>   </NavLink> </div>

        <div className='images scale-up-hor-left ' >
        <img className='' src={images[pic]} alt="food " loading='lazy' />
      </div>
      </div>
      

    </div>
  )
}

export default Header
