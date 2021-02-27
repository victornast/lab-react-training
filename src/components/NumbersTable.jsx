import React from 'react';
import './NumbersTable.css';

class NumbersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: Array.from({ length: this.props.limit }, (v, i) => i + 1),
    };
  }
  render() {
    return (
      <div className="numbers-table">
        {this.state.numbers.map((number) => {
          let bgColor = number % 2 === 0 ? 'red' : 'white';
          return (
            <p
              style={{ backgroundColor: bgColor }}
              className="numbers-table__field"
            >
              {number}
            </p>
          );
        })}
      </div>
    );
  }
}

export default NumbersTable;
