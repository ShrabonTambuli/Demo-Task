import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <nav className='grid grid-cols-1 lg:grid-cols-2 items-center gap-4 px-24 mt-5'>
            <div>
                <img className='w-28 ' src="/images/1637757772814.jpg" alt="" />
            </div>
            <div className='mx-auto'>
                <ul className='flex font-serif'>
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-green-600' : '')}>Home</NavLink>
                    </li>
                </ul>
            </div>
            
        </nav>
    );
};

export default Header;