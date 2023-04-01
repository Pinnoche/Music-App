import React from 'react';
import './Price.css';


function Price(props) {
    return (
        <div className='Price'>
            <h3 className="price_head">Music for everyone</h3>
            <p className="price_subhead">Choose your Plan!</p>
            <div className='plan_cont'>
                <div className="free_plan">
                    <p className="plan_type">Free</p>
                    <h1 className="plan_price">$0</h1>
                    <p className="plan_duration">per month</p>
                    <p className="plan_track">30 Million Tracks</p>
                    <p className="plan_playlist">Handpick Playlist</p>
                    <p className="plan_sh">Shuffle Tracks</p>
                    <p className="free_trial"><br /></p>
                    <button className="trynow">TRY NOW</button>
                </div>
                <div className="premium_plan">
                    <p className="plan_type">Premium</p>
                    <h1 className="plan_price">$7</h1>
                    <p className="plan_duration">per month</p>
                    <p className="plan_track">30 Million Tracks</p>
                    <p className="plan_playlist">No Advertising</p>
                    <p className="plan_sh">Offline Mode</p>
                    <p className="free_trial2">7-Days Trial Period</p>
                    <button className="trynow2">TRY NOW</button>
                </div>
            </div>
        </div>
    );
}

export default Price;