import React, { Component } from 'react';

// Components Imports
import InputField from '../components/InputField.js';
import Dropdown from '../components/Dropdown.js';
import RadioButtons from '../components/RadioButtons.js';
import Checklist from '../components/Checklist.js';

class Section extends Component {
  constructor(props) {
      super(props);
      this.state = { };
    }

    formField (){
      return this.props.fields.map((field) => {
        switch(field.fieldType) {
          case 'radio button': return <RadioButtons fieldName = { field.fieldName } choices = { field.radioBtnOptions } />; break;
          case 'dropdown': return <Dropdown fieldName = { field.fieldName } options = { field.dropdownOptions } />; break;
          case 'check list': return <Checklist fieldName = { field.fieldName } choices = { field.checkListOptions } />; break;
          default: return <InputField fieldName = { field.fieldName } fieldType = { field.fieldType } fieldReq = { field.fieldReq } />;
        }
    });
    }

    render() {
    return (
      <div>
        <fieldset style = { styles.section }>
          <legend>{ this.props.sectionName }</legend>
            { this.formField() }
        </fieldset>
      </div>
    );
  }
}

const styles = {
  section: {
    margin: '25px',
    padding: '10px',
    borderRadius: '8px'
  }
};

export default Section;
