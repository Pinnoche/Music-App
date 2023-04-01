import React, { useState } from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import NavBut from './NavBut';
import sliderimage1 from './musicapp resources/phoneapp4.jpg';
import sliderimage2 from './musicapp resources/phoneapp7.jpg';
import sliderimage3 from './musicapp resources/phoneapp6.jpg';
import sliderimage4 from './musicapp resources/phoneapp5.jpg';
function Slider(props) {

    const [size, setSize] = useState(window.innerWidth);
    const images = [sliderimage1,sliderimage2,sliderimage3,sliderimage4]
    
    const Slideperview = () => {
        if (size >= 769) {
            return 3
        } else if(size < 769) {
            return 1
        }
    }
    window.onresize = () => setSize(window.innerWidth);

    return (
        
        <div className='main_slider'>
            
            <Swiper className='slider_contain'
                // spaceBetween={50}
                slidesPerView={Slideperview()}
                centeredSlides={true}
                loop={true}
                loopedSlides={2}
            >
                <div className="phoneimg">
                    <div className='iphone_feat'></div>
                </div>
                {images.map(use => (
                        <SwiperSlide>
                    {({ isActive }) => (
                            <img src={use} className={isActive ? 'sliderimage active_sliderimage' : 'sliderimage notactive'} alt="" />
                        )}
                    </SwiperSlide>
                    )
                    
                )}
                <NavBut />
            </Swiper>
        </div>
    );
}

export default Slider;

