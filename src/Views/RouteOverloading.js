import React, { Component } from 'react'
import { Grid, Card, Typography } from '@mui/material'
/* INT */
import ViewContainer from '../Components/View/ViewContainer'

export default class RouteOverloading extends Component {

    render() {
        return (
            <ViewContainer title={this.props.title}>
                <Grid item xs={12}>
                    <Typography variant='h6'> See! There's no side navigation for this route :)</Typography>
                    <Typography variant='h6'> We just changed the props passed to the react-router 'route'</Typography>
                </Grid>
            </ViewContainer>
        )
    }
}