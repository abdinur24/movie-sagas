import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function MovieDetail() {

    const movies = useSelector(store => store.movies);
    let params = useParams();
    console.log(params);

    let movieId = params.movieId;
    let movie = movies.find(movie => movie.id === Number(movieId));
    console.log(`Found movie`, movie);

    if (!movie) return <h2>Invalid Movie ID</h2>;


    return (
        <>
            <h1>Movie Detail</h1>
            <div>
                <h2>{movie.title}</h2>
                <img src={movie.poster} alt={movie.title} />
                <p>{movie.description}</p>
            </div>
        </>
    )
}

export default MovieDetail;