import React from 'react';
import './DriverCard.css';
import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="rating">
      <p>{name}</p>
      <Rating>{rating}</Rating>
      <p>{car.model + ' — ' + car.licensePlate}</p>
    </div>
  );
};

export default DriverCard;
