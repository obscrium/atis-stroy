import React, { Component } from 'react';
import { Container, Nav, Col, Row, Tab, Form, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';
import Blog from '../Components/Blog';
import Dirboard from '../Components/Dirboard';
import Table from '../Components/Table';


export default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox />
            <Container>
                <Tab.Container id ="ledt-tabs" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column normal">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Руководство</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Производственные показатели</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Новости</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Безопасность</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Партнерам</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">Контакты</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Dirboard/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Table/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                   <Blog/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">

                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth" className="text-center">
                                <h1>Свяжитесь с нами</h1>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Введите email"/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control as="textarea" rows="3"/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Проверить"/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">Отправить</Button>
                                </Form>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
            </>
        )
    }
}
