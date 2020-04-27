import React, { Component } from 'react'

export default class Table extends Component {
    state ={
        isLoading: true,
        data: [],
      }
    render() {
        return (
            <>
            <h2 className="text-uppercase text-center" >Производственные показатели</h2>
            <p className="text-uppercase text-center" >Производственные показатели ленинградской АЭС в 2019г.</p>
            </>
        )
    }
}
