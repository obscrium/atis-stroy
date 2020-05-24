import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo192.png';
import PropTypes from 'prop-types';

// MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

// import { connect } from 'react-redux';
// Icons
import HomeIcon from '@material-ui/icons/Home';



 export default class Navbar extends Component {
    render() {
        return (
            <AppBar >
                <Toolbar > 
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

                </Toolbar>
            </AppBar>
        )
    }
}
Navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired
  };
  
  const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
  });
// export default connect(mapStateToProps)(Navbar);