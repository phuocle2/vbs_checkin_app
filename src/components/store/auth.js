import React from 'react';

const AuthContext = React.createContext({
    version: '0.1.0',
    greeting: 'https://pspace.site:5001/greeting',
    profile: 'https://pspace.site:5001/checkin',
    update: 'https://pspace.site:5001/update',
    list: 'https://pspace.site:5001/list',
})
export default AuthContext;