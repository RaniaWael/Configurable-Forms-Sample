import React, { Component } from 'react';

class RadioButtons extends Component {
  constructor(props) {
      super(props);
      this.state = { };
  }

  addChoices(){
    return this.props.choices.map((choice) =>
      <div>
        <label style = { styles.radioText }>

          <input type = 'radio' value = { choice } onChange = { this.handleChange }
          checked = { this.handleChoice(choice) } style = { styles.radioBtn } />
          { choice }

        </label>
      </div>
    );
  }

  handleChoice = (value) => {
    return this.state.valueChecked === value;
  }

  handleChange = (event) => {
    this.setState({ valueChecked: event.target.value });
  }

  render() {
    return (
      <div>
        <label style = { styles.labelStyle }>

          { this.props.fieldName }
          { this.addChoices() }

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

  radioText: {
    color: '#000000',
    fontSize: '12pt',
    margin: '15px',
    fontWeight: 'normal'
  },

  radioBtn: {
    color: '#47a298'
  }
};

export default RadioButtons;
