import React, { Component } from 'react';
import { Row, Media } from 'react-bootstrap';


export default class Blog extends Component {
    render() {
        return (
            <Row>
                <Media className="m-5">
                    <img
                    width={200}
                    height={150}
                    alt="Ну вот"
                    className="mr-3"
                    src="https://www.titan2.ru/images/novosti/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0_%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%B8%D1%85_%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B9_%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0.jpg"
                    />
                    <Media.Body>
                    <h5>О выигрыше в конкурсе</h5>
                    <p> КОНЦЕРН ТИТАН-2» ВЫИГРАЛ КОНКУРС НА ВЫПОЛНЕНИЕ ПРОЕКТНО-ИЗЫСКАТЕЛЬСКИХ РАБОТ ПО СОЗДАНИЮ «ЦЕНТРА ВЫСОКИХ ТЕХНОЛОГИЙ ФГБУ «НМИЦ ХИРУРГИИ ИМЕНИ А.В. ВИШНЕВСКОГО </p>
                    </Media.Body>
                </Media>
                <Media className="m-5">
                    <img
                    width={200}
                    height={150}
                    alt="Ну вот"
                    className="mr-3"
                    src="https://www.titan2.ru/images/novosti/%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6_%D0%B2%D0%B5%D0%BD%D0%BD%D1%82%D1%80%D1%83%D0%B1%D1%8B_15.04.2020.jpg"
                    />
                    <Media.Body>
                    <h5>Монтаж</h5>
                    <p> СПЕЦИАЛИСТЫ СМУ-2 АО «КОНЦЕРН ТИТАН-2» ЗАКАНЧИВАЮТ МОНТАЖ ВЕНТИЛЯЦИОННОЙ ТРУБЫ ЗДАНИЙ РЕАКТОРНОГО ОСТРОВА НА ВТОРОМ ЭНЕРГОБЛОКЕ ЛАЭС-2 </p>
                    </Media.Body>
                </Media>
                <Media className="m-5">
                    <img
                    width={200}
                    height={150}
                    alt="Ну вот"
                    className="mr-3"
                    src="https://www.titan2.ru/images/novosti/%D0%A2%D0%B5%D1%80%D0%BC%D0%BE%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B8_2_%D0%B1%D0%BB%D0%BE%D0%BA_%D0%BC%D0%B0%D1%80%D1%82_2020.jpg"
                    />
                    <Media.Body>
                    <h5>ЛАЭС-2</h5>
                    <p> НА СТРОИТЕЛЬНОЙ ПЛОЩАДКЕ ВТОРОГО ЭНЕРГОБЛОКА ЛАЭС-2 ПРОДОЛЖАЕТСЯ ОБЛИЦОВКА ЗДАНИЯ РЕАКТОРА ТЕРМОПАНЕЛЯМИ </p>
                    </Media.Body>
                </Media>
                <Media className="m-5">
                    <img
                    width={200}
                    height={150}
                    alt="Ну вот"
                    className="mr-3"
                    src="https://www.titan2.ru/images/novosti/%D0%93%D0%9C_%D0%9D%D0%B0%D0%B3%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%BC%D0%B0%D1%80%D1%82_2020.jpg"
                    />
                    <Media.Body>
                    <h5>Юбилей</h5>
                    <p> ХОЛДИНГУ "ТИТАН-2" ИСПОЛНИЛОСЬ 25 ЛЕТ </p>
                    </Media.Body>
                </Media>
                <Media className="m-5">
                    <img
                    width={200}
                    height={150}
                    alt="Ну вот"
                    className="mr-3"
                    src="https://www.titan2.ru/images/novosti/%D0%92%D0%9A%D0%A1_%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BE%D1%82%D1%80%D1%8F%D0%B4%D1%8B_18.02.2020.jpg"
                    />
                    <Media.Body>
                    <h5>День студенческих отрядов</h5>
                    <p> ГЕНЕРАЛЬНЫЙ ДИРЕКТОР АО «КОНЦЕРН ТИТАН-2» ГРИГОРИЙ НАГИНСКИЙ ПРИНЯЛ УЧАСТИЕ В ВИДЕОКОНФЕРЕНЦИИ, ПОСВЯЩЕННОЙ ДНЮ РОССИЙСКИХ СТУДЕНЧЕСКИХ ОТРЯДОВ </p>
                    </Media.Body>
                </Media>
                <Media className="m-5">
                    <img
                    width={200}
                    height={150}
                    alt="Ну вот"
                    className="mr-3"
                    src="https://www.titan2.ru/images/novosti/%D0%A0%D0%BE%D1%82%D0%BE%D1%80_%D0%A6%D0%9D%D0%94_16.01.2020.jpg"
                    />
                    <Media.Body>
                    <h5>Вернёмся к проверкам</h5>
                    <p> ТУРБОАГРЕГАТ ВТОРОГО ЭНЕРГОБЛОКА ЛЕНИНГРАДСКОЙ АЭС-2 ПРОХОДИТ ПРОВЕРКУ ПОСЛЕ ПОСТАНОВКИ НА ВАЛОПОВОРОТ </p>
                    </Media.Body>
                </Media>

            </Row>
        )
    }
}
