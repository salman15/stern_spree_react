import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
  loadingContainer: {
    justifyContent: 'space-around',
    display: 'flex',
    marginTop: '30vh'
  },
});

class Loading extends React.Component {
   constructor(props) {
    super(props);
    const { classes } = props;
    this.state = {
      classes
    };
  }
  render () {
    return (
      <React.Fragment>
        <div className={this.state.classes.loadingContainer}>
          <CircularProgress className={this.state.classes.progress} />
        </div>
      </React.Fragment>
    );
  }
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loading);
