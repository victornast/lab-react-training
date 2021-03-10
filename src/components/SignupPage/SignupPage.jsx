import React from 'react';
import './SignupPage.css';

class SignupPage extends React.Component {
  state = {
    email: '',
    password: '',
    nationality: ['en', 'de', 'fr'].includes(navigator.language)
      ? navigator.language
      : 'en',
  };

  handleFormChanges = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmission = (event) => {
    event.preventDefault();
    const { email, password, nationality } = this.state;
    alert(`Submission with ${email}, ${password} and ${nationality}`);
  };

  render() {
    //^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})
    const passwordIsValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(
      this.state.password
    );
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email);

    let greeting;
    switch (this.state.nationality) {
      case 'de':
        greeting = 'Hallo!';
        break;
      case 'fr':
        greeting = 'Bonjour!';
        break;
      default:
        greeting = 'Hey!';
    }

    return (
      <section className="signup-page">
        <h2>Signup Page</h2>
        <form className="signup-page__form" onSubmit={this.handleSubmission}>
          <label className="signup-page__label" htmlFor="signup-email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="signup-email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleFormChanges}
            className="signup-page__input"
          />
          {Boolean(this.state.email)
            ? (emailIsValid && (
                <p className="signup-page--valid">You typed a valid email</p>
              )) || (
                <p className="signup-page--invalid">
                  You typed an invalid email
                </p>
              )
            : ''}
          <label className="signup-page__label" htmlFor="signup-password">
            Password
          </label>
          <input
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            name="password"
            id="signup-password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleFormChanges}
            className="signup-page__input"
          />
          {Boolean(this.state.password) ? (
            (passwordIsValid && (
              <p className="signup-page--valid">Your password is strong</p>
            )) || (
              <p className="signup-page--invalid">Your password is too weak</p>
            )
          ) : (
            <p>
              Passwords must be at least 8 characters long and contain at least
              one of each: a number, a lowercase character and an uppercase
              character.
            </p>
          )}
          <label className="signup-page__label" htmlFor="signup-nationality">
            Nationality
          </label>
          <select
            name="nationality"
            id="signup-nationality"
            onChange={this.handleFormChanges}
            value={this.state.nationality}
            className="signup-page__input"
          >
            <option value="de">German</option>
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
          <button className="signup-page__action">Sign Up</button>
        </form>
        <hr />
        <p>{greeting}</p>
        <p>Your email adress is: {this.state.email}</p>
        {Boolean(this.state.email)
          ? (emailIsValid && <p>Your email adress is valid</p>) || (
              <p>Your email adress is invalid</p>
            )
          : ''}
      </section>
    );
  }
}

export default SignupPage;
