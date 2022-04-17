import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, picture, description } = service;
    return (
        <div className="card service">
            <img src={picture} className="card-img-top service-img" alt=" "/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h5>Course Fee : ${price}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );
};

export default Service;