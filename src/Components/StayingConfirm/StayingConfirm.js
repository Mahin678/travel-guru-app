import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { placeInfo } from '../../FakeData/Data/Data';
import { Hotel } from '../../FakeData/Data/Hotel';
import Topbar from '../Topbar/Topbar';
import './StayingConfirm.css'
const StayingConfirm = () => {
    const { getPlaceInfo } = useContext(UserContext)
    // const [loggedInUser , setLoggedInUser] = color;
    const [PlaceData, setPlaceData] = getPlaceInfo;
    let storId = 1;
    if (PlaceData) {
        storId = PlaceData
    }
    const getPlace = placeInfo.find(data => data.id === storId)
    console.log(PlaceData, "confonfirm")
    return (
        <div className="home-container" >
            <Topbar></Topbar>
            <div className="row container mx-auto">
                <div className="col-lg-6 ">
                    <h4 className="text-light" >Stay in {getPlace.name}</h4>
                    <div className="card hotel">
                        <div className="row">
                            {
                                Hotel.map(info =>
                                    <div className="col-lg-12">
                                        <div className="hotelInfo d-flex">
                                            <div className="hotel-img">
                                                <img src={info.img} alt="" />
                                            </div>
                                            <div className="hotel-content m-3" >
                                                <a href="/">    <h4>Happy Mornings Motel</h4></a>
                                                <p>{info.hotelDetails}</p>
                                                <p>{info.price} Usd</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mapStyling" >
                        {
                            getPlace.id == 1 &&
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101655.55797388207!2d91.93286104570957!3d21.451043356004966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2z4KaV4KaV4KeN4Ka44Kas4Ka-4Kac4Ka-4Kaw!5e1!3m2!1sbn!2sbd!4v1600325774612!5m2!1sbn!2sbd" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        }
                        {
                            getPlace.id == 3 &&
                            <iframe className="mapStyling" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810034.7003837615!2d88.7264708813655!3d22.019405967566595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a004caac2c7b315%3A0x4716abcfbb16c93c!2z4Ka44KeB4Kao4KeN4Kam4Kaw4Kas4Kao!5e1!3m2!1sbn!2sbd!4v1600325823633!5m2!1sbn!2sbd" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        }
                        {
                            getPlace.id == 2 &&
                            <iframe className="mapStyling" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24883.49603405663!2d91.70753464889397!3d24.313562805556735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37517a7a9ac91745%3A0x50f827893a88c955!2z4Ka24KeN4Kaw4KeA4Kau4KaZ4KeN4KaX4Kay!5e1!3m2!1sbn!2sbd!4v1600325653108!5m2!1sbn!2sbd" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StayingConfirm;