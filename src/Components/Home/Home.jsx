import React from 'react';
import './Home.css'
import { Link, useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Home = () => {
    const movies = useLoaderData();
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 text-center bg-slate-300 py-8'>
                <div className='text-center'>
                    <h1 className='text-black font-serif text-7xl leading-tight mt-5'>Unlimited movies,Drama shows,<br />and more</h1>
                    <button className=' bg-yellow-300 text-black font-serif text-2xl mt-10 px-7 py-4 rounded-2xl'><Link to='/' >BOOK A Ticket</Link></button>
                </div>
                <div className='px-5'>
                    <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
            </div>
            <div className='bg-[#9aa2ad] py-10 grid grid-cols-1 lg:grid-cols-3 gap-y-5'>
                {
                    movies.map(movie =><Card key={movie.show.id} movie={movie}/>)
                }
            </div>
        </div>
    );
};

export default Home;