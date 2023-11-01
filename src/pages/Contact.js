import React from 'react'
import { Icon } from '@iconify/react';

const Contact = () => {
  return (
    <div>
        <div className='gallery-container'>
    <div className='gallery-txt'>
      <h2>Uptown Store</h2>
      <p>Take a closer look at our establishment with a gallery of photographs that capture the spirit of Uptown</p>
  <p>The refined atmosphere and delicious food will impress even the most sophisticated visitor.</p>
  <div>our menu</div>
    </div>

    <div className='gallery'>
      <div className='line'>
      <Icon className='left-btn-g' icon="icon-park-outline:left" color="white" />
      <Icon className='right-btn-g' icon="icon-park-outline:right" color="white" />
      </div>

    <div className='frame'>
      <div className='gallery-img'></div>
    </div>

    <div className='dot'></div>
    </div>
  </div>
  
      <div className='contactUs-container'>
    <div className='border3'></div>
    <div className='input-section'>
    <h2>Contact to us:</h2>
      <h3>Enter your name:</h3>
      <input type='text' placeholder='Name'/>

      <h3>Your phone number:</h3>
      <input type='text' placeholder='+234'/>

      <h3>Enter message:</h3>
      <div className='text-container'>
      <input type='text' placeholder='Text' className='text'/>
      <Icon className='send' icon="fa:send" />
      </div>
    </div>

    <div className='contact'>
      <h2>Contact to us:</h2>
      <p className='p1'>Contact us in a convinient way:</p>
      <p className='p2'>Phone:</p>
      <p className='p3'>+234 9034 440 271</p>
      <p className='p4'>wizzydelight@gmail.com</p>
      <p className='p5'>Schedule:</p>
      <p className='p6'>24 hours</p>
      <div>Request a call</div>
    </div>
  </div>
    </div>
  )
}

export default Contact