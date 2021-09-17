import React, { Component } from 'react'
/* MUI */
import Grid from '@mui/material/Grid'
import LinearProgress from '@mui/material/LinearProgress'
/* INT */
import ViewHeader from './ViewHeader'

export default class ViewContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <ViewHeader title={this.props.title} subtitle={this.props.subtitle} />
                {this.props.loading ? <LinearProgress /> :
                    <Grid container spacing={3}>
                        {!this.props.loading && this.props.children}
                    </Grid>
                }
            </React.Fragment>
        )
    }
}
