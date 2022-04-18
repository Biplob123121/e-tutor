import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const {id, name, price, picture, description } = service;
    const navigate = useNavigate();

    const navigateEnrollInfo = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className="card service">
            <img src={picture} className="card-img-top service-img" alt=" "/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h5>Course Fee : ${price}</h5>
                    <p className="card-text">{description}</p>
                    <button onClick={()=>navigateEnrollInfo(id)} className='common-btn'>Enroll Now</button>
                </div>
        </div>
    );
};

export default Service;