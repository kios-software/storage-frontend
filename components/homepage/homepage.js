import React from 'react'
import fetch from 'unfetch'
import useSWR from 'swr'
import StorageCard from '../storagecard/storagecard'
import { Grid } from '@material-ui/core'

const fetcher = url => fetch(url).then(r => r.json())

export default function Homepage(props) {
    const { data, error } = useSWR('/api/placeholder', fetcher)

    const cards = () => {
        if(error) return <div>error</div>
        if(!data) return <div>loading</div>
        return data.map((storage, index) => {
            return (<Grid item key={index}><StorageCard key={index} storage={storage}/></Grid>)
        })
    }

    return (
        <div>
            <h1>Available Storage In Your Area</h1>
            <Grid container spacing={2}>
                {cards()}                
            </Grid>
        </div>
    )
}
