import React, { useState } from 'react'
import { Button, Dialog, TextField, makeStyles, DialogTitle, DialogContent, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setAuthenticated } from '../state/actions/auth-actions'
import fetchUser from '../state/thunk/user-thunk'

const useStyles = makeStyles((theme) => ({ 
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: '#fff',
        border: '2px solid #000',
        boxShadow: theme.shadows[5]
    },
    textField: {
        paddingBottom: '10%'
    }
}))

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUser: fetchUser,
    setAuthenticated: setAuthenticated
}, dispatch)

function Login(props) {
    const classes = useStyles();
    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const submitLogin = () => {
        // submit login with username and password
        props.fetchUser()
    }



    const body = (
        // <div className={classes.paper}>
        <div align="center">
            <TextField placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={classes.textField}/> <br/>
            <TextField placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={classes.textField}/> <br/>
            <Button onClick={submitLogin}>Submit</Button>
        </div>
    )
    
    const handleClose = () => {
        props.setLoginModalOpen(false)
    }

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={handleClose}>
                <DialogTitle id="form-dialog-title"><div align="center">Login</div></DialogTitle>
                <DialogContent>
                    {body}
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)