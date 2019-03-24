/* Imports */
import React, { Component } from 'react';
import Logo from '../images/SumergeLogo.png';
import Bar from '../images/SumergeBar.png';

/* Definig the class */
class Header extends Component {
  constructor(props) {
      super(props);
    }

    /* The View is rendered from here */
    /* Only 1 parent div should be returned at the end */
    render() {
    return (

      <div style = { styles.divStyle }>

        <img src = { Logo } style = { styles.logoStyle } />

        <div style = { styles.titleStyle }>
          <text style = { styles.titleTextStyle }> Internship Form </text>
        </div>

        <div style = { styles.infoStyle }>
          <text style = { styles.infoTextStyle }> 75/77 Street 199, Maadi, </text>
          <br />
          <text style = { styles.infoTextStyle }> Cairo, Egypt PO Box 11435 </text>
          <br />
          <text style = { styles.infoTextStyle }> t +20 2 2754 5823 </text>
          <br />
          <text style = { styles.infoTextStyle }> f +20 2 2754 5833 </text>
          <br />
          <text style = { styles.infoTextStyle }> info@sumerge.com </text>
          <br />
          <text style = { styles.infoTextStyle }> www.sumerge.com </text>
        </div>

        <img src = { Bar } style = { styles.barStyle } />
      </div>
    );
  }
}

/* Constant variable for the styling */
const styles = {
  divStyle: {
    margin: '25px',
    display: 'flex',
    alignItems: 'center'
  },

  logoStyle: {
    width: '15%',
    height: '15%',
    display: 'inline-block'
  },

  titleStyle: {
    display: 'flex',
    flex: 3,
    justifyContent: 'center'
  },
  titleTextStyle: {
    color: '#47a298',
    fontSize: '24px',
    fontWeight: 'bold'
  },

  infoStyle: {
    marginRight: '15px',
    display: 'inline-block'
  },

  infoTextStyle: {
    color: '#777777',
    fontSize: '12px',
  },

  barStyle: {
    width: '0.45%',
    display: 'inline-block'
  }
};

/* Exported Component */
export default Header;
