import React from 'react'
import { connect } from 'react-redux'
import { Button, makeStyles } from '@material-ui/core'

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

    }
}

function NavbarProfileIcon(props){
    return props.auth.authenticated?(
        <div></div>
    ):(
        <> 
            <Button color="inherit" variant="text">
                Login
            </Button>
            <Button color="inherit" variant="outlined">
                Sign up
            </Button>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarProfileIcon)