import React, { Component } from 'react';
import { Container, Button} from 'react-bootstrap';
import '../Input.css';

export default class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: false,
            quadroValue : 0,
            sumQuadro :  0,
            salt: 0,
            wall: 0,
            facadePlaster: 0,
            facadePutty: 0,
            avd: 0,
            hydrophobis: 0,
            overhaul: 0,
            sealingInterpanelSlops: 0,
            windowInstallation: 0,
            porcelain: 0,
            compositePanel: 0,
            metalSiding: 0,
            plasticPanel: 0,
            sandwichPanel: 0,
            naturalStone: 0,
            izover: 0,
            roquel100: 0,
            roquel150: 0,
            thermalpolystyrene: 0
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.inputPressed = this.inputPressed.bind(this);
        this.evaluate = this.evaluate.bind(this);
    }
    
    inputPressed =(event) => {
        let isChecked = this.state.isChecked
        if(event.target) {
            this.setState({isChecked : !isChecked})
        }
        let name = event.target.name
        this.setState({[name] : event.target.value})
       
    }
    handleOnChange = (e) => this.setState({quadroValue: e.target.value})
    
    evaluate = (event) => {
        let setQuadro = (this.state.quadroValue * this.state.salt) + (this.state.quadroValue * this.state.wall) + (this.state.quadroValue * this.state.facadePlaster) + (this.state.quadroValue * this.state.facadePutty) + (this.state.quadroValue * this.state.avd) + (this.state.quadroValue * this.state.hydrophobis) + (this.state.quadroValue  * this.state.overhaul) + (this.state.quadroValue * this.state.sealingInterpanelSlops) + (this.state.quadroValue  * this.state.windowInstallation) + (this.state.quadroValue * this.state.porcelain) + (this.state.quadroValue * this.state.compositePanel)  + (this.state.quadroValue * this.state.metalSiding) + (this.state.quadroValue * this.state.plasticPanel) + (this.state.quadroValue * this.state.sandwichPanel) + (this.state.quadroValue * this.state.naturalStone) + (this.state.quadroValue * this.state.izover) + (this.state.quadroValue * this.state.roquel100) + (this.state.quadroValue * this.state.roquel150) + (this.state.quadroValue * this.state.thermalpolystyrene)
        this.setState({ sumQuadro: setQuadro})
        event.preventDefault()
        }
    

    render() {
        return (
            <>
                <Container>
                    <div className="flex-wrapper">
                        <div className="calculator-content">
                            <div className="сalculator-content-title">
                                <h1 className="text-center">Рассчитать стоимость фасадной работы</h1>
                            </div>
                            <form onSubmit={this.evaluate}>
                        <div className="calculator-content-body">
                            <div className="calculator-content-body-left">
                                <div className="calculator-content-body-left-inputs">
                                    <div className="input-wrapper">
                                        <div className="title text-center">Количество квадратных метров </div>
                                        <div className="input">
                                            <input type="number" id="total-cost"  value={this.state.quadroValue} min={0} max={350} onChange={this.handleOnChange}></input>
                                        </div>
                                        <div className="input">
                                            <input type="range"  id="total-cost" min={0} max={350}  value={this.state.quadroValue}  onChange={this.handleOnChange}></input>
                                        </div>
                                    </div>
                                        <Button type="submit" onClick={() => this.evaluate} Style="margin-left:160px;"> Рассчитать</Button>
                                    
                                </div>
                                <div className="calculator-content-title">
                                    <h2>Выбрать материал</h2>
                                </div>
                                <div  className="calculator-content-body-left-btns">
                                    <label   className="material active">
                                        <input  type="checkbox"  name="salt"  onChange={this.inputPressed} value={130} id="salt" />
                                        Удаление солей
                                         130 ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input name="wall" type="checkbox"   onChange={this.inputPressed} value={150} />
                                        Покраска стен
                                         150 ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input name="facadePlaster" type="checkbox"   onChange={this.inputPressed} value={400}/>
                                        Штукатурка фасада
                                        400 ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input name="facadePutty" type="checkbox"   onChange={this.inputPressed} value={220}/>
                                        Шпатлевка фасада
                                        220 ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input name="avd" type="checkbox"   onChange={this.inputPressed} value={50}/>
                                        Грунтовка аппаратом высокого давления(АВД)
                                        50 ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input name="hydrophobis" type="checkbox"   onChange={this.inputPressed} value={70}/>
                                        Гидроизоляция(гидрофобизация) поверхности
                                        70 ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input name="overhaul" type="checkbox"   onChange={this.inputPressed} value={560}/>
                                        Капитальный ремонт фасада
                                        560 ₽/ кв. м.
                                    </label>
                                   
                                    <label   className="material active">
                                        <input name="sealingInterpanelSlops" type="checkbox"   onChange={this.inputPressed} value={355}/>
                                        Герметизация межпанельных откосов
                                        355 ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input name="windowInstallation" type="checkbox"   onChange={this.inputPressed} value={100}/>
                                        Монтаж оконных отливов
                                        100 ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input name="porcelain" type="checkbox"   onChange={this.inputPressed} value={1200}/>
                                        Монтаж керамогранита с обрешеткой
                                        1200 ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input name="compositePanel" type="checkbox"   onChange={this.inputPressed} value={1100}/>
                                        Монтаж композитных панелей
                                        1100 ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input name="metalSiding" type="checkbox"   onChange={this.inputPressed} value={650}/>
                                        Монтаж металлического сайдинга
                                        650 ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input name="plasticPanel" type="checkbox"   onChange={this.inputPressed} value={450}/>
                                        Монтаж пластиковых цокольных панелей с обрешеткой
                                        450 ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input name="sandwichPanel" type="checkbox"   onChange={this.inputPressed} value={400}/>
                                        Облицовка сэндвич-панелями на готовый каркас
                                        400 ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input name="naturalStone" type="checkbox"   onChange={this.inputPressed} value={1100}/>
                                        Облицовка натуральным камнем
                                        1100 ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input name="izover" type="checkbox"   onChange={this.inputPressed} value={50}/>
                                        Монтаж теплоизоляции типа «Изовер»
                                        50 ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input name="roquel100" type="checkbox"   onChange={this.inputPressed} value={100} />
                                        Монтаж теплоизоляции типа «Рокуел -100 мм» 100 ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input name="roquel150" type="checkbox"   onChange={this.inputPressed} value={130}/>
                                        Монтаж теплоизоляции типа «Рокуел -150 мм»
                                        130 ₽/ кв. м.
                                    </label>
                                    <label   className="material active">
                                        <input name="thermalpolystyrene" type="checkbox"   onChange={this.inputPressed} value={1100}/>
                                        Монтаж теплоизоляции плитами типа полистирол, пенопласт
                                        1100 ₽/ кв. м.
                                    </label>
                                </div>
                            </div>
                            
                            <div className="calculator-content-body-right">
                                <div className="final-results-wraper">
                                    <div className="final-result-item">
                                        Cумма при выборе пунктов с кв.м
                                        <div className="value" id="sumQuadro"  ><span > {this.state.sumQuadro}₽</span></div>
                                    </div>
                                    
                                    </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </>
        )
    }
}
