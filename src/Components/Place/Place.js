import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { placeInfo } from '../../FakeData/Data/Data';
import './Place.css'
const Place = (id) => {
    const { getPlaceInfo } = useContext(UserContext)
    const [PlaceData, setPlaceData] = getPlaceInfo
    const setPlaceHandler = (id) => {
        setPlaceData(id)
    }
    console.log(PlaceData, "set")
    return (
        <>
            {
                placeInfo.map(info =>
                    <div className="col-lg-4 text-center">
                        <div className="card-img">
                            <Link to={`/place/${info.id}`}>
                                <img className="" src={info.img} alt="" />
                                <h4>{info.name}</h4>
                            </Link>
                        </div>

                    </div>
                )
            }
        </>
    );
};

export default Place;