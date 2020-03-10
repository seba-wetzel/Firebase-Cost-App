import React, { Component } from 'react'
import {Link} from 'react-router-dom'
//Material ui imports
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar className="nav-container">
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/product">Product</Button>
                        <Button color="inherit" component={Link} to="/element">Element</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Navbar
