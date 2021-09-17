import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
/* MUI */
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

export default class SideNav extends Component {
    render() {
        return (
            <Drawer variant='permanent' sx={{
                flexShrink: 0}} >
                <List>
                    <Toolbar />
                    {this.props.sideNavList.map(item => {
                        return (
                            <NavLink key={item.title} to={`${item.path}`}>
                                <ListItem button>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItem>
                            </NavLink>
                        )
                    })}
                </List>
            </Drawer >
        )
    }
}
