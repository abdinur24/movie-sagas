import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './MovieDetail.css'


function MovieDetail() {

    const history = useHistory();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    console.log(genres)

    let params = useParams();
    console.log(params);

    let movieId = params.movieId;
    let movie = movies.find(movie => movie.id === Number(movieId));
    console.log(`Found movie`, movie);

    if (!movie) return <h2>Invalid Movie ID</h2>;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);


    return (

        // <div>
        //     <h1>Movie Detail</h1>
        //     <h2>{movie.title}</h2>
        //     <img src={movie.poster} alt={movie.title} />
        //     <h2>Genres:</h2>
        //     {/* This first map is mapping over the store */}
        //     {genres.map(genre => {
        //         {
        //             // this if statement is trying matching the id in the genre reducer to the one in the movie reducer
        //             if (genre.id === movie.id) {
        //                 {
        //                     return (
        //                         // It maps over it again becuase the indivdual movies have their genres in an array
        //                         genre.genres.map(movGen => {
        //                             { console.log(movGen) }
        //                             return (
        //                                 <h3>{movGen}</h3>
        //                             )
        //                         }))
        //                 }
        //             }
        //         }

        //     })}
        //     <p>{movie.description}</p>
        <div id='movie-detail'>

            <Card sx={{ minWidth: 500, minHeight: 700, maxWidth: 500 }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={movie.poster}
                    alt={movie.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h2" component="div">
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {/* This first map is mapping over the store */}
                        {genres.map(genre => {
                            {
                                // this if statement is trying matching the id in the genre reducer to the one in the movie reducer
                                if (genre.id === movie.id) {
                                    {
                                        return (
                                            // It maps over it again becuase the indivdual movies have their genres in an array
                                            genre.genres.map(movGen => {
                                                { console.log(movGen) }
                                                return (
                                                    <h3>{movGen}</h3>
                                                )
                                            }))
                                    }
                                }
                            }

                        })}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {movie.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" onClick={() => history.push('/')}>Back</Button>
                </CardActions>
            </Card>
        </div>

    )
}

export default MovieDetail;