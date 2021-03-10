import React from 'react';
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends React.Component {
  state = {
    rValue: 100,
    gValue: 120,
    bValue: 140,
  };

  colorChange = (color, value) => {
    this.setState({ [color]: value });
  };

  render() {
    const rgb = `rgb(${this.state.rValue}, ${this.state.gValue}, ${this.state.bValue})`;
    return (
      <div>
        <h2>Color Picker</h2>
        <SingleColorPicker
          onChange={this.colorChange}
          color="r"
          value={this.state.rValue}
        />
        <SingleColorPicker
          onChange={this.colorChange}
          color="g"
          value={this.state.gValue}
        />
        <SingleColorPicker
          onChange={this.colorChange}
          color="b"
          value={this.state.bValue}
        />
        <p style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              color: `${rgb}`,
              fontSize: '2rem',
            }}
          >
            ■
          </span>
          <span>{rgb}</span>
        </p>
      </div>
    );
  }
}

export default RGBColorPicker;
