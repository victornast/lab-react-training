import React from 'react';
import './DriverCard.css';
import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card">
      <img className="driver-card__picture" src={img} alt={name} />
      <section className="driver-card__infos">
        <p className="driver-card-infos__name">{name}</p>
        <p className="driver-card-infos__rating">
          <Rating>{rating}</Rating>
        </p>
        <p className="driver-card-infos__details">
          {car.model + ' — ' + car.licensePlate}
        </p>
      </section>
    </div>
  );
};

export default DriverCard;
