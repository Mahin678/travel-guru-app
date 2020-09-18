import React, { useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { placeInfo } from '../../FakeData/Data/Data';
import HeaderContent from '../HeaderContent/HeaderContent';
import Topbar from '../Topbar/Topbar';
import './Booking.css'
const Booking = () => {
    const { Id } = useParams();
    const getPlace = placeInfo.find(place => place.id === Number(Id))
    const {getPlaceInfo} = useContext(UserContext)
    const  [PlaceData, setPlaceData] =getPlaceInfo ;

    const history = useHistory();
    let staticPlaceId = 1 ;
    const setPlaceDataHandler = (id) => {
        staticPlaceId = id;
        setPlaceData(staticPlaceId);
        history.push('/StayingConfirm')
    }
    return (
        <div className="home-container home-wrapper">
            <Topbar></Topbar>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <HeaderContent getPlace={getPlace} ></HeaderContent>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="start-booking-form">
                            <form onSubmit={() => setPlaceDataHandler(getPlace.id)} className="text-left card" >
                                  <label>Origin</label>
                                  <div className="form-group" >
                                  <input required type="text" class="form-control"  placeholder="write your Origin" />  
                                  </div>
                                  <label>Destination</label>
                                  <div className="form-group">
                                  <input  type="text" class="form-control"  placeholder={getPlace.name}/>  
                                  </div>
                                  <div className="w-100 d-flex justify-content-between" >  </div>
                                  <div className="form-calendar d-flex"> 
                                  <div>
                                  <label className="text-right" value="2017-06-01">To</label>
                                  <input required type="date"  />
                                  </div>
                                  <div>
                                  <label className="text-left">Form</label>
                                  <input required type="date"  />
                                  </div>
                                  </div>
                                  <button type="submit"  className="btn btn-warning mt-2 w-100" >start-booking</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Booking;