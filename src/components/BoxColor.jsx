import React from 'react';
import './BoxColor.css';
import './utilities.css';

const BoxColor = ({ r, g, b }) => {
  const colorToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  const rgbToHex = (r, g, b) => {
    return '#' + colorToHex(r) + colorToHex(g) + colorToHex(b);
  };
  const perceivedBrightness = (r, g, b) => {
    return Math.sqrt(r * r * 0.241 + g * g * 0.691 + b * b * 0.068) > 255 / 2
      ? 'black'
      : 'white';
  };
  return (
    <div
      className="box-color card"
      style={{
        backgroundColor: rgbToHex(r, g, b),
        color: perceivedBrightness(r, g, b),
      }}
    >
      <p className="box-color__text">
        rgb({r},{g},{b})
      </p>
      <p className="box-color__text">{rgbToHex(r, g, b)}</p>
    </div>
  );
};

export default BoxColor;
