import React, { Component } from 'react'
/* MUI */
import { Typography, Grid, Button, Card } from '@mui/material'


export default class App extends Component {
    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h1'>Components</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <Typography variant='h4'>title</Typography>
                        <Typography variant='h4'>title</Typography>
                        <Typography variant='h4'>title</Typography>
                        <Button>Test</Button>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <Typography variant='h4'>title</Typography>
                        <Typography variant='h4'>title</Typography>
                        <Typography variant='h4'>title</Typography>
                        <Button>Test</Button>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}
