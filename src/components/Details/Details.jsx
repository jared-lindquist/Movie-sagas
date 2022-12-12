
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './Details.css'
import { Button } from '@material-ui/core';


function Details () {
    const history = useHistory();
    
    const genres = useSelector(store => store.genres);
    const [details, setDetails] = useState(useSelector(store => store.details));
    console.log('tell me something good', details);

    {/* Map through genres to render on DOM correctly in the return */}
    const genreList = genres.map((genre, i) => {
        return (
            <h4 key={i}>{genre.name}</h4>
        )
    })


    return (
        <body className='body'>
        <div className='details'>

        
        <div key = {details.id}>
            <h2>{details.title}</h2>
            
            <h3>Genres:</h3>
            
            {genreList}
            <div className='detail-grid'>
                <img className="details-poster" src ={details.poster}/>
                <p className='description'>{details.description}</p>
            </div>
        <header>
            <button 
                    className='back'
                    onClick={ () => history.push('/')}
                    >Back to Movies
            </button>
        </header>
            
        </div>
        </div>
        </body>
    )
}

export default Details;