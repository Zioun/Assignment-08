import React from 'react';
import Hero from '../Header/Hero';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div className='mb-10'>
            <Hero></Hero>
            <Books></Books>
        </div>
    );
};

export default Home;