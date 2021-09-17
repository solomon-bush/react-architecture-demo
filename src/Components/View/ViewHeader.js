import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/* MUI */
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Breadcrumbs from '@mui/material/Breadcrumbs'

export default class ViewHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            crumbs: []
        }
    }

    componentDidMount() {
        this.generateCrumbs()
    }
    generateCrumbs = () => {
        let currentLocation = window.location.pathname.split('/').slice(1);
        let crumbs = [];
        for (var i = 0; i < currentLocation.length; i++) {
            let crumb = currentLocation[i];
            let text = crumb.toUpperCase();
            let link = '/' + currentLocation.slice(0, i + 1).join('/');
            crumbs.push({ "text": text, "link": link });
        }
        this.setState({ crumbs })
    }


    render() {
        return (
            <Grid container justifyContent='space-between' spacing={2}>
                <Grid item xs={12}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" to='/'>Home</Link>
                        {this.state.crumbs.map(crumb => {
                            return `${crumb.link}` === window.location.pathname ?
                                <Typography key={crumb.link} color="textPrimary">{crumb.text}</Typography> :
                                <Link key={crumb.link} color="inherit" to={`/${crumb.link}`}>
                                    {crumb.text}
                                </Link>
                        })}
                    </Breadcrumbs>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                {/* TEXT */}
                <Grid item xs={9}>
                    <Grid container>
                        {/* TITLE */}
                        <Grid item xs={12}>
                            <Grid container spacing={1} alignItems='flex-start'>
                                <Grid item>
                                    <Typography variant='h4'>
                                        {this.props.title}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* SUBTITLE */}
                        <Grid item xs={12}>
                            <Typography variant='subtitle2'>{this.props.subtitle}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {/* ACTIONS */}
                <Grid item xs={3}>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            {/* {this.renderActions()} */}
                        </Grid>
                    </Grid>
                </Grid>
                {/* SPACING BOTTOM */}
                <Grid item xs={12} />

            </Grid>
        )
    }
}
