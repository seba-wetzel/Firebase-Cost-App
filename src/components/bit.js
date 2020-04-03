import React from 'react'
import {Card, CardContent,CardMedia, Typography, makeStyles} from '@material-ui/core/'

const Bit = (props)=> {
    const { image, name, selected } = props

    const useStyles = makeStyles(theme => (
        {
            card: {
                display: 'flex',
                margin: 0,
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
    
    return (
        <div className={`selectable ${(selected ? "selected" : null)}`}>
        <div className={classes.card}>
            <CardMedia className={classes.image}
                image={image} title={name} />
            <CardContent className={classes.content}>
                <Typography variant="h5" color="primary"> {name} </Typography>
                <Typography variant="body2" color="textSecondary"> Usada n veces </Typography>
            </CardContent>

            </div>
            <div className="check"><span className="checkmark">✔</span></div>  
        </div>
    )
}

export default Bit