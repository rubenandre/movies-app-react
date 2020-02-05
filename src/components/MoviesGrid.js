import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import MovieCard from "./MovieCard";

function MoviesGrid({movies}) {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={3}>
                    {movies.map(movie => (
                        <Grid key={movie.id} item>
                            <MovieCard movie={movie}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 40
    },
    paper: {
        height: 140,
        width: 100,
        backgroundColor: "#000"
    },
}));

export default MoviesGrid;
