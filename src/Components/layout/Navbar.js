import logo from '../../Assets/logo192.png'
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import FolderIcon from '@material-ui/icons/Folder';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FiberNewRoundedIcon from '@material-ui/icons/FiberNewRounded';
import AddToHomeScreenRoundedIcon from '@material-ui/icons/AddToHomeScreenRounded';
import { logoutUser} from '../../redux/actions/userActions';

class Navbar extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              
              <Link to="/partners">
               <MyButton tip="Партнерам">
                  <FolderIcon/>
               </MyButton>
              </Link>
              <Link to="/news">
               <MyButton tip="Новости">
                  <FiberNewRoundedIcon/>
               </MyButton>
              </Link>
              <Link to="/">
                <MyButton tip='Главная' >
                  <img src={logo} height="30"
                      width="30"
                      className="d-inline-block align-top App-logo-spin App-logo"
                      alt="logo" 
                      
                      />
                </MyButton>
              </Link>
              <Link to="/workers">
                <MyButton tip="Работникам">
                  <AssignmentIcon />
                </MyButton>
              </Link>
              <Link to="/calculator">
                <MyButton tip="Калькулятор">
                  <AddToHomeScreenRoundedIcon/>
                </MyButton>
              </Link>
              <MyButton tip="Выйти из аккаунта" onClick={this.handleLogout} Style="margin-left:50px;" >
                <KeyboardReturn  />
              </MyButton>
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
                  <Button component={Link} color="inherit" Style="margin-left: 550px;" to="/login" > Войти</Button>
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
const mapActionsToProps = { logoutUser };

export default connect(mapStateToProps, mapActionsToProps)(Navbar);
