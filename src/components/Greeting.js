import React, { useEffect, useState, useContext, useCallback } from 'react';
import axios from 'axios';

import AuthContext from './store/auth';

const Greeting = (props) => {

    const useCtx = useContext(AuthContext);
    const [data, setData] = useState([]);
    
    const extractHandler = useCallback(() => {
        axios.get(useCtx.greeting)
        .then(
            res => {
                // logging...
                console.log(res)
                // setStatus(res.status)
                setData(res.data)
            }
        ).catch(err => {
            console.log('got error ' + err);
        })
    }, [useCtx.greeting]);

    useEffect(() => {
            extractHandler();
        }, [extractHandler]);
    
    return (
        <React.Fragment>
            <div>
                {data.message}
            </div>
        </React.Fragment>

    );
}
export default Greeting;