import React from 'react';

const Service = ({service}) => {
    console.log(service);
    const {name, price, picture, description} =service;
    return (
        <div>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Course Fee : ${price}</p>
            <p><small>{description}</small></p>
        </div>
    );
};

export default Service;