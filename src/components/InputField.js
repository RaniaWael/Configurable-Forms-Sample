import React, { Component } from 'react';

class InputField extends Component {
  constructor(props) {
      super(props);
      this.state = { enteredData: ' ' };
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ enteredData: event.target.value });
  }

  render() {
    return (
      <div>
        <label>
          { this.props.fieldName }
          <input type = { this.props.fieldType } value = { this.state.enteredData } onChange = { this.handleChange } />
        </label>
      </div>
    );
  }
}

const styles= {
  
};

export default InputField;
