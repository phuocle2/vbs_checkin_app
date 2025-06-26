import React, { useEffect, useState, useContext, useCallback } from 'react';
import axios from 'axios';

import Header from './HeaderNavigator'
import Footer from './Footer'

// CSS style
import './Home.css';

const Home = (props) => {

    return (
        <React.Fragment>
            <Header />

            <div>
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
                    {/* <div className='left-blank-card'></div> */}
                    <div className='center-card'>
                        <div className='info-time'>
                            <div className='time-card'>
                                <div className='date'>
                                    <span>Friday, July 18th</span>
                                </div>
                                <div className='time'>6PM - 9PM</div>
                            </div>
                            <div className='divided-line'></div>
                            <div className='time-card'>
                                <div className='date'>Saturday, July 19th</div>
                                <div className='time'>10AM - 4PM</div>
                            </div>
                        </div>

                        <div className='info-note'>
                            Lunch & Dinner will be served!
                        </div>

                        <div className='info-activities'>
                            WORSHIP | BIBLE | FELLOWSHIP
                        </div>

                        <div className='info-location'>
                            <div>Location</div>
                            3134 Frick Road, Houston, TX 77038
                        </div>
                    </div>
                    {/* <div className='right-blank-card'></div> */}
                </div>
            </div>

            <Footer />
        </React.Fragment>

    );
}
export default Home;