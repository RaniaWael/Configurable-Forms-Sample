import React, { Component } from 'react';

// Components Imports
import Header from '../components/Header.js';
import InputField from '../components/InputField.js';
import Dropdown from '../components/Dropdown.js';
import RadioButtons from '../components/RadioButtons.js';
import Checklist from '../components/Checklist.js';
import Section from '../components/Section.js';
import Button from '../components/Button.js';

// Configuration Object Importing
import FormFields from '../statics/FormFields.json';

class InternshipForm extends Component {
  constructor(props) {
      super(props);
      this.state = { };
    }

    renderSections() {
      return FormFields.form.sections.map((section) =>
        <Section sectionName = { section.sectionName } fields = { section.fields } />
      );
    }

    render() {
      console.log(FormFields);
    return (
      <div>
        <Header />
        { this.renderSections() }
        <Button text='Complete' />
      </div>
    );
  }
}

export default InternshipForm;
