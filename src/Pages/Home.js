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
                                    <Nav.Link eventKey="fourth">Социальная ответственность</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Экология</Nav.Link>
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
                                    <h2 className="text-center text-uppercase social">Социальная ответственность</h2>
                                    <img src="https://www.titan2.ru/images/temp/social.jpg" width={650} className="text-center sdvig" alt="titansbor"/>
                                    <div className="social-text-wrapper">
                                        <div className="left">
                                            <div className="social-text-title">
                                                <p className="social-text-8000">8000</p>
                                                <p className="social-text-workers">работников</p>
                                            </div>
                                            <div>
                                                <p> - наш главный капитал, основа развития и конкурентоспособности.</p>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="up-title">
                                                <p>
                                                    СОЗДАЕМ
                                                    <br/>
                                                    УСЛОВИЯ
                                                    <br/>
                                                    ТРУДА
                                                </p>
                                            </div>
                                            <div className="up-text">
                                                <p>Мы считаем, что только создание таких условий труда, при которых работник твердо уверен в достойной и комфортной жизни своей семьи и спокоен за ее будущее, способствует наибольшему раскрытию трудового потенциала и росту производительности труда.</p>
                                            </div>
                                        </div>
                                        <div className="down">
                                            <div className="down-title">
                                                <p>
                                                ПОСТОЯННО
                                                <br/>
                                                СОВЕРШЕНСТВУЕМ
                                                <br/>
                                                СИСТЕМУ
                                                </p>
                                            </div>
                                            <div className="down-text">
                                                <p>Мы стремимся постоянно совершенствовать систему социально-трудовых отношений для повышения эффективности ее работы, расширяя права, гарантии и компенсации, улучшающие положение работников, проявляя заботу о здоровье коллектива и организации его досуга.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <div>
                                        <h1 className="text-center text-uppercase social">Экология</h1>
                                        <p className="descrip">Система экологического менеджмента холдинга «Атис-Строй» является частью общей системы менеджмента и соответствует международным стандартам.</p>
                                        <p>
                                            <img src="https://www.titan2.ru/images/stranicy/%D0%AD%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F.jpg" width={720} height={480} alt="Экология"/>
                                        </p>
                                        <p className="info">
                                            <span>Наши сотрудники проходят соответствующее обучение и осознают важность соответствия экологической политике, процедурам и требованиям системы экологического менеджмента.</span>
                                        </p>
                                        <p className="info">
                                            <span>В дочерних компаниях холдинга  разработана и действует процедура управления отходами. Она устанавливает порядок сбора, временного накопления, хранения и передачу на утилизацию отходов, образующихся в процессе деятельности компаний холдинга.</span>
                                        </p>
                                        <p className="info">
                                            <span>Также разработана процедура управления аварийными ситуациями, в которой прописан порядок действий по обеспечению готовности к аварийным и внештатным ситуациям в ООО «Атис-Строй».</span>
                                        </p>
                                        <p className="info">
                                            <span>Процедура мониторинга измерения экологических факторов устанавливает порядок проведения регулярного мониторинга и измерения основных характеристик видов деятельности, которые могут существенно воздействовать на окружающую среду.</span>
                                        </p>
                                        <p className="info">
                                            <span>Мы следим за тем, чтобы требований по экологической безопасности учитывались еще на стадии разработки проектов. На объектах строительства наши специалисты контролируют соблюдение требований по экологической безопасности, ведут обязательное документирование выявленных несоответствий, отслеживают их устранение. Природоохранным мероприятиям отдается безусловный приоритет.</span>
                                        </p>
                                        <h3 className="mainec">
                                            <span>Строительство новых блоков Ленинградской атомной станции</span>
                                        </h3>
                                        <p className="info">
                                            <span>В нашей компании сформировано «Положение по обеспечению экологической безопасности». Оно разработано в соответствии с требованиями природоохранного законодательства и контрактной документации на строительство.</span>
                                        </p>
                                        <h3 className="mainec">
                                            <span>Строительство финской атомной станции «Ханхикиви-1»</span>
                                        </h3>
                                        <p className="info">
                                            <span>В финском офисе холдинга «ТИТАН-2» в составе дирекции проекта создан отдел экологической безопасности и культуры ядерной безопасности. В российском филиале действует группа по экологической и промышленной безопасности. Воздействие на окружающую среду учитывается на всех этапах строительства.</span>
                                        </p>
                                    </div>
                                    
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
