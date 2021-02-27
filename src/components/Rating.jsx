import React from 'react';
import './CreditCard.css';

const Rating = (props) => {
  return (
    <div className="rating">
      <p>{'★'.repeat(Math.round(props.children)).padEnd(5, '☆')}</p>
    </div>
  );
};

export default Rating;
