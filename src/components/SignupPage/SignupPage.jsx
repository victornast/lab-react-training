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
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleSubmission = (event) => {
    event.preventDefault();
    const { email, password, nationality } = this.state;
    alert(`Submission with ${email}, ${password} and ${nationality}`);
  };

  render() {
    return (
      <section className="signup-page">
        <h2>Signup Page</h2>

        <form onSubmit={this.handleSubmission}>
          <label htmlFor="signup-email">Email</label>
          <input
            type="email"
            name="email"
            id="signup-email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleFormChanges}
          />
          <p>You typed a valid email</p>
          <label htmlFor="signup-password">Password</label>
          <input
            type="password"
            name="password"
            id="signup-password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleFormChanges}
          />
          <p>Your password is too weak</p>
          <label htmlFor="signup-nationality">Nationality</label>
          <select
            name="nationality"
            id="signup-nationality"
            onChange={this.handleFormChanges}
            value={this.state.nationality}
          >
            <option value="de">German</option>
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
          <button>Sign Up</button>
        </form>

        <p>Hallo</p>
        <p>Your email adress is: max@i</p>
        <p>Your email adress is correct</p>
      </section>
    );
  }
}

export default SignupPage;
