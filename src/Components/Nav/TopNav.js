import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
/* ICON */
import AccountCircle from '@mui/icons-material/AccountCircle';
/* MUI */
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';

export default withRouter(class TopNav extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            anchorEl: false
        }
    }

    handleMenuOpen = (e) => this.setState({ anchorEl: e.currentTarget})
    handleMenuClose = () => this.setState({ anchorEl: false})
    handleLogout = () => window.alert('TODO')
    render() {
        return (
            <AppBar position="fixed" sx={{zIndex: theme => theme.zIndex.drawer + 1}}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Link to='/'>
                        <Typography variant='h6' color={theme => theme.palette.secondary.dark}>React Architecture Demo</Typography>
                    </Link>                    
                    <IconButton onClick={e => this.handleMenuOpen(e)}>
                        <AccountCircle />
                    </IconButton>
                    <Menu open={Boolean(this.state.anchorEl)} anchorEl={this.state.anchorEl} onClose={this.handleMenuClose} 
                    keepMounted>
                        <MenuItem disabled><Typography variant='caption'><b>User</b></Typography></MenuItem>
                        <MenuItem onClick={this.handleLogout} dense>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        )
    }
})
