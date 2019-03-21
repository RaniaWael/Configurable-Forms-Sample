import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
      super(props);
      this.state = { buttonText: 'X' };
    }

    render() {
    return (
      <div>
        Text: {this.state.buttonText}
      </div>
    );
  }
}

export default Button;
