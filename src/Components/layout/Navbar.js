import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import PostScream from '../scream/PostScream';
import Notifications from './Notifications';
import logo from '../../Assets/logo192.png'
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// Icons
import HomeIcon from '@material-ui/icons/Home';

class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              <PostScream />
              <Link to="/">
                <MyButton tip="Home">
                  <HomeIcon />
                </MyButton>
              </Link>
              <Notifications />
            </Fragment>
          ) : (
            <Fragment>
              <Button component={Link} to="/" >
                        <img 
                        src = {logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top App-logo-spin App-logo"
                        alt="logo"   
                        />
                    </Button>
                    <Button component={Link} color="inherit" to="/partners">Партнерам</Button>
                    <Button component={Link} color="inherit" to="/news">Новости</Button>
                    <Button component={Link} color="inherit" to="/workers">Сотрудникам</Button>
                    <Button component={Link} color="inherit" to="/calculator">Калькулятор</Button>
                    <Button component={Link} color="inherit" Style="margin-left: 550px;" to="/login" > Войти/зарегистрироваться</Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(Navbar);
