import React, { useEffect } from 'react'
import Navbar from '../../navbar/navbar'
import ProfileImage from '../profileimage/profileimage'
import ProfileDrawer from '../profiledrawer/profiledrawer'
import ProfileContentBox from '../profilecontentbox/profilecontentbox'
import { makeStyles, Paper } from '@material-ui/core'
import { connect } from 'react-redux'
import { setAuthenticated } from '../../state/actions/auth-actions'
import fetchUser from '../../state/thunk/user-thunk'
import { bindActionCreators } from 'redux'
import { getUser } from '../../state/reducers/user-reducers'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    paper: {
        marginLeft: theme.spacing(100),
        marginRight: theme.spacing(100)
        // display: 'inline'
    }
}));

const mapStateToProps = state => {
    return {
        auth: state.auth,
        user: getUser(state),
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUser: fetchUser,
    setAuthenticated: setAuthenticated
}, dispatch)

function ProfileBox(props) {
    const classes = useStyles()
    const router = useRouter()

    useEffect(() => {
        if(!props.auth.authenticated)
            router.push("/")
    }, [])

    return (
        <div align="center">
            <Navbar/>
            Hello, {props.user.firstName} {props.user.lastName}!
                <Paper
                    className={classes.paper}>
                    <ProfileImage/>
                    <ProfileDrawer/>
                    <ProfileContentBox/>
                </Paper>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBox)