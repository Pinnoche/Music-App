import React from 'react';
import './Fact.css';

function Fact(props) {
    return (
        <>
            <div className='fact'>
                <h2 className='fact_head'>Let the facts speak for us</h2>
                <div className="fact_content_cont">
                    <div className='fact_content_main'>
                        <h1 className="fact_content_head">350K</h1>
                        <h3 className="fact_content_subhead">active users</h3>
                        <p className="fact_content">Muscikk's rapidly expanding user base now numbers over 350
                            thousand active users. We are growing in size as we gain the trust of more individuals
                            throughout the world.</p>
                    </div>
                    <div className='fact_content_main'>
                        <h1 className="fact_content_head">10K</h1>
                        <h3 className="fact_content_subhead">daily download</h3>
                        <p className="fact_content">Musickk is downloaded around ten thousand times
                            every day on average. According to statistics, more than 85% of downloads
                            are for long-term use. Meanwhile, as we improve, the number of re-downloads
                            increases..</p>
                    </div>
                    <div className='fact_content_main'>
                        <h1 className="fact_content_head">350K</h1>
                        <h3 className="fact_content_subhead">positive review</h3>
                        <p className="fact_content">People love Musickk, and this is our proudest achievement.
                            Meanwhile, we show our appreciation to our clients by adding exciting new features
                            and making Musickk even more impressive.</p>
                    </div>
                </div>    
            </div>
            <div className="fact2">
                <div className='fact2_content'>
                    <h3 className='fact2_head1'>Do you have no idea what to listen to today? <br/>
Our experts' hand-picked playlists are the best option for you.</h3>
                    <h2 className='fact2_head2'>Explore new tracks everyday!</h2>
                </div>
            </div>
            
        </>
    );
}

export default Fact;