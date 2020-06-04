import React from 'react'
import { useRouter } from 'next/router'
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
    },
    titleStyling: {
        textDecoration: 'none',
        color: 'inherit'
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
    const classes = useStyles()
    const router = useRouter()

    const returnHome = (e) => {
        e.preventDefault()
        router.push('/')
    }

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
                        <a href="/" onClick={returnHome} className={classes.titleStyling}>
                            Storage
                        </a>
                    </Typography>
                    <div style={{ flexGrow: 1 }}/>
                    <NavbarProfileIcon/>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)