import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
      super(props);
      this.state = { hovered: false };
    }

    toggleHover = () => {
      this.setState({ hovered: !this.state.hovered });
      this.handleHovering();
    }

    handleHovering () {
      if (this.state.hovered === true) {
        return 'btnHover';
      }
      else return 'btnStyling';
    }

    render() {
    return (
      <button style = { styles [ this.handleHovering() ] } onMouseEnter = { this.toggleHover }
      onMouseLeave = { this.toggleHover }> { this.props.text } </button>
    );
  }
}

const styles = {
  btnStyling: {
    borderColor: '#47a298',
    color: '#47a298',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: '8px',
    padding: '10px',
    fontSize: '18pt',
    fontWeight: 'bold',
    fontFamily: 'monospace'
  },

  btnHover: {
    borderColor: '#47a298',
    color: '#ffffff',
    backgroundColor: '#47a298',
    borderRadius: '8px',
    padding: '10px',
    fontSize: '18pt',
    fontWeight: 'bold',
    fontFamily: 'monospace'
  }
};

export default Button;
