import React from 'react';
import './Explore.css';
import Intro from './Intro';
import About from './About';
import SliderShow from './SliderShow'
import Fact from './Fact';

function Explore(props) {
    return (
        <div className='main_explore'>
            <Intro />
            <About />
            <SliderShow />
            <Fact />
        </div>
        
    );
}

export default Explore;