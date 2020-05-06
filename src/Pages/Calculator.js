import React, { Component } from 'react';
import { Container, option} from 'react-bootstrap';
import '../Input.css';

export default class Calculator extends Component {
    state = {
        value : 50,
        secondValue: 50
    }
    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }
    handleOnChange = (e) => this.setState({value: e.target.value})
    secondHandleOnChange = (e) => this.setState({secondValue: e.target.value})

    render() {
        return (
            <>
                <Container>
                    <div className="flex-wrapper">
                        <div className="calculator-content">
                            <div className="сalculator-content-title">
                                <h1 className="text-center">Рассчитать стоимость фасадной работы</h1>
                            </div>
                        <div className="calculator-content-body">
                            <div className="calculator-content-body-left">
                                <div className="calculator-content-body-left-inputs">
                                    <div className="input-wrapper">
                                        <div className="title">Количество квадратных метров </div>
                                        <div className="input">
                                            <input type="number" id="total-cost" value={this.state.value} ></input>
                                        </div>
                                        <div className="input">
                                            <input type="range"  id="total-cost" min={0} max={235}    onChange={this.handleOnChange}></input>
                                        </div>
                                    </div>
                                    <div className="input-wrapper">
                                        <div className="title">Количество погонных метров</div>   
                                        <div className="input">
                                            <input type="number" id="an-fee" value={this.state.secondValue}></input>
                                        </div>
                                        <div className="input">
                                            <input type="range" id="an-fee" min={0} max={235}    onChange={this.secondHandleOnChange}></input>
                                        </div>
                                    </div>
                                    
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                <div className="calculator-content-title">
                                    <h2>Выбрать материал</h2>
                                </div>
                                <select value={['a','b']} multiple={true} className="calculator-content-body-left-btns">
                                    <option   className="material active">
                                        <div className="text">Удаление солей</div>
                                        <div className="value">180 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Покраска стен</div>
                                        <div className="value">150 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Штукатурка фасада</div>
                                        <div className="value">400 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Шпатлевка фасада</div>
                                        <div className="value">220 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Грунтовка аппаратом высокого давления(АВД)</div>
                                        <div className="value">50 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Гидроизоляция(гидрофобизация) поверхности</div>
                                        <div className="value">70 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Капитальный ремонт фасада</div>
                                        <div className="value">560 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Герметизация межпанельных швов</div>
                                        <div className="value">100 ₽/ м. п.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Герметизация межпанельных откосов</div>
                                        <div className="value">355 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Монтаж оконных отливов</div>
                                        <div className="value">100 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Монтаж керамогранита с обрешеткой</div>
                                        <div className="value">1200 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Монтаж композитных панелей</div>
                                        <div className="value">1100 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Монтаж металлического сайдинга</div>
                                        <div className="value">650 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Монтаж пластиковых цокольных панелей с обрешеткой</div>
                                        <div className="value">450 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Облицовка сэндвич-панелями на готовый каркас</div>
                                        <div className="value">400 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Облицовка натуральным камнем</div>
                                        <div className="value">1100 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Монтаж теплоизоляции типа «Изовер»</div>
                                        <div className="value">50 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">ММонтаж теплоизоляции типа «Рокуел -100 мм»</div>
                                        <div className="value">100 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Монтаж теплоизоляции типа «Рокуел -150 мм»</div>
                                        <div className="value">130 ₽/ кв. м.</div>
                                    </option>
                                    <option   className="material active">
                                        <div className="text">Монтаж теплоизоляции плитами типа полистирол, пенопласт</div>
                                        <div className="value">100 ₽/ кв. м.</div>
                                    </option>
                                </select>
                                </form>
                            </div>
                            <div className="calculator-content-body-right">
                                <div className="final-results-wraper">
                                    <div className="final-result-item">
                                        <div className="text">Cумма при выборе пунктов с кв.м</div>
                                        <div className="value" id="sum">130<span>₽</span></div>
                                    </div>
                                    <div className="final-result-item">
                                        <div className="text">Cумма при выборе пунктов с м.п.</div>
                                        <div className="value" id="sum">130<span>₽</span></div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </Container>
            </>
        )
    }
}
