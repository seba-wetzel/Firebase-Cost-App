import React, {  } from 'react'

//Material ui imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar'

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = ( props) => {
    const { user, signOut, signInWithGoogle } = props

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const   handleChange = (event, value) => {
        props.changeIndex(value);
      };
    
    const styles = {
        tabs: {
          background: '#fffff',
          height: '100%'
        },
    }


    return (
        <div>
            <AppBar>
                <Toolbar className="nav-container">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    {/* <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/product">Product</Button>
                    <Button color="inherit" component={Link} to="/element">Element</Button> */}
                    <Tabs value={props.index} onChange={handleChange} style={styles.tabs}>
                        <Tab label="Home" />
                        <Tab label="Elementos" />
                        <Tab label="Productos" />
                    </Tabs>

                    {user ? (<div>                        
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <Avatar alt="avatar" src={user.photoURL} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={function (){signOut();handleClose() }}>Logout</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div>)
                        : <Button color="inherit" onClick={()=>signInWithGoogle()}>Login</Button>}
                </Toolbar>
            </AppBar>
        </div>
    )
}


  

export default Navbar