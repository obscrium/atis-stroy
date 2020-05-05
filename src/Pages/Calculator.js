import React, { Component } from 'react';
import { Container, Button} from 'react-bootstrap';
import '../Input.css';

export default class Calculator extends Component {
    state = {
        value : 50,
        secondValue: 50,
        thirdValue: 50
    }
    handleOnChange = (e) => this.setState({value: e.target.value})
    secondHandleOnChange = (e) => this.setState({secondValue: e.target.value})
    thirdHandleOnChange = (e) => this.setState({thirdValue: e.target.value})
    render() {
        return (
            <>
                <Container>
                    <div className="flex-wrapper">
                        <div className="calculator-content">
                            <div className="сalculator-content-title">
                                <h1>Рассчитать стоимость ремонта</h1>
                            </div>
                        <div className="calculator-content-body">
                            <div className="calculator-content-body-left">
                                <div className="calculator-content-body-left-inputs">
                                    <div className="input-wrapper">
                                        <div className="title">Стоимость ремонта/установки</div>
                                        <div className="input">
                                            <input type="number" id="total-cost" value={this.state.value} ></input>
                                        </div>
                                        <div className="input">
                                            <input type="range"  id="total-cost" min={0} max={235}    onChange={this.handleOnChange}></input>
                                        </div>
                                    </div>
                                    <div className="input-wrapper">
                                        <div className="title">Стоимость чего-то №2</div>   
                                        <div className="input">
                                            <input type="number" id="an-fee" value={this.state.secondValue}></input>
                                        </div>
                                        <div className="input">
                                            <input type="range" id="an-fee" min={0} max={235}    onChange={this.secondHandleOnChange}></input>
                                        </div>
                                    </div>
                                    <div className="input-wrapper">
                                        <div className="title">Стоимость чего-то №3</div>
                                        <div className="input">
                                            <input type="number" id="an-fee3" value={this.state.thirdValue}></input>
                                        </div>
                                        <div className="input">
                                            <input type="range" min={0} max={235}    onChange={this.thirdHandleOnChange}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="calculator-content-title">
                                    <h2>Выбрать материал</h2>
                                </div>
                                <div className="calculator-content-body-left-btns">
                                    <Button data-name="alfa" className="material active">
                                        <div className="text">Материал</div>
                                        <div className="value">130rub/m^2</div>
                                    </Button>
                                    <Button data-name="alfa" className="material active">
                                        <div className="text">Материал</div>
                                        <div className="value">130rub/m^2</div>
                                    </Button>
                                    <Button data-name="alfa" className="material active">
                                        <div className="text">Материал</div>
                                        <div className="value">130rub/m^2</div>
                                    </Button>
                                    <Button data-name="alfa" className="material active">
                                        <div className="text">Материал</div>
                                        <div className="value">130rub/m^2</div>
                                    </Button>
                                    <Button data-name="alfa" className="material active">
                                        <div className="text">Материал</div>
                                        <div className="value">130rub/m^2</div>
                                    </Button>
                                    <Button data-name="alfa" className="material active">
                                        <div className="text">Материал</div>
                                        <div className="value">130rub/m^2</div>
                                    </Button>
                                </div>
                            </div>
                            <div className="calculator-content-body-right">
                                <div className="final-results-wraper">
                                    <div className="final-result-item">
                                        <div className="text">Cумма №1</div>
                                        <div className="value" id="sum">130<span>rub/m^2</span></div>
                                    </div>
                                    <div className="final-result-item">
                                        <div className="text">Cумма №2</div>
                                        <div className="value" id="sum">130<span>rub/m^2</span></div>
                                    </div>
                                    <div className="final-result-item">
                                        <div className="text">Cумма №3</div>
                                        <div className="value" id="sum">130<span>rub/m^2</span></div>
                                    </div>
                                    <div className="final-result-item">
                                        <div className="text">Cумма №4</div>
                                        <div className="value" id="sum">130<span>rub/m^2</span></div>
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
