import React from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  const handleColorChange = (event) => {
    const { value } = event.target;
    onChange(color + 'Value', value);
  };
  let rgbString;
  switch (color) {
    case 'r':
      rgbString = `rgb(${value},0,0)`;
      break;
    case 'g':
      rgbString = `rgb(0,${value},0)`;
      break;
    default:
      rgbString = `rgb(0,0,${value})`;
  }
  return (
    <div>
      <form>
        <section style={{ display: 'flex', alignItems: 'center' }}>
          <label
            style={{ display: 'flex', alignItems: 'center' }}
            htmlFor={color + '-color-input'}
          >
            <span
              style={{
                color: rgbString,
                fontSize: '2rem',
              }}
            >
              ■
            </span>
            <span>{color.toUpperCase()}: </span>
          </label>
          <input
            onChange={handleColorChange}
            id={color + '-color-input'}
            type="number"
            min="0"
            max="255"
            value={value}
          />
        </section>
      </form>
    </div>
  );
};

export default SingleColorPicker;
