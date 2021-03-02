import React from 'react';
import './FaceCard.css';
import '../utilities.css';

const FaceCard = ({
  lastName,
  firstName,
  img,
  country,
  isStudent,
  selectedCountry,
}) => {
  return (
    <section
      className={
        'face-card card' +
        (country === selectedCountry ? ' country-selected' : '')
      }
    >
      <img
        className="face-card__picture"
        src={img}
        alt={firstName + ' ' + lastName}
      />
      <ul className="face-card__details">
        <li>
          <strong>First name:</strong> {firstName}
        </li>
        <li>
          <strong>Last name:</strong> {lastName}
        </li>
        <li>
          <strong>Country:</strong> {country}
        </li>
        <li>
          <strong>Type:</strong> {isStudent ? 'Student' : 'Teacher'}
        </li>
      </ul>
    </section>
  );
};

export default FaceCard;
