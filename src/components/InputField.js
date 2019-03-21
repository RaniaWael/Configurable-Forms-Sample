import React, { Component } from 'react';

class InputField extends Component {
  constructor(props) {
      super(props);
      this.state = { inputName: 'X' };
    }

    render() {
    return (
      <div>
        {this.state.inputName}
      </div>
    );
  }
}

export default InputField;
