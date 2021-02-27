import React from 'react';
import './CreditCard.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const ccNumber = number
    .toString()
    .match(/\d{1,4}/g)
    .join(' ');
  return (
    <div
      className="credit-card"
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
    >
      <p>{type}</p>
      <p className="credit-card__number">{ccNumber}</p>
      <p>
        Expires {expirationMonth < 10 ? '0' + expirationMonth : expirationMonth}
        /{expirationYear}
        <span className="credit-card__bank">{bank}</span>
      </p>
      <p className="credi-card__owner">{owner}</p>
    </div>
  );
};

export default CreditCard;
