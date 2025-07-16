import React, { useEffect, useState, useContext, useCallback, useMemo } from 'react';
// import { useLocation } from 'react-router-dom';
import axios from 'axios';


import { AgGridReact } from 'ag-grid-react';
import { provideGlobalGridOptions, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

import AuthContext from './store/auth';

import Header from './HeaderNavigatorAdmin';
import Footer from './Footer';

// CSS style
import './TableList.css';

// This section is for Ag Grid React setup
ModuleRegistry.registerModules([ AllCommunityModule ]);
// Mark all grids as using legacy themes
provideGlobalGridOptions({
    theme: "legacy",
});

const TableList = (props) => {
    const useCtx = useContext(AuthContext);

    const [rowData, setRowData] = useState([]);

    const [colDefs, setColDefs] = useState([
        {
            field: '#',
            // suppressSizeToFit: true,
        },
        {
            field: 'First Name',
            suppressSizeToFit: true,
        },
        {
            field: 'Last Name',
            suppressSizeToFit: true,
        },
        {field: 'Birthday'},
        {field: 'Gender'},
        {field: 'Church Organization'},
        {field: 'Emergency Contact Name'},
        {field: 'Relationship to Person Above'},
        {field: 'Phone Number'},
        {field: 'Additional Emergency Contact Name'},
        {
            field: 'Friday Evening',
            cellStyle: params => {
                if (params.value === 'TRUE') {
                    return {color: 'red', backgroundColor: '#aaffaa'}
                }
            },
        },
        {field: 'Saturday'},
    ]);

    const defaultColDef = useMemo(() => ({
        flex: 1,
        filter: true,
        // floatingFilter: true,
    }));
    
    const extractHandler = useCallback(() => {
        axios.get(useCtx.list)
        .then(
            res => {
                // logging...
                console.log(res)
                // setStatus(res.status)
                setRowData(res.data)
            }
        ).catch(err => {
            console.log('got error ' + err);
        })
    }, [useCtx.list]);

    useEffect(() => {
        extractHandler();
    }, [extractHandler]);

    return (
        <React.Fragment>
            <Header />

            <div className='contain-card'>
                <div className='ag-theme-quartz' style = {{height: 600}}>
                    <AgGridReact 
                        rowData={rowData} 
                        columnDefs={colDefs} 
                        defaultColDef={defaultColDef}
                        pagination={true}
                        paginationPageSize={30}
                        paginationPageSizeSelector={[10, 20, 30]}
                    />
                </div>
            </div>

            <Footer />
        </React.Fragment>

    );
}
export default TableList;