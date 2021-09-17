import React, { Component } from 'react'
import { Typography, Grid, Tab, Tabs} from '@mui/material'
/* INT */
import ViewContainer from '../Components/View/ViewContainer'

export default class HiddenRouting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedTab: 'one'
        }
        this.items = ['one', 'two', 'three', 'four']
    }

    componentDidMount = () => { this.autoFocus() }
    componentDidUpdate = () => { this.autoFocus() }

    autoFocus = () => {
        let path = window.location.pathname
        if (path.split('/').length > 2) {
            let target = path.split('/')[2]
            if (this.state.selectedTab !== target) {
                this.setState({ selectedTab: target })
            }
        }
    }
    setURL = (id, title) => {
        window.history.pushState({ id }, title, `/hiddenrouting/${id}`)
    }
    handleChange = (tab) => {
        this.setURL(tab, tab)
        this.setState({ selectedTab: tab })
    };
    renderContent = () => {
        switch (this.state.selectedTab) {
            case 'one': return <Typography variant='h1'>ONE</Typography>
            case 'two': return <Typography variant='h2'>TWO</Typography>
            case 'three': return <Typography variant='h3'>THREE</Typography>
            case 'four': return <Typography variant='h4'>FOUR</Typography>
            default: return <Typography variant='h1'>ONE</Typography>
        }
    }

    render() {
        return (
            <ViewContainer title={this.props.title}>
                <Grid item xs={3}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={this.state.selectedTab}
                        textColor='primary'
                        indicatorColor='primary'
                        onChange={(e, n) => this.handleChange(n)}
                    >
                        {this.items.map((v, i) => <Tab key={i} id={v} value={v.toLowerCase()} label={v} />)}
                    </Tabs>
                </Grid>
                <Grid item xs={9}>
                    {this.renderContent()}
                </Grid>
            </ViewContainer>
        )
    }
}