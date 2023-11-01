import React from 'react'
import { Icon } from '@iconify/react';

const Menu = () => {
  return (
    <div>
            <div className='dishes'>
        <h2>You may like one of this dishes: </h2>

        <div className='dish'>
        <div className='box'>
          <div className='dish-img'></div>
          <div className='dish-details'>
            <div className='dish-name'>
              <h3>Jellof rice and snail</h3>
            </div>
            <div className='dish-rate'>
              <div className='dish-rating'>
              <Icon className='gold-star' icon="iconamoon:star" />
              <Icon className='gold-star' icon="iconamoon:star" />
              <Icon className='gold-star' icon="iconamoon:star" />
              <Icon className='gold-star' icon="iconamoon:star" />
              <Icon className='grey-star' icon="iconamoon:star" />
            
              </div>
              <div className='dish-price'>
              &#8358; 2500
              </div>
            </div>
          </div>
          </div>

          <div className='box'>
          <div className='dish-img2'></div>
          <div className='dish-details'>
            <div className='dish-name'>
              <h3>maloon soup and semo</h3>
            </div>
            <div className='dish-rate'>
              <div className='dish-rating'>
              <Icon className='gold-star' icon="iconamoon:star" />
              <Icon className='gold-star' icon="iconamoon:star" />
              <Icon className='gold-star' icon="iconamoon:star" />
              <Icon className='gold-star' icon="iconamoon:star" />
              <Icon className='grey-star' icon="iconamoon:star" />
            
              </div>
              <div className='dish-price'>
              &#8358; 2000
              </div>
            </div>
          </div>
          </div>

          <div className='box'>
          <div className='dish-img3'></div>
          <div className='dish-details'>
            <div className='dish-name'>
              <h3>Rice and Stew</h3>
            </div>
            <div className='dish-rate'>
              <div className='dish-rating'>
              <Icon className='gold-star' icon="iconamoon:star" />
              <Icon className='gold-star' icon="iconamoon:star" />
              <Icon className='gold-star' icon="iconamoon:star" />
              <Icon className='gold-star' icon="iconamoon:star" />
              <Icon className='grey-star' icon="iconamoon:star" />
            
              </div>
              <div className='dish-price'>
              &#8358; 2500
              </div>
            </div>
          </div>
          </div>

          <div className='box'>
          <div className='dish-img4'></div>
          <div className='dish-details'>
            <div className='dish-name'>
              <h3>Fried rice and chicken</h3>
            </div>
            <div className='dish-rate'>
              <div className='dish-rating'>
              <Icon className='gold-star' icon="iconamoon:star" />
              <Icon className='gold-star' icon="iconamoon:star" />
              <Icon className='gold-star' icon="iconamoon:star" />
              <Icon className='gold-star' icon="iconamoon:star" />
              <Icon className='grey-star' icon="iconamoon:star" />
            
              </div>
              <div className='dish-price'>
              &#8358; 3000
              </div>
            </div>
          </div>
          </div>


        </div>
        <div className='more-dishes'>More &#8594;</div>
      </div>

      
  <div className='ingredients'>
    <h2>The best ingredients</h2>
    <p>We take an enoemous amount of pride in sourcing our ingredients
      carefully to ensure that the flavours of our food are delicious amd authentic
      as possible. We`re only able to archieve this level of exellence by putting an extraordinarylevel of care 
      into our menu items that is difficult to find at other restaurants.
    </p>
    <div className='inge-img'>
      <div className='inge-image'></div>
    </div>
  </div>

  <div className='discover'>
    <h2>Discover</h2>
    <p>Discover new facets of taste together with our talented chefs who are ready to delight you with new delicious dishes any time, any day</p>
  </div>
    </div>
  )
}

export default Menu