import React, { Component } from 'react'
/* MUI */
import { Box } from '@mui/material';
/* ICON */
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ApiIcon from '@mui/icons-material/Api';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import BuildIcon from '@mui/icons-material/Build';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AltRouteIcon from '@mui/icons-material/AltRoute';
/* INT */
import TopNav from '../Components/Nav/TopNav'
import SideNav from '../Components/Nav/SideNav';

export default class Wrapper extends Component {
    constructor(props) {
        super(props)

        this.sideNavList = [
            { title: 'Pub/Sub', icon: <AnnouncementIcon />, path: '/pubsub' },
            { title: 'Functional API', icon: <ApiIcon />, path: '/funcapi' },
            { title: 'Global Handlers', icon: <SettingsInputComponentIcon />, path: '/globalhandler' },
            { title: 'Form Factory', icon: <DynamicFormIcon />, path: '/formfactory' },
            { title: 'Card Factory', icon: <BuildIcon />, path: '/cardfactory' },
            { title: 'Hidden Routing', icon: <VisibilityOffIcon />, path: '/hiddenrouting' },
            { title: 'Route Overloading', icon: <AltRouteIcon />, path: '/routeoverload' },
        ]
    }

    render() {
        return (
            <React.Fragment>
                <TopNav />
                <SideNav sideNavList={this.sideNavList} />
                <Box sx={{ overflowX: 'clip' }}>
                    <Box sx={{ ml: 30, mt: 10, mr: 5 }}>
                        {this.props.content}
                    </Box>
                </Box>
            </React.Fragment>
        )
    }
}
