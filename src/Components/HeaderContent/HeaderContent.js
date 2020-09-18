import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './HeaderContent.css'
const HeaderContent = (props) => {
    const{name,id,img, description} = props.getPlace;
     return (
        <div className="header-content header-content-wrapper  mt-5" >
      <h1 className="display-4 text-center" >{name}</h1>
        <p > {description}</p>
        </div>
    );
};

export default HeaderContent;