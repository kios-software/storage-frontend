import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        padding: '10% 0 10%',
        whiteSpace: 'nowrap',
        width: '100%',
        alignContent: 'center',
        backgroundColor: '#FFFFFF'
    }
})

export default function Jumbotron(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            Jumbotron here
        </div>
    )
}