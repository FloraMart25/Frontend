import { Spinner } from "react-bootstrap";
// import { XlviLoader } from "react-awesome-loaders";

import React from 'react';


function Loader() {
    return (
        <Spinner
            animation='border'
            role='status'
            style={{
                width: '80px',
                height: '80px',
                margin: 'auto',
                display: 'block',
            }}
        >
            <span style={{ fontSize: "15px", fontWeight: "10px" }}>Loading...</span>
        </Spinner>
        // <XlviLoader
        //     boxColors={["#EF4444", "#F59E0B", "#6366F1"]}
        //     desktopSize={"128px"}
        //     mobileSize={"100px"}
        // />
    )
}


export default Loader