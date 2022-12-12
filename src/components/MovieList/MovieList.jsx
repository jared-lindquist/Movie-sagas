import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { Card } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //TODO: add a handleClick to go to the details page
    const captureDetails= (movie) =>{
        console.log('The selected movie was', movie)
        //collects info from movie and stores locally
        
        dispatch({ type: 'SET_DETAILS', payload: movie })
        //gets genre info from DB
        dispatch({type: 'GET_MOVIE', payload: {id: movie.id}})
        //navigates to details page
        history.push(`/details`);
    }

    return (
        <main>
            <h1>Movie List</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div 
                        className= "card"
                        key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img 
                                className='movie-poster'
                                src={movie.poster} 
                                alt={movie.title}
                                onClick={ () => captureDetails(movie)}/>
                             {/* add an onClick to details page with movie id */}
                        </div>
                    );
                })}
            </section>
        </main>
    );
}

export default MovieList;