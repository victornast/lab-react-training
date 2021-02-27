import React from 'react';
import './App.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <section className="id-card">
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

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}

export default App;
