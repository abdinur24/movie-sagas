import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
function MovieDetail() {

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
        <>
            <h1>Movie Detail</h1>
            <div>
                <h2>{movie.title}</h2>
                <img src={movie.poster} alt={movie.title} />
                <h2>Genres:</h2>
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
                <p>{movie.description}</p>
            </div>
        </>
    )
}

export default MovieDetail;