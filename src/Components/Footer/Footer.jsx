import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='text-center bg mt-5'>
            <div className='grid grid-cols-1 lg:grid-cols-3 items-center gap-3 px-28 text-center'>
                <div>
                    <img src="/images/1637757772814.jpg" alt="" />
                </div>
                <div>
                    <p className='font-semibold font-serif text-xl'>SERVICE</p>
                    <p className='mt-3'>Movies</p>
                    <p className='mt-3'>Dramas</p>
                </div>
                <div>
                    <p className='font-semibold font-serif text-xl'>CONTACT US</p>
                    <p className='mt-3'>524 Broadway , NYC</p>
                    <p className='mt-3'>+1 777 - 000000000</p>
                </div>
            </div>
            <div className='mt-5'>
                <p className='font-semibold'>Copyright © 2021 Ginyro. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;