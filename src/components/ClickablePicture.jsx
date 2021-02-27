import React from 'react';
import './ClickablePicture.css';

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  toggleImage = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const { img, imgClicked } = this.props;
    return (
      <div className="clickable-picture">
        <img
          onClick={this.toggleImage}
          className="clickable-picture__image"
          width="150px"
          src={(this.state.active && imgClicked) || img}
          alt={(this.state.active && 'Sunglasses On') || 'Sunglasses Off'}
        />
      </div>
    );
  }
}

export default ClickablePicture;
