import React, { Component } from 'react'
import { Navbar, 
        Nav, 
        Container } from 'react-bootstrap'
import logo from './logo192.png'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Partners from '../Pages/Partners'
import Sharers from '../Pages/Sharers'
import Workers from '../Pages/Workers'
import Calculator from '../Pages/Calculator'




export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img 
                        src = {logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top App-logo-spin App-logo"
                        alt="logo"   
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav classname="ar-auto">
                            <Nav.Link href="/partners">Партнерам</Nav.Link>
                            <Nav.Link href="/sharers">Акционерам</Nav.Link>
                            <Nav.Link href="/workers">Сотрудникам</Nav.Link>
                            <Nav.Link href="/calculator">Калькулятор</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <Router>
                    <Switch>
                        <Route  exact path="/" component={Home}/>
                        <Route  exact path="/partners" component={Partners}/>
                        <Route  exact path="/sharers" component={Sharers}/>
                        <Route  exact path="/workers" component={Workers}/>
                        <Route  exact path="/calculator" component={Calculator}/>
                        
                    </Switch>
                </Router>
            </>
        )
    }
}
