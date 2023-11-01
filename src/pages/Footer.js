import React from 'react'
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <div>
        
        <div className='footer-container'>
    <div className='brand'>
      <div className='footer-logo'></div>
      <h1>Wizzy Delight</h1>
    </div>

    <div className='about'>
      <h3>About us</h3>
      <p>Price</p>
      <p>Menu</p>
      <p>Home</p>
    </div>

    <div className='serveices'>
      <h3>servicess</h3>
      <p>delivery</p>
      <p>Packaging</p>
    </div>

    <div className='Shedule'>
      <h3>Schedule</h3>
      <p>Mn - Fr</p>
      <p>24 Hours</p>
  </div>

  <div className='footer-icon'>
  <Icon className='ficon' icon="entypo-social:facebook" color="white" />
  <Icon  className='ficon' icon="teenyicons:instagram-solid" color="white" />
  </div>
  </div>
    </div>
  )
}

export default Footer