import React from 'react';
import { useSwiper } from 'swiper/react';
import './NavBut.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function NavBut(props) {
    const swiper = useSwiper();

    return (
      <>
      <button onClick={() => swiper.slidePrev()} className='navbut_cont prev'>
          <NavigateBeforeIcon onClick={() => swiper.slidePrev()} fontSize='large' className='navbut'/>
        </button>
        
      <button onClick={() => swiper.slideNext()} className='navbut_cont next'>
          <NavigateNextIcon onClick={() => swiper.slideNext()} fontSize='large' className='navbut'/>
    </button>
      </>
      
  );
}

export default NavBut;