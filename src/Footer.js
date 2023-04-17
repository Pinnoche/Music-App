import React from 'react';
import './Footer.css';
import Logo from './musicapp resources/footer logo.png';
import playstore from './musicapp resources/playstore.svg';
import appstore from './musicapp resources/appstore.svg';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Exploreview, Priceview, Reviewview, } from './Menu';

function Footer(props) {
    
    return (
        <div className='footer'>
            <div className="footer_menu">
                <div className="logo_cont">
                    <img className='footer_logo' src={Logo} alt="" />
                    <p className="web">
                        malikolalekana4@gmail.com
                    </p>
                </div>
                 <div className="footeritem_cont">
                    <p className="footeritem" onClick={Exploreview}>Explore</p>
                    <p className="footeritem" onClick={Priceview}>Pricing</p>
                    <p className="footeritem"onClick={Reviewview}>Review</p>
                </div>
            </div>
            <div className="footer_social">
                <div className="footer_download">
                    <img src={playstore} alt="" className="playstore3" />
                    <img src={appstore} alt="" className='appstore3'/>
                </div>
                <div className="social">
                    <FacebookRoundedIcon className=' social_icon' fontSize='large'/>
                    <InstagramIcon className='social_icon' fontSize='large'/>
                    <YouTubeIcon className='social_icon' fontSize='large'/>

                </div>
            </div>
            <div className="copyright">
                <p className="myname">
                    Ajani Malik @2023
                </p>
            </div>
            
        </div>
    );
}

export default Footer;