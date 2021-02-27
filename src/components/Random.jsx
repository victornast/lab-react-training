import React from 'react';
import './Random.css';
import './utilities.css';

const Random = ({ min, max }) => {
  const rdm = Math.floor(Math.random() * (1 + max - min)) + min;
  return (
    <div className="random card">
      <p className="random__heading">
        Random value betwenn {min} and {max} =&gt; {rdm}
      </p>
    </div>
  );
};

export default Random;
