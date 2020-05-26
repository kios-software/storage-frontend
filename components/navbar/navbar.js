import React from 'react'
import { connect } from 'react-redux'
import {AppBar, Toolbar, makeStyles, Typography} from '@material-ui/core'
import NavbarProfileIcon from './navbarprofileicon/navbarprofileicon'

const useStyles = makeStyles({
    root: {
        flexGrow: 1
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

function Navbar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                elevation={0}
                color="primary">
                <Toolbar>
                    <Typography edge="start" className={classes.titleFlex} color="inherit">
                        Storage
                    </Typography>
                    <NavbarProfileIcon/>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)