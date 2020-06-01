import React from 'react'
import { connect } from 'react-redux'
import { Button, makeStyles } from '@material-ui/core'
import { setAuthenticated } from '../../state/actions/auth-actions'

const useStyles = makeStyles(theme => ({
    buttonStyle: {
        '& > *': {
            margin: theme.spacing(1),
        }
    }
}))

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setAuthenticated: status => dispatch(setAuthenticated(status))
    }
}

function NavbarProfileIcon(props){
    return props.auth.authenticated?(
        <div>Hello, Johnny</div>
    ):(
        <> 
            <Button color="inherit" variant="text" onClick={() => props.setAuthenticated()}>
                Login
            </Button>
            <Button color="inherit" variant="outlined" onClick={() => props.setAuthenticated()}>
                Sign up
            </Button>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarProfileIcon)