import React, { Component } from 'react';
import Header from '../components/Header.js';
import InputField from '../components/InputField.js';
import Dropdown from '../components/Dropdown.js';
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
        <Dropdown fieldName = 'Letters' options = {['A', 'B', 'C']} />
        <Button text='Complete' />
      </div>
    );
  }
}

export default InternshipForm;
