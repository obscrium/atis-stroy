import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        return (
            <>
            <h2 className="text-uppercase text-center" >Производственные показатели</h2>
            <p className="text-uppercase text-center" >Производственные показатели ленинградской АЭС в 2019г.</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Показатели</th>
                        <th>Единицы измерения</th>
                        <th>Значения</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Заработано денег в 2019г.</td>
                        <td>млн руб</td>
                        <td>23623</td>
                    </tr>
                    <tr>
                        <td>По отношению к  2018 г.</td>
                        <td>%</td>
                        <td>99</td>
                    </tr>
                    <tr>
                        <td>Выполнение задания ФАС России в 2019 г.</td>
                        <td>%</td>
                        <td>150,42</td>
                    </tr>
                    <tr>
                        <td>КИУМ в 2019 г.</td>
                        <td>%</td>
                        <td>88,88</td>
                    </tr>
                </tbody>
            </table>
            </>
        )
    }
}
