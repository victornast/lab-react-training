import React from 'react';
import './Rating.css';

const Rating = (props) => {
  return (
    <span className="rating">
      {'★'.repeat(Math.round(props.children)).padEnd(5, '☆')}
    </span>
  );
};

export default Rating;
