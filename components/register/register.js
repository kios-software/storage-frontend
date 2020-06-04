import React, { useEffect, useState } from 'react'
import { Button, Dialog, TextField, makeStyles, DialogTitle, DialogContent, Typography } from '@material-ui/core'
import isEmpty from 'lodash.isempty'

const useStyles = makeStyles((theme) => ({ 
    textField: {
        paddingBottom: '10%'
    }
}))

function Register(props) {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [hasValidationErrors, setHasValidationErrors] = useState(true)

    useEffect(() => {
        checkInput()
    }, [email, password, passwordConfirm, firstName, lastName])
    
    const checkInput = () => {
        if(isEmpty(password) || isEmpty(passwordConfirm) || password != passwordConfirm)
            setHasValidationErrors(true)
        else
            setHasValidationErrors(false)
    }

    const submitRegistration = () => {
        // TODO input validation
    }

    const body = (
        // <div className={classes.paper}>
        <div align="center">
            <TextField placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={classes.textField}/><br/>
            <TextField placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className={classes.textField}/><br/>
            <TextField placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={classes.textField}/> <br/>
            <TextField placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={classes.textField}/> <br/>
            <TextField placeholder="Confirm Password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} className={classes.textField}/> <br/>
            <Button
                disabled={hasValidationErrors}>
                Submit
            </Button>
        </div>
    )
    
    const handleClose = () => {
        props.setRegisterModalOpen(false)
    }

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={handleClose}>
                <DialogTitle id="form-dialog-title"><div align="center">Register</div></DialogTitle>
                <DialogContent>
                    {body}
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Register