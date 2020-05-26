import React from 'react'
import { Card, CardHeader, CardContent, CardActions, CardMedia, makeStyles } from "@material-ui/core";
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

export default function StorageCard(props) { 
    const classes = useStyles()
    return (
        <Card
            className={classes.root}
            {...props}>
            <CardMedia
                className={classes.media}
                image="images/box.jpg"
                title="Paella dish"
            />
            <CardHeader
                title="Storage $55/month"/>
            <CardContent>

            </CardContent>
            <CardActions>
                Some icons for storage options
            </CardActions>
            apsiunfsifugh
        </Card>
    )
}
