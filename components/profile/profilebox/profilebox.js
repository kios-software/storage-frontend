import React from 'react'
import Navbar from '../../navbar/navbar'
import ProfileImage from '../profileimage/profileimage'
import ProfileDrawer from '../profiledrawer/profiledrawer'
import ProfileContentBox from '../profilecontentbox/profilecontentbox'
import { makeStyles, Paper, Grid } from '@material-ui/core'

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
    }
}));

export default function ProfileBox({ profile }) {
    const classes = useStyles()
    return (
        <div align="center">
            <Navbar/>
            Hello, {profile.firstName} {profile.lastName}!
                <Paper
                    className={classes.paper}>
                    <ProfileImage/>
                    <ProfileDrawer/>
                    <ProfileContentBox/>
                </Paper>
        </div>
    )
}