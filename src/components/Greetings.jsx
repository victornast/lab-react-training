import React from 'react';
import './Greetings.css';
import './utilities.css';

const Greetings = (props) => {
  let greeting;
  switch (props.lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'es':
      greeting = 'Olá';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'Hello';
  }
  return (
    <div className="greetings card">
      <p className="greetings__heading">{greeting + ' ' + props.children}</p>
    </div>
  );
};

export default Greetings;
