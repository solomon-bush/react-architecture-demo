import { Grid, Card, CardHeader, Stack, Button, CardContent, Divider } from '@mui/material'
import React, { Component } from 'react'
/* INT */
import ViewContainer from '../Components/View/ViewContainer'

export default class GlobalHandlers extends Component {

    handleButtonClick = (e) => window.alert(`${e.target.id}`)
    render() {
        return (
            <ViewContainer title={this.props.title}>
                <Grid item xs={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardHeader title='Buttons' />
                        <CardContent>
                            <Stack divider={<Divider />} direction='row' spacing={4}>
                                <Button fullWidth id='one' variant='contained' onClick={this.handleButtonClick}>ONE</Button>
                                <Button fullWidth id='two' variant='outlined' onClick={this.handleButtonClick}>TWO</Button>
                                <Button fullWidth id='three' variant='text' onClick={this.handleButtonClick}>THREE</Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{ height: '100%' }} variant='outlined'>
                        <CardHeader title='Button Handler' />
                        <CardContent>
                            <pre>
                                {
                                // eslint-disable-next-line
                                'handleButtonClick = (e) => window.alert(`${e.target.id}`)'
                                }
                            </pre>
                        </CardContent>
                    </Card>
                </Grid>

            </ViewContainer>
        )
    }
}