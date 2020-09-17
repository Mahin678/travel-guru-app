import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Topbar.css'

const Topbar = () => {
    const { UserInfo } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = UserInfo;
    return (
        <div>
            <nav className="navbar navbar-expand-lg text-light ">
                <div className="container">

                    <img className="navbar-brand custom-logo" src='https://i.imgur.com/BpUrInU.png' alt="" />

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="form-inline my-2  mx-5 my-lg-0">
                            <input className="form-control mr-sm-2 custom-input p-3" type="search" placeholder="Search your destinations" aria-label="Search" />
                        </form>

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active mx-4">
                                <Link className="nav-link" to="/news">News </Link>
                            </li>
                            <li className="nav-item  mx-4">
                                <Link className="nav-link" to="/destination">Destination</Link>
                            </li>
                            <li className="nav-item  mx-4">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item  mx-4">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        {
                            loggedInUser.name ?
                                <button className="d-inline mt-3 btn btn-outline-warning" style={{ width: '140px' }} >{loggedInUser.name}</button>
                                :
                                <Link className="nav-link" to="/contact"><button className="btn btn-warning my-2 my-sm-">Login</button></Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Topbar;