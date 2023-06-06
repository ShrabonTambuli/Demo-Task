import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
    const id = useParams();
    const [movie, setMovie] = useState([]);
    console.log(movie);

    useEffect( ()=>{
        fetch(`https://api.tvmaze.com/search/shows?q=all/${id}`)
        .then(res => res.json())
        .then(data => setMovie(data))
    },[])

    return (
        <div>
            <h1>{movie.length}</h1>
            <h1>Hello!!</h1>
        </div>
    );
};

export default DetailsPage;