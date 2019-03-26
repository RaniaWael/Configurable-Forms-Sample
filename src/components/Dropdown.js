import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
      super(props);
      this.state = { };
  }

  addOptionsToSelect () {
    return this.props.options.map((option) =>
      <option value= {option}> {option} </option>
    );
  }

  handleChange = (event) => {
    this.setState({ dropdownValue: event.target.value });
  }

  render() {
    return (
      <div>
        <label style={ styles.labelStyle }>
          { this.props.fieldName }
          <select style = { styles.selectStyling } onChange = { this.handleChange }>
            { this.addOptionsToSelect() }
          </select>
        </label>
      </div>
    );
  }
}

const styles = {
  labelStyle: {
    color: '#666666',
    margin: '15px',
    fontWeight: 'bold'
  },

  selectStyling: {
    borderColor: '#47a298',
    borderRadius: '8px',
    padding: '5px',
    fontSize: '12pt',
    margin: '15px'
  }
};

export default Dropdown;
