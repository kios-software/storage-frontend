import React from 'react'
import fetch from 'unfetch'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import StorageCard from '../../storagecard/storagecard'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    cardContainer: {
        marginLeft: "15%",
        marginRight: "15%"
    },
    card: {
        "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
        }
    }
})

const fetcher = url => fetch(url).then(r => r.json())

export default function StorageCardContainer(props) {
    const classes = useStyles();
    const router = useRouter()

    const { data, error } = useSWR('/api/placeholder', fetcher)

    const goToStoragePage = (storage) => {
        router.push("/reserve")
    }

    const cards = () => {
        if(error) return <div>error</div>
        if(!data) return <div>loading</div>
        return data.map((storage, index) => {
            return (<Grid item key={index}>
                <StorageCard
                    key={index}
                    storage={storage}
                    className={classes.card}
                    onClick={(storage) => goToStoragePage(storage)}/>
            </Grid>)
        })
    }

    return (
        <div
            className={classes.cardContainer}>
        `   <Grid container spacing={2}>
                {cards()}                
            </Grid>`
        </div>
    )
}