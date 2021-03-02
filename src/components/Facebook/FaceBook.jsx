import React from 'react';
import profiles from '../../data/berlin.json';
import FaceCard from './FaceCard';
import './FaceBook.css';

class FaceBook extends React.Component {
  state = { selectedCountry: '' };

  setActiveCountry(country) {
    if (country === this.state.selectedCountry)
      this.setState({ selectedCountry: '' });
    else this.setState({ selectedCountry: country });
  }
  render() {
    const countries = [...new Set(profiles.map((profile) => profile.country))];
    return (
      <div className="face-book">
        {countries.map((country) => {
          return (
            <button
              className={
                'country-button' +
                ((country === this.state.selectedCountry &&
                  ' country-selected') ||
                  '')
              }
              key={country}
              onClick={() => this.setActiveCountry(country)}
            >
              {country}
            </button>
          );
        })}
        {profiles.map((profile) => {
          return (
            <div key={profile.lastName + profile.firstName}>
              <FaceCard
                lastName={profile.lastName}
                firstName={profile.firstName}
                country={profile.country}
                selectedCountry={this.state.selectedCountry}
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
