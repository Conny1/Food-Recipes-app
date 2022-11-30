import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer   ' >
      <div className='contactus c ' >
        <h3>Contact us</h3>
        <div className='contactus_info' >
            <p>9 Wakairo, Kiambu County,  10019, Kenya</p>
            <p>+254 114116265</p>
            <p>+254 114116265</p>
        </div>
      </div>
      <div className='middle c' >
        <h3>GERICHT</h3>
        <p>'The best way to find yourself is to lose yourself in the service of others.' </p>

      </div>
      <div className='workingHours c ' >
        <h3>Working hours</h3>
        <p>Monday-Friday:
08:00 am -12:00 am</p>
<p>Saturday-Sunday:
07:00am -11:00 pm</p>


      </div>
    </div>
  )
}

export default Footer
