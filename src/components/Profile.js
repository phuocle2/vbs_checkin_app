import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import AuthContext from './store/auth';

import Header from './HeaderNavigator'
import Footer from './Footer'

// CSS style
import './Profile.css';

const Profile = (props) => {

    const useCtx = useContext(AuthContext);
    const [data, setData] = useState([]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Get a specific parameter
    const name = searchParams.get('name');
    
    const extractHandler = useCallback(() => {
        axios.post(useCtx.profile, {name: name})
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
    }, [useCtx.profile, name]);

    useEffect(() => {
            extractHandler();
        }, [extractHandler]);
    
    // Handle submit
    const handleSubmit = (event) => {

        // console.log(event.target.name)
        // console.log(data.absence1)

        if (event.target.name === 'btnDay1' && data.day1 === '0') {
            data.day1 = '1'
            // console.log(data.absence1)
        }

        if (event.target.name === 'btnDay2' && data.day2 === '0') {
            data.day2 = '1'
            // console.log(data.absence2)
        }
        console.log(data)
        axios.post(useCtx.update, data)
        .then(
            res => {
                // logging...
                // console.log(res)
                // setStatus(res.status)

                setData(res.data)
                window.location.reload()
            }
        ).catch(err => {
            console.log('got error ' + err);
        })
    };

    return (
        <React.Fragment>
            <Header />

            <div className='wrapper'>
                <div className='card'>

                    <header>
                        <div className='title'>
                            <h1>Student Profile</h1>
                        </div>
                    </header>
                    
                    <main>
                        <div className='profile-card'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className='field-title'>Name</td>
                                        <td>{data.name}</td>
                                    </tr>
                                    <tr>
                                        <td className='field-title'>Age</td>
                                        <td>{data.age}</td>
                                    </tr>
                                    <tr>
                                        <td className='field-title'>Organization</td>
                                        <td>{data.organization}</td>
                                    </tr>
                                    <tr>
                                        <td className='field-title'>Check-in</td>
                                        <td >
                                            {/* Submit button */}
                                            <div className='btn-group'>
                                                <div className='btn'>
                                                    {/* <button type="submit" name="btnDay1" disabled={validateBtn(data.absence1)}>Day 1</button> */}
                                                    <button
                                                        type="submit"
                                                        name="btnDay1"
                                                        disabled={data.day1==='1'}
                                                        onClick={handleSubmit}
                                                        >
                                                        Day 1
                                                    </button>
                                                </div>

                                                <div className='btn'>
                                                    {/* <button type="submit" name="btnDay2" disabled={validateBtn(data.absence2)}>Day 2</button> */}
                                                    <button
                                                        type="submit"
                                                        name="btnDay2"
                                                        disabled={data.day2==='1'}
                                                        onClick={handleSubmit}
                                                    >
                                                        Day 2
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>

            <Footer />
        </React.Fragment>

    );
}
export default Profile;