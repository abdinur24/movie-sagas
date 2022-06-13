import {useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';
function GenresList(){
    const genres = useSelector(store => store.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);
    {
        genre.genres.map(movGen => {
            return(
            <h1 key={genre.id}>{movGen}</h1>
            )
        })
    }

    return(
        <div>
            <h1>Genres</h1>
                <div>
                    {genres.map(genre =>{
                        return(
                            <>
                                {genre.genres.map(moveGen =>{
                                    return(
                                        <>
                                            {moveGen}
                                        </>
                                    )
                                })}
                            </>
                        )
                    })}
                </div>
        </div>
    )
}

export default GenresList;