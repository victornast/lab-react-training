import React from 'react';
import './LikeButton.css';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.bgColor = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="like-button">
        <button
          className="like-button__action"
          style={{
            backgroundColor: this.bgColor[
              this.state.count % this.bgColor.length
            ],
          }}
          onClick={this.incrementCount}
        >
          <span
            className="like-button__text"
            style={{
              color: this.bgColor[this.state.count % this.bgColor.length],
            }}
          >
            {this.state.count} Like{this.state.count === 1 || 's'}
          </span>
        </button>
      </div>
    );
  }
}

export default LikeButton;
