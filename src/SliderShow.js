import React from 'react';
import './SliderShow.css';
import playstore from './musicapp resources/playstore.svg';
import appstore from './musicapp resources/appstore.svg';
import Slider from './Slider';

function SliderShow(props) {
    return (
        <div className='slidershow'>
            <h3 className='slide_head'>All your favorites in one place</h3>
            <div className='download download2'>
                    <img src={playstore} alt="" className="playstore2" />
                    <img src={appstore} alt="" className='appstore2'/>
            </div>
            <Slider />
        </div>
    );
}

export default SliderShow;