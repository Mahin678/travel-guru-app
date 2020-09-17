import React from 'react';
import { Link } from 'react-router-dom';
import { placeInfo } from '../../FakeData/Data/Data';
import Place from '../Place/Place';
import Topbar from '../Topbar/Topbar';
import './Home.css';
const Home = () => {
    return (
        <div className="home-container" >
            <Topbar></Topbar>
            <div className="header-content-wrapper home-wrapper mt-5" >
                <div className="w-100 ">
                    <div className="row w-100">
                        <div className="col-lg-6 text-center">
                            <h1 className="display-4" >Cox's bazar</h1>
                            <p>
                                Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ..
                            </p>
                            <a className="btn btn-outline-warning" href="/">Booking ➡️ </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <Place></Place>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Home;