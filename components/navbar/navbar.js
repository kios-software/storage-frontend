import React from 'react'
import { connect } from 'react-redux'
import {AppBar, Toolbar, makeStyles, Typography} from '@material-ui/core'
import NavbarProfileIcon from './navbarprofileicon/navbarprofileicon'

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    appbar: {
        alignItems: 'center'
    },
    titleFlex: {
        flexGrow: 1
    }
})

const mapStateToProps = state => {
    return {
        foo: state.foo
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

// Flex items can be centered horizontally using 
//  the justify-content or align-self CSS Property or more other ones.
function Navbar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                elevation={0}
                className={classes.appBar}
                color="primary">
                <Toolbar align="center">
                    <Typography
                        align="center">
                        Storage
                    </Typography>
                    <div style={{ flexGrow: 1 }}/>
                    <NavbarProfileIcon/>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)