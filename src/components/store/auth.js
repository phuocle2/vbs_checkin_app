import React from 'react';

const AuthContext = React.createContext({
    version: '0.1.0',
    // greeting: 'https://pspace.site:5001/greeting',
    // profile: 'https://pspace.site:5001/checkin',
    // update: 'https://pspace.site:5001/update',
    // list: 'https://pspace.site:5001/list',
    // greeting: 'http://localhost:5001/greeting',
    // profile: 'http://localhost:5001/checkin',
    // update: 'http://localhost:5001/update',
    // list: 'http://localhost:5001/list',
    greeting: 'https://server.pspace.site:5001/greeting',
    profile: 'https://server.pspace.site:5001/checkin',
    update: 'https://server.pspace.site:5001/update',
    list: 'https://server.pspace.site:5001/list',
})
export default AuthContext;