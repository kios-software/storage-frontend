import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    svgBlock: {
        display: 'block',
        margin: 'auto'
    }
})

export default function ProfileImage() {
    const classes = useStyles()
    return(
        <div >
            <svg height="150" width="150" className={classes.svgBlock} preserveAspectRatio="xMidYMin">
                <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red"/>
            </svg>
        </div>
    )
}