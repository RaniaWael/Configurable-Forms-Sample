import React, { Component } from 'react';

class Checklist extends Component {
  constructor(props) {
      super(props);
      this.state = { checkedItems: [] };
  }

  addChoices(){
    return this.props.choices.map((choice) =>
      <div>
        <label style = { styles.checkText }>

          <input type = 'checkbox' value = { choice } onChange = { this.handleChange } />
          { choice }

        </label>
      </div>
    );
  }

  handleChange = (event) => {
    if (this.state.checkedItems.includes(event.target.value)) {
      var removeInd = this.state.checkedItems.indexOf(event.target.value);
      this.state.checkedItems.splice(removeInd, 1);
    }
    else
      this.setState({checkedItems: this.state.checkedItems.concat(event.target.value)});

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

  checkText: {
    color: '#000000',
    fontSize: '12pt',
    margin: '15px',
    fontWeight: 'normal'
  },
};

export default Checklist;
