import React, { Component } from 'react';
import Button from '../components/Button.js';
import InputField from '../components/InputField.js';

class InternshipForm extends Component {
  constructor(props) {
      super(props);
      this.state = { };
    }

    render() {
    return (
      <div>
        <InputField />
        <Button />
      </div>
    );
  }
}

export default InternshipForm;
