import React from 'react';
import './Carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.imgs.length - 1,
    };
  }

  scrollBk = () => {
    if (this.state.index === 0) {
      this.setState({ index: this.props.imgs.length - 1 });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  };

  scrollFw = () => {
    if (this.state.index === this.props.imgs.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  };

  render() {
    const { imgs } = this.props;
    return (
      <div className="carousel">
        <button onClick={this.scrollBk}>Left</button>
        <img src={imgs[this.state.index]} alt={this.state.index} />
        <button onClick={this.scrollFw}>Right</button>
      </div>
    );
  }
}

export default Carousel;
