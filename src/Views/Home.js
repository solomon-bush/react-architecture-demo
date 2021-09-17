import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
/* MUI */
import { CardActionArea, Grid, Card, CardHeader } from '@mui/material'
/* ICON */
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ApiIcon from '@mui/icons-material/Api';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import BuildIcon from '@mui/icons-material/Build';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AltRouteIcon from '@mui/icons-material/AltRoute';
/* INT */
import ViewContainer from '../Components/View/ViewContainer'

export default withRouter(class Home extends Component {


    renderCards = () => {
        const cards = [
            { title: 'Pub/Sub', icon: <AnnouncementIcon />, path: '/pubsub' },
            { title: 'Functional API', icon: <ApiIcon />, path: '/funcapi' },
            { title: 'Global Handlers', icon: <SettingsInputComponentIcon />, path: '/globalhandler' },
            { title: 'Form Factory', icon: <DynamicFormIcon />, path: '/formfactory' },
            { title: 'Card Factory', icon: <BuildIcon />, path: '/cardfactory' },
            { title: 'Hidden Routing', icon: <VisibilityOffIcon />, path: '/hiddenrouting' },
            { title: 'Route Overloading', icon: <AltRouteIcon />, path: '/routeoverload' },
        ]

        return cards.map(v => {
            return <Grid item xs={4}>
                <Card >
                    <CardActionArea sx={{ p: 3 }} onClick={() => this.props.history.push(v.path)}>
                        <CardHeader avatar={v.icon} title={v.title} titleTypographyProps={{ variant: 'h5' }} />
                    </CardActionArea>
                </Card>
            </Grid>
        })
    }

    render() {
        return (
            <ViewContainer title={this.props.title}>
                {this.renderCards()}
            </ViewContainer>
        )
    }
})
