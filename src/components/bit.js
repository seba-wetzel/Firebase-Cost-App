import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';



export default function Bit(props) {

    const useStyles = makeStyles(theme => (
        {
            card: {
                display: 'flex',
                marginBottom: 20,
                height: 120,
                width: 300
            },
            image: {
                minWidth: 200,
            },
            content: {
                padding: 3
            }
        }));
    const classes = useStyles();
    const { image, name } = props
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.image}
                image={image} title={name} />
            <CardContent className={classes.content}>
                <Typography variant="h5" color="primary"> {name} </Typography>
                <Typography variant="body2" color="textSecondary"> Usada n veces </Typography>
            </CardContent>
        </Card>

    )

}



