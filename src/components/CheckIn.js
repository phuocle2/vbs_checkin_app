import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import AuthContext from './store/auth';

// import Header from './HeaderNavigator'
import Footer from './Footer';

// CSS style
import './Profile.css';

const Profile = (props) => {

    const useCtx = useContext(AuthContext);
    const [data, setData] = useState([]);

    // const [fname, setFName] = useState([]);
    // const [lname, setLName] = useState([]);

    const [rowPos, setRowPos] = useState([]);
    // const [colPos, setColPos] = useState([]);
    // const [checkedValue, setCheckedValueVal] = useState([]);
    var colPos = '';
    var checkedValue = false;

    const [session1Pos, setSession1Pos] = useState([]);
    const [session2Pos, setSession2Pos] = useState([]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Get a specific parameter
    const fnameParam = searchParams.get('fname');
    const lnameParam = searchParams.get('lname');
    
    const extractHandler = useCallback(() => {
        axios.post(useCtx.profile, {fname: fnameParam, lname: lnameParam})
        .then(
            res => {
                // logging...
                console.log(res)
                // setStatus(res.status)
                setData(res.data.data)
                setRowPos(res.data.rowPos)
                setSession1Pos(res.data.session1Pos)
                setSession2Pos(res.data.session2Pos)
            }
        ).catch(err => {
            console.log('got error ' + err);
        })
    }, [useCtx.profile, fnameParam, lnameParam]);
    
    useEffect(() => {
        extractHandler();
    }, [extractHandler]);
    
    // Handle submit
    const handleCheck = (event) => {        

        if (event.target.name === 'btnSession1' && data['Friday Evening'] === 'FALSE') {
            // data['Friday Evening'] = 'TRUE'
            // console.log(data.absence1)
            // setColPos(session1Pos)
            colPos = session1Pos
            checkedValue = true
            // setCheckedValueVal("TRUE")
        }

        if (event.target.name === 'btnSession2' && data['Saturday'] === 'FALSE') {
            // data['Saturday'] = 'TRUE'
            // console.log(data.absence2)
            // setColPos(session2Pos)
            colPos = session2Pos
            checkedValue = true
            // setCheckedValueVal("TRUE")
        }
        console.log(rowPos, colPos, checkedValue)
        
        axios.post(useCtx.update, {rowPos, colPos, checkedValue})
        .then(
            res => {
                // logging...
                console.log(res)
                // setStatus(res.status)

                // setData(res.data)
                console.log(res.data.status)

                if (res.data.status === '200') {
                    window.alert("Checked in successfully!");
                }
                window.location.reload()
            }
        ).catch(err => {
            console.log('got error ' + err);
        })

        
    };

    /*
    const fnameHandler = (event) => {
        setFName(event.target.value.trim());
    }

    const lnameHandler = (event) => {
        setLName(event.target.value.trim());
    }
    */
    
    // Handle search
    /* 
    const handleSearch = (event) => {
        // Prevent form submission
        // event.preventDefault();

        const output = document.getElementById("output-box");
        const fNameID = document.getElementById('fName');
        if (fNameID.value === '' && fNameID.hasAttribute('required')) {
            // alert('There are some required fields!');
            const warn = "* First Name is required.\n";
            output.innerText = warn;
            return false;
        } else {
            output.innerText = '';
        }

        const lNameID = document.getElementById('lName')
        if (lNameID.value === '' && lNameID.hasAttribute('required')) {
            // alert('There are some required fields!');
            const warn = "* Last Name is required.\n";
            output.innerText = warn;
            return false;
        } else {
            output.innerText = '';
        }

        const submitData = {
            fname: fname,
            lname: lname,
        };

        console.log('got all submitDaata ' + JSON.stringify(submitData));
        
        axios.post(useCtx.profile, submitData)
        .then(
            res => {
                // logging...
                console.log(res)
                // setStatus(res.status)
                setData(res.data.data)

                setRowPos(res.data.rowPos)
                setSession1Pos(res.data.session1Pos)
                setSession2Pos(res.data.session2Pos)
            }
        ).catch(err => {
            console.log('got error ' + err);
        })
        
        const fnameInput = document.getElementById("fName");
        fnameInput.value = '';
        const lnameInput = document.getElementById("lName");
        lnameInput.value = '';
        // window.location.reload();

    };
     */

    return (
        <React.Fragment>
            {/* <Header /> */}

            <div className='wrapper'>
                <div className='title-card'>
                    <h1>Student Profile</h1>
                </div>

                {/* <div className='search-card'>
                    <div className='form-group'>
                        <input className='first-name' id='fName' type='text' placeholder='First Name' onChange={fnameHandler} required></input>
                        <label className='form-label'>First Name</label>
                    </div>
                    <div className='form-group'>
                        <input className='last-name' id='lName' type='text' placeholder='Last Name' onChange={lnameHandler} required></input>
                        <label className='form-label'>Last Name</label>
                    </div>
                    <div className='form-group'>
                        <button id='submit' onClick={handleSearch}>Search</button>
                    </div>
                </div> */}
                <div className='output-box' id="output-box"></div>

                <div className='glass-card'>
                    <div className='profile-card'>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='field-title'>Name</td>
                                    <td>
                                        {/* {data.FirstName + ' ' + data.LastName} */}
                                        <span>{data['First Name']}</span>
                                        <span> </span>
                                        <span>{data['Last Name']}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='field-title'>DOB</td>
                                    <td>{data['Birthday']}</td>
                                </tr>
                                <tr>
                                    <td className='field-title'>Gender</td>
                                    <td>{data['Gender']}</td>
                                </tr>
                                <tr>
                                    <td className='field-title'>Organization</td>
                                    <td>{data['Church Organization']}</td>
                                </tr>
                                {/* <div> */}
                                    {/* <tr> */}
                                        {/* <td className='field-title'>Check-in</td> */}
                                        {/* <td > */}
                                            {/* Submit button */}
                                            {/* <div className='btn-group'> */}
                                                {/* <div className='btn'> */}
                                                    {/* <button type="submit" name="btnDay1" disabled={validateBtn(data.absence1)}>Day 1</button> */}
                                                    {/* <button */}
                                                        {/* type="submit" */}
                                                        {/* name="btnDay1" */}
                                                        {/* // disabled={data.Day1==='1'} */}
                                                        {/* onClick={handleSubmit} */}
                                                    {/* > */}
                                                        {/* Day 1 */}
                                                    {/* </button> */}
                                                {/* </div> */}

                                                {/* <div className='btn'> */}
                                                    {/* <button type="submit" name="btnDay2" disabled={validateBtn(data.absence2)}>Day 2</button> */}
                                                    {/* <button */}
                                                        {/* type="submit" */}
                                                        {/* name="btnDay2" */}
                                                        {/* // disabled={data.Day2==='1'} */}
                                                        {/* onClick={handleSubmit} */}
                                                    {/* > */}
                                                        {/* Day 2 */}
                                                    {/* </button> */}
                                                {/* </div> */}
                                            {/* </div> */}
                                        {/* </td> */}
                                    {/* </tr> */}
                                {/* </div> */}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='checkin-card'>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <span>Sessions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='field-title'>Friday Evening</td>
                                <td>
                                    {/* {data['Friday Evening']} */}
                                    {/* Submit button */}
                                    <span className='btn'>
                                        <button
                                            type="submit"
                                            name="btnSession1"
                                            disabled={data['Friday Evening']==='TRUE' || !data['Friday Evening']}
                                            onClick={handleCheck}
                                        >
                                            Check-In
                                        </button>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className='field-title'>Saturday (all-day)</td>
                                <td>
                                    {/* {data['Saturday']} */}
                                    {/* Submit button */}
                                    <span className='btn'>
                                        <button
                                            type="submit"
                                            name="btnSession2"
                                            disabled={data['Saturday']==='TRUE' || !data['Saturday']}
                                            onClick={handleCheck}
                                        >
                                            Check-In
                                        </button>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <Footer />
        </React.Fragment>

    );
}
export default Profile;