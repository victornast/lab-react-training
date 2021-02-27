import React from 'react';
import './IdCard.css';
import './utilities.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <section className="id-card card">
      <img src={picture} alt={firstName + ' ' + lastName} />
      <ul className="id-card__details">
        <li>
          <strong>First name:</strong> {firstName}
        </li>
        <li>
          <strong>Last name:</strong> {lastName}
        </li>
        <li>
          <strong>Gender:</strong> {gender}
        </li>
        <li>
          <strong>Height:</strong> {height / 100}m
        </li>
        <li>
          <strong>Birth:</strong>
          {' ' + birth.toDateString()}
        </li>
      </ul>
    </section>
  );
};

export default IdCard;
