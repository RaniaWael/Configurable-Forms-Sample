import React, { Component } from 'react';
import Header from '../components/Header.js';
import InputField from '../components/InputField.js';
import Button from '../components/Button.js';

class InternshipForm extends Component {
  constructor(props) {
      super(props);
      this.state = { };
    }

    render() {
    return (
      <div>
        <Header />
        <InputField fieldName = 'Name' fieldType = 'date' fieldReq= { true } />
        <Button />
      </div>
    );
  }
}

export default InternshipForm;
