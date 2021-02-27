import React from 'react';
import './Dice.css';

class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
      side: Math.floor(Math.random() * 6 + 1),
    };
  }

  rollDice = () => {
    setTimeout(() => {
      this.setState({ side: 0 });
    }, 1);
    setTimeout(() => {
      this.setState({ side: Math.floor(Math.random() * 6 + 1) });
    }, 999);
  };

  render() {
    const imgPath = './img/dice' + (this.state.side || '-empty') + '.png';
    return (
      <div className="dice">
        <img onClick={this.rollDice} width="150px" src={imgPath} alt="Dice" />
      </div>
    );
  }
}

export default Dice;
