import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Redux
// Components
 import Navbar from './layout/Navbar';
import { MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
// import themeObject from '../util/theme';
// Pages
import Home from '../Pages/Home';
import Partners from '../Pages/Partners';
import News from '../Pages/News';
import Workers from '../Pages/Workers';
import Calculator from '../Pages/Calculator';
import Login from '../Server/Login';
import Signup from '../Server/Signup'

 const theme = createMuiTheme({
    palette: {
        primary: {
          light: '#33c9dc',
          main: '#00bcd4',
          dark: '#008394',
          contrastText: '#fff'
        },
        secondary: {
          light: '#ff6333',
          main: '#ff3d00',
          dark: '#b22a00',
          contrastText: '#fff'
        }
      },
      typography: {
        useNextVariants: true
      }
 })


export default class Header extends Component {
    render() {
        return (
                <MuiThemeProvider theme={theme}>
                        <Router>
                            <Navbar/>
                                <Switch>
                                    <Route  exact path="/" component={Home}/>
                                    <Route  exact path="/partners" component={Partners}/>
                                    <Route  exact path="/news" component={News}/>
                                    <Route  exact path="/workers" component={Workers}/>
                                    <Route  exact path="/calculator" component={Calculator}/>
                                    <Route  exact path="/login" component={Login}/>
                                    <Route  exact path="/signup" component={Signup}/>
                                </Switch>
                        </Router>
                </MuiThemeProvider>
        )
    }
}
