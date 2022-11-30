import React from 'react'
import './about.css'
import aboutimg from '../../utils/images/knife.png'

const About = () => {
  return (
    <div className='about' id='about' >
        <div className='about_us' >
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>

        </div>
        <div className='about_image' >
            <img src={aboutimg} alt="KnifeImage" />
        </div>
        <div className='about_our_history' >
            <h1>Our History</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>

        </div>
      
    </div>
  )
}

export default About
