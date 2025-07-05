import React from 'react';
// import axios from 'axios';

import Header from './HeaderNavigator'
import Footer from './Footer'

// CSS style
import './Home.css';

const Home = (props) => {

    return (
        <React.Fragment>
            <Header />

            <div className='title-card'>
                <div className='vbs-title'>
                    <img src='assets/images/VBS.png' alt="/"/>
                </div>
                <div className='vbs-year'>
                    <img src='assets/images/2025.png' alt="/"/>
                </div>
                <div className='vbs-logo'>
                    <img src='assets/images/true-north-logo-LoRes-RGB.png' alt="/"/>
                </div>
            </div>

            <div className='info-card'>
                <div className='date-time-box'>
                    <span className='date-time'>
                        <strong>DATE & TIME</strong>
                    </span>

                    <div className='date-time-info'>
                        <p>
                            <strong>
                                Friday, July 18th
                            </strong>
                            <br/>
                            <em>6PM - 9PM</em>
                        </p>

                        <p>
                            <strong>
                                Saturday, July 19th
                            </strong>
                            <br/>
                            <em>10AM - 4PM</em>
                        </p>
                    </div>
                </div>
                
                <div className='note-box'>
                    <em>* Lunch & Dinner will be served!</em>
                </div>

                <div className='location-box'>
                    <span className='location'>
                        <strong>LOCATION</strong>
                    </span>

                    <div className='date-time-info'>
                        <p>
                            <strong>
                                3134 Frick Road, Houston, TX 77038
                            </strong>
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>

    );
}
export default Home;