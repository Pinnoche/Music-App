import React from 'react';
import './About.css';
import PersonIcon from '@mui/icons-material/Person';
import QueueIcon from '@mui/icons-material/Queue';
import WifiIcon from '@mui/icons-material/Wifi';
import FavoriteIcon from '@mui/icons-material/Favorite';

function About(props) {
    return (
        <div className='about'>
            <div className='fixed_back'></div>
            <div className="main_about">
                <div className="about_content">
                    <PersonIcon className='about_icon' fontSize='large'/>
                    <h3 className='about_head'>Find</h3>
                    <p className='about_para'>Discover all of your favorite music,
                        from classics to latest hits.</p>
                    <hr className='about_hr'/>
                </div>
                <div className="about_content">
                    <QueueIcon className='about_icon' fontSize='large'/>
                    <h3 className='about_head'>Create</h3>
                    <p className='about_para'>Create playlists from the more than 30
                        million tracks available to suit your every mood.</p>
                    <hr className='about_hr'/>
                </div>
                <div className="about_content">
                    <WifiIcon className='about_icon' fontSize='large'/>
                    <h3 className='about_head'>Enjoy</h3>
                    <p className='about_para'>You don't have to worry about being
                        connected when using Musickk. Bring your music along!</p>
                    <hr className='about_hr'/>
                </div>
                <div className="about_content">
                    <FavoriteIcon className='about_icon' fontSize='large'/>
                    <h3 className='about_head'>Love</h3>
                    <p className='about_para'>No one knows you better than Musickk.
                        It aids in daily discovery of new musical loves!</p>
                    <hr className='about_hr'/>
                </div>
            </div>
        </div>
    );
}

export default About;