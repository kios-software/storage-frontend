import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { Button, makeStyles, IconButton } from '@material-ui/core'
import { setAuthenticated } from '../../state/actions/auth-actions'
import fetchUser from '../../state/thunk/user-thunk'
import { bindActionCreators } from 'redux'
import { getUser, getUserError, getUserPending } from '../../state/reducers/user-reducers'
import isEmpty from 'lodash.isempty'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Login from '../../login/login'
import Register from '../../register/register'

const useStyles = makeStyles(theme => ({
    buttonStyle: {
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    accountDetails: {
        display: 'flex',
        alignItems: 'center'
    }
}))

const mapStateToProps = state => {
    return {
        auth: state.auth,
        user: getUser(state),
        error: getUserError(state),
        pending: getUserPending(state)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUser: fetchUser,
    setAuthenticated: setAuthenticated
}, dispatch)

function NavbarProfileIcon(props){
    const [loginModalOpen, setLoginModalOpen] = useState(false)
    const [registerModalOpen, setRegisterModalOpen] = useState(false)

    const classes = useStyles()
    const router = useRouter()

    /* DEBUG */
    /* https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao */
    useEffect(() => {
        if(!isEmpty(props.user)){
            props.setAuthenticated(true)
        }
    }, [props.user, props.error])
    /* DEBUG */

    return props.auth.authenticated?(
        props.error? <div>error - wat do here?</div>: 
        <div className={classes.accountDetails}>
            Hello, {props.user.firstName}
            &nbsp; &nbsp; &nbsp; 
            <IconButton onClick={() => router.push('/profile')}>
                <AccountCircleIcon/>
            </IconButton>
        </div>
    ):(
        <div>
            <Login open={loginModalOpen} setLoginModalOpen={setLoginModalOpen}/>
            <Register open={registerModalOpen} setRegisterModalOpen={setRegisterModalOpen}/>
            <Button color="inherit" variant="text" onClick={() => setLoginModalOpen(true)} className={classes.buttonStyle}>
                Login
            </Button>
            <Button color="inherit" variant="outlined" onClick={() => setRegisterModalOpen(true)} className={classes.buttonStyle}>
                Sign up
            </Button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarProfileIcon)