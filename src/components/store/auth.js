import React from 'react';

const AuthContext = React.createContext({
    version: '0.1.0',
    greeting: 'http://0.0.0.0:5001/greeting',
    profile: 'http://0.0.0.0:5001/profile',
    update: 'http://0.0.0.0:5001/update',
})
export default AuthContext;