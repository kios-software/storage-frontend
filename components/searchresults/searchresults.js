import React from 'react'
import { Typography } from '@material-ui/core'

export default function SearchResults(props){
    return (
        <div>
            <br/>
            <Typography variant="h5">
                Storage Results for {props.amount} {props.storageType}es in 78664
                <br/>
                <br/>
                ( show search results here )
            </Typography>
        </div>
    )
}