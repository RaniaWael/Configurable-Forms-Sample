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
      <div style = { styles.divStyling }>
        <button style = { styles [ this.handleHovering() ] } onMouseEnter = { this.toggleHover }
        onMouseLeave = { this.toggleHover }> { this.props.text } </button>
      </div>
    );
  }
}

const styles = {
  divStyling: {
    width: '100%',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center'
  },
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
