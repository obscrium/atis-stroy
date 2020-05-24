import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

export default class Workers extends Component {
    state = {
        screams: null
    }
    componentDidMount() {
        axios.get('/screams')
        .then(res => {
            this.setState({
                screams: res.data
            })
        })
    }
    render() {
        return (
            <Grid container spacing={16}>
                <Grid item sm={8} xs={12}>
                    <p>Content...</p>
                </Grid>
                <Grid item sm={8} xs={12}>
                    <p>Profile...</p>
                </Grid>
            </Grid>
        )
    }
}

// 4:53:15 post card
