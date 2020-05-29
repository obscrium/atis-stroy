import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';


import Scream from '../Components/scream/Scream';
import ScreamSkeleton from '../util/ScreamSkeleton';
// Redux
import { connect } from 'react-redux';
import { getScreams } from '../redux/actions/dataActions';

class Workers extends Component {
  componentDidMount() {
    this.props.getScreams();
  }
  render() {
    const { screams, loading } = this.props.data;
    let recentScreamsMarkup = !loading ? (
      screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <ScreamSkeleton />
    );
    return (
      <Grid container  Style="margin-top: 50px;">
        <Grid item sm={12} xs={8}>
          {recentScreamsMarkup}
        </Grid>
        
      </Grid>
    );
  }
}
Workers.propTypes = {
    getScreams: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    data: state.data
  });
  
  export default connect(
    mapStateToProps,
    { getScreams }
  )(Workers);
