import React from 'react';
import profiles from '../../data/berlin.json';
import FaceCard from './FaceCard';
import './FaceBook.css';

class FaceBook extends React.Component {
  render() {
    const countries = [...new Set(profiles.map((profile) => profile.country))];
    return (
      <div className="face-book">
        {countries.map((country) => {
          return <button key={country}>{country}</button>;
        })}
        {profiles.map((profile) => {
          return (
            <div key={profile.lastName + profile.firstName}>
              <FaceCard
                lastName={profile.lastName}
                firstName={profile.firstName}
                country={profile.country}
                img={profile.img}
                isStudent={profile.isStudent}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default FaceBook;
