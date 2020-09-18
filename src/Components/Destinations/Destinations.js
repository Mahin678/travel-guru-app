import React from 'react';
import Place from '../Place/Place';
import Topbar from '../Topbar/Topbar';

const Destinations = () => {
    return (
        <div style={{height:"100vh"}} className=" bg-dark" > 
            <Topbar></Topbar>
            <h1 className="mt-5 pt-5 text-center text-light" >Please Select A Place  </h1>
            <div className="d-flex justify-content-center container mt-5" >
            <Place></Place>
            </div>
        </div>
    );
};

export default Destinations;