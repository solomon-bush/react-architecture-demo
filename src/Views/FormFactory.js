import { Grid, Card, CardContent, CardHeader, TextField, Divider, Button, Stack } from '@mui/material'
import React, { Component } from 'react'
/* INT */
import ViewContainer from '../Components/View/ViewContainer'

export default class FormFactory extends Component {

    constructor(props) {
        super(props)

        this.state = {
            variant: 'outlined',
            fullWidth: true,
            size: 'small',
            margin: 'dense',
            name: '',
            favColor: '',
            favMovie: ''
        }


    }
    baseFieldProps = () => ({
        variant: this.state.variant,
        fullWidth: this.state.fullWidth,
        size: this.state.size,
        margin: this.state.margin,
        onChange: e => this.handleFieldChange(e)
    })
    handleFieldChange = (e) => this.setState({ [e.target.id]: e.target.value })
    handleWidthToggle = () => this.setState(p => ({ fullWidth: !p.fullWidth }))
    handleSizeToggle = () => this.setState(p => ({ size: p.size === 'small' ? 'large' : 'small' }))
    handleMarginToggle = () => this.setState(p => ({ margin: p.margin === 'dense' ? 'normal' : 'dense' }))
    handleVariantToggle = () => this.setState(p => ({ variant: p.variant === 'outlined' ? 'filled' : 'outlined' }))
    render() {
        return (
            <ViewContainer title={this.props.title}>

                <Grid item xs={6}>
                    <Card sx={{ height: '100%' }} variant='outlined'>
                        <CardHeader title='Form Controls' />
                        <CardContent>
                            <Stack divider={<Divider/>}>
                                <Button onClick={this.handleWidthToggle}>Full Width: {this.state.fullWidth}</Button>
                                <Button onClick={this.handleMarginToggle}>Margin: {this.state.margin}</Button>
                                <Button onClick={this.handleSizeToggle}>Size: {this.state.size}</Button>
                                <Button onClick={this.handleVariantToggle}>Variant: {this.state.variant}</Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{ height: '100%' }} variant='outlined'>
                        <CardHeader title='Form State' />
                        <CardContent>
                            <pre>
                                {JSON.stringify(this.state, null, 4)}
                            </pre>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Divider light />
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardHeader title='Form' />
                        <CardContent>
                            <TextField id='name' label='Name' value={this.state.name} {...this.baseFieldProps()} />
                            <TextField id='favColor' label='Favorite Color' value={this.state.favColor} {...this.baseFieldProps()} />
                            <TextField id='favMovie' label='Favorite Movie' value={this.state.favMovie} {...this.baseFieldProps()} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{ height: '100%' }} >
                        <CardHeader title='Duplicate Form' />
                        <CardContent>
                            <TextField id='name' label='Name' value={this.state.name} {...this.baseFieldProps()} />
                            <TextField id='favColor' label='Favorite Color' value={this.state.favColor} {...this.baseFieldProps()} />
                            <TextField id='favMovie' label='Favorite Movie' value={this.state.favMovie} {...this.baseFieldProps()} />
                        </CardContent>
                    </Card>
                </Grid>

            </ViewContainer>
        )
    }
}