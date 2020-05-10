import React, { Component } from 'react';
import { Container, Button} from 'react-bootstrap';
import '../Input.css';

export default class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value : '',
            secondValue: '',
            currentNumber: '',
            sumQuadro :  '',
            sumMeters: '',
            salt: 130,
            wall: 150,
            facadePlaster: 400,
            facadePutty: 220,
            avd: 50,
            hydrophobis: 70,
            overhaul: 560,
            sealingInterpanelSeams: 100,
            sealingInterpanelSlops: 355,
            windowInstallation: 100,
            porcelain: 1200,
            compositePanel: 1100,
            metalSiding: 650,
            plasticPanel: 450,
            sandwichPanel: 400,
            naturalStone: 1100,
            izover: 50,
            roquel100: 100,
            roquel150: 130,
            thermalpolystyrene: 100
        }
    }
    
    buttonPressed = val => {
        this.setState({sumQuadro: this.state.sumQuadro + val})
    }
    evaluate = () => {
        this.state.currentNumber = this.state.evaluate
        this.setState({
            sumQuadro:
            parseInt(this.handleOnChange.value) *
            parseInt(this.state.salt)
        })
    }
    sumOfQuadro = val => {
        this.setState({sumQuadro: this.state.sumQuadro + val})
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
                                            <input type="number" id="total-cost"  value={this.state.value} ></input>
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
                                        <Button handleClick={this.evaluate} Style="margin-left:160px;"> Рассчитать</Button>
                                    </div>
                                    
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                <div className="calculator-content-title">
                                    <h2>Выбрать материал</h2>
                                </div>
                                <div  className="calculator-content-body-left-btns">
                                    <label   className="material active">
                                        <input type="checkbox"  id="salt" handleClick={this.buttonPressed}/>
                                        Удаление солей
                                         {this.state.salt} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Покраска стен
                                         {this.state.wall} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Штукатурка фасада
                                        {this.state.facadePlaster} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Шпатлевка фасада
                                        {this.state.facadePutty} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Грунтовка аппаратом высокого давления(АВД)
                                        {this.state.avd} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Гидроизоляция(гидрофобизация) поверхности
                                        {this.state.hydrophobis} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Капитальный ремонт фасада
                                        {this.state.overhaul} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Герметизация межпанельных швов
                                        {this.state.sealingInterpanelSeams} ₽/ м. п.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Герметизация межпанельных откосов
                                        {this.state.sealingInterpanelSlops} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Монтаж оконных отливов
                                        {this.state.windowInstallation} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Монтаж керамогранита с обрешеткой
                                        {this.state.porcelain} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Монтаж композитных панелей
                                        {this.state.compositePanel} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Монтаж металлического сайдинга
                                        {this.state.metalSiding} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Монтаж пластиковых цокольных панелей с обрешеткой
                                        {this.state.plasticPanel} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Облицовка сэндвич-панелями на готовый каркас
                                        {this.state.sandwichPanel} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Облицовка натуральным камнем
                                        {this.state.naturalStone} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Монтаж теплоизоляции типа «Изовер»
                                        {this.state.izover} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Монтаж теплоизоляции типа «Рокуел -100 мм» {this.state.roquel100} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Монтаж теплоизоляции типа «Рокуел -150 мм»
                                        {this.state.roquel150} ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input type="checkbox" />
                                        Монтаж теплоизоляции плитами типа полистирол, пенопласт
                                        {this.state.thermalpolystyrene} ₽/ кв. м.
                                    </label>
                                </div>
                            </form>
                            </div>
                            
                            <div className="calculator-content-body-right">
                                <div className="final-results-wraper">
                                    <div className="final-result-item">
                                        Cумма при выборе пунктов с кв.м
                                        <div className="value" id="sumQuadro"  ><span >{this.state.sumQuadro}₽</span></div>
                                    </div>
                                    <div className="final-result-item">
                                        Cумма при выборе пунктов с м.п. 
                                        <div className="value" id="sumMeters">{this.state.sumMeters}<span>₽</span></div>
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
