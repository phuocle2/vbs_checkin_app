import React from 'react';

const AuthContext = React.createContext({
    version: '0.1.0',
    greeting: 'https://vbs.pspace.site/greeting',
    profile: 'https://vbs.pspace.site/profile',
    update: 'https://pspace.site:5001/update',
})
export default AuthContext;