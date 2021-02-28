import React from 'react';
import profiles from '../../data/berlin.json';
import FaceCard from './FaceCard';
import './FaceBook.css';

class FaceBook extends React.Component {
  render() {
    return (
      <div className="face-book">
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
