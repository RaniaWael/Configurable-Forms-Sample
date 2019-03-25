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

  shortText() {
    if (this.props.fieldType === 'long string') {
      return false;
    }
    else return true;
  }

  render() {
    return (
      <div>
        <label style = { styles.labelStyle }>

          { this.props.fieldName }

          <input type = { this.props.fieldType } value = { this.state.enteredData } onChange = { this.handleChange }
          required = { this.props.fieldReq } style = { styles [ this.props.fieldType ] } hidden = { !this.shortText() } />

          <textarea value = { this.state.enteredData } onChange = { this.handleChange }
          required = { this.props.fieldReq } style = { styles.longString } hidden = { this.shortText() } />

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

  text: {
    width: '30%',
    height: '20px',
    borderRadius: '4px',
    position: 'relative',
    backgroundColor: 'rgba(255,255,255,0.3)',
    margin: '15px'
  },

  number: {
    width: '5%',
    height: '20px',
    borderRadius: '4px',
    position: 'relative',
    backgroundColor: 'rgba(255,255,255,0.3)',
    margin: '15px'
  },

  date: {
    width: '8%',
    height: '20px',
    borderRadius: '4px',
    position: 'relative',
    backgroundColor: 'rgba(255,255,255,0.3)',
    margin: '15px',
    padding: '4px'
  },

  longString: {
    width: '30%',
    height: '60px',
    borderRadius: '4px',
    position: 'relative',
    backgroundColor: 'rgba(255,255,255,0.3)',
    margin: '15px',
    borderWidth: 'medium',
    borderColor: 'rgba(180,180,180,0.3)',
    boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.05)',
    top: '45px'
  }

};

export default InputField;
