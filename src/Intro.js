import React from 'react';
import './Intro.css';
import image1 from './musicapp resources/phoneapp inage.jpg'
import image2 from './musicapp resources/phoneapp2 image.png'
import playstore from './musicapp resources/playstore.svg';
import appstore from './musicapp resources/appstore.svg';


function Intro(props) {
    return (
        <div className='container'>
            <div className='explore'>
                <img src={image1} alt="" className="image image1" />
                <img src={image2} alt="" className="image image2" />
            </div>
            <div className='explore2'>
                <div className="explore_content">
                    <h3 className='header'>Premium audio quality</h3>
                    <p className='content1'>Musickk - is one of our newest products. An enjoyable inspiration,
                        a multiverse of music in your pocket. Download it for free on the
                        App Store or Google Play and listen to unlimited music wherever
                        you go.</p>
                </div>
                <div className='download'>
                    <img src={playstore} alt="" className="playstore2" />
                    <img src={appstore} alt="" className='appstore2'/>
                </div>
            </div>
        </div>    
    );
}

export default Intro;