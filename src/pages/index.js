// @flow

import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import withRoot from '../components/withRoot';
import Header from '../components/header';
import Experience from '../components/experience';
import Projects from '../components/projects';

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
        <Projects />
        <Experience />
      </div>
    );
  }
}

export default withRoot(Index);
