import React from 'react';
import './Review.css';
import { Autoplay, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function Review(props) {
    return (
        <div className='Review'>
                <Swiper
      // install Swiper modules
                modules={[Pagination, Autoplay]}
                    autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}        
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    >
                <SwiperSlide>
                    <div className="reviewer">
                        <h4 className="reviewer_name">Ajani Malik</h4>
                        <h1 className='reviewer_review'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                            assumenda facilis asperiores doloribus voluptate velit quidem
                            placeat molestiae, nobis amet ut, nisi illo eius minus reprehenderit
                            porro odit alias accusamus.
                        </h1>
                    </div>
      </SwiperSlide>
      <SwiperSlide><div className="reviewer">
                        <h4 className="reviewer_name">Luminous Abubakr</h4>
                        <h1 className='reviewer_review'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                            assumenda facilis asperiores doloribus voluptate velit quidem
                            placeat molestiae, nobis amet ut, nisi illo eius minus reprehenderit
                            porro odit alias accusamus.
                        </h1>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className="reviewer">
                        <h4 className="reviewer_name">Emmanuel Medawase</h4>
                        <h1 className='reviewer_review'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                            assumenda facilis asperiores doloribus voluptate velit quidem
                            placeat molestiae, nobis amet ut, nisi illo eius minus reprehenderit
                            porro odit alias accusamus.
                        </h1>
                    </div>
      </SwiperSlide>
    </Swiper>
        </div>
    );
}

export default Review;