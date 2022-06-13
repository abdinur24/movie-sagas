import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './MovieList.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main className="movies">
            <h1>Movie List</h1>
            <Box sx={{ width: '100%' }} justifyContent="center">
                <Grid container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {movies.map(movie => {
                        return (
                            <Grid item xs={6} sm={4} md={4}>
                                <Item key={movie.id} >
                                    <h3>{movie.title}</h3>
                                    <img src={movie.poster} alt={movie.title} onClick={() => history.push(`/details/${movie.id}`)} />
                                </Item>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </main>


    );
}

export default MovieList;