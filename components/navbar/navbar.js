import React from 'react'
import { connect } from 'react-redux'
import {AppBar, Toolbar} from '@material-ui/core'
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
    return (
        <AppBar
            position="static"
            elevation={0}
            color="primary">
            <Toolbar>
                STORAGE
            </Toolbar>
        </AppBar>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)