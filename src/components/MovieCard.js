import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import {CardActions} from "@material-ui/core";

function MovieCard({movie}) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={movie.poster}
                    title={movie.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h3" className={classes.overviewText}>
                        {movie.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <ExpansionPanel >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Synopsys</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {movie.plot}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </CardActions>
        </Card>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        maxHeight: 1500,
        display: 'flex',
        flexDirection: 'column'
    },
    overviewText: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    expansion: {
        alignItems: 'flex-end'
    },
    media: {
        height: 500,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightBold,
    },
}));

export default MovieCard;
