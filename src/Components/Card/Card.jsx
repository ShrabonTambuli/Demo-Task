import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {
    const {id} = movie.show ;
    return (
        <div className='px-10 '>
            <div className='border-2 rounded-xl p-2'>
                <img className='w-96 h-96 rounded-xl' src={movie.show.image.original} alt="" />
                <h1>Movie Name: {movie?.show?.name}</h1>
                <p>Language: {movie?.show?.language}</p>
                <div className='flex justify-between'>
                    <p>Rating: {movie?.show?.rating.average}</p>
                    <p>Run Time: {movie?.show?.runtime}</p>
                </div>
                <button className=' bg-yellow-300 text-black font-serif mt-10 px-7 py-3 rounded-2xl w-full'><Link to={`/moveDetails/${id}`} >View Details</Link></button>
            </div>
        </div>
    );
};

export default Card;