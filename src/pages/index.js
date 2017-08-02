// @flow

import React, { Component } from 'react';
import withRoot from '../components/withRoot';
import Header from '../components/header';
import Experience from '../components/experience';
import Links from '../components/links';

const styles = {
  container: {
      flexGrow: 1,
      marginTop: 30,
      textAlign: 'center'
  },
  grid: {
  }
};

class Index extends Component {
  state = {
    open: false,
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <Header />
        <Links />
        <Experience />
      </div>
    );
  }
}

export default withRoot(Index);
