import React from 'react';

// CSS style
import './HeaderNavigator.css';

const HeaderNavigator = (props) => {
    return (
        <React.Fragment>
            <div className='navigation'>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Profile</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/greeting">Greeting</a></li>
                    </ul>
                </nav>
            </div>
            
        </React.Fragment>
    );
}
export default HeaderNavigator;