import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import store from '../redux/store';
import { SET_AUTHENTICATED} from '../redux/types'
import { logoutUser, getUserData} from '../redux/actions/userActions'
// Components
 import Navbar from './layout/Navbar';
import { MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
 import AuthRoute from '../util/AuthRoute'
// Pages
import Home from '../Pages/Home';
import Partners from '../Pages/Partners';
import News from '../Pages/News';
import User from '../Server/User';
import Workers from '../Pages/Workers';
import Calculator from '../Pages/Calculator';
import Login from '../Server/Login';
import Signup from '../Server/Signup'
import axios from 'axios';
import { amber, indigo } from "@material-ui/core/colors";

 axios.defaults.baseURL= 'http://localhost:5000/atis-react/europe-west3/api';
 const theme = createMuiTheme({ 
  palette: {
    primary: indigo,
    secondary: amber
  },
  
    typography: {
      useNextVariants: true
    }
 });

 const token = localStorage.FBIdToken;
 if (token) {
   const decodedToken = jwtDecode(token);
   if (decodedToken.exp * 1000 < Date.now()) {
     store.dispatch(logoutUser());
     window.location.href = '/login';
   } else {
     store.dispatch({ type: SET_AUTHENTICATED });
     axios.defaults.headers.common['Authorization'] = token;
     store.dispatch(getUserData());
   }
 }
  

export default class Header extends Component {
    render() {
        return (
                <MuiThemeProvider theme={theme}>
                  <Provider store={store}>
                        <Router>
                            <Navbar/>
                                <Switch>
                                    <Route  exact path="/" component={Home}/>
                                    <Route  exact path="/partners" component={Partners}/>
                                    <Route  exact path="/news" component={News}/>
                                    <Route  exact path="/workers" component={Workers}/>
                                    <Route  exact path="/calculator" component={Calculator}/>
                                    <Route  exact path="/users/:handle" component={User}/>
                                    <Route  exact path="/users/:handle/scream/:screamId" component={User}/>
                                    <AuthRoute  exact path="/login" component={Login}/>
                                    <AuthRoute  exact path="/signup" component={Signup}/>
                                </Switch>
                        </Router>
                  </Provider>
                </MuiThemeProvider>
        )
    }
}
