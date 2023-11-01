
import Rotate from '../Rotate';
import { Icon } from '@iconify/react';
import '../media.css'



const Home = () => {
 

    return (
      <div className='home'>
      <div className='home-body'>
            <div className='box-1'>
            <Rotate />
            <div className='clip-path'> 
            </div>
            <div className='shade'></div>
            </div>

          <div className='cbox'>
            <div className='title-wrap'>
          <h2 className='title'> Wizzy Delight – Where Culinary Artistry Meets Every <p className='plate'>Plate.</p></h2>
          <button className='btn'>Place Order</button>
           </div>
          </div>
        <div className='down-btn-cover'>
          <Icon  className='down-btn' icon="fa6-solid:angle-down" />
          </div>
      </div>

  <div className='second-section'>







  


  </div>  
  </div>

  
    )
  }

  export default Home  