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
  const ccNumber =
    ('•'.repeat(4) + ' ').repeat(3) + number.toString().match(/\d{1,4}/g)[3];
  let ccImage;
  switch (type) {
    case 'Visa':
      ccImage = './img/visa.png';
      break;
    default:
      ccImage = './img/master-card.svg';
  }
  return (
    <div
      className="credit-card"
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
    >
      <img className="credit-card__logo" src={ccImage} alt={type} />
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
