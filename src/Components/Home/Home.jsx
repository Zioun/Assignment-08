import React from 'react';
import NavBar from '../Header/NavBar';
import Hero from '../Header/Hero';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div className='container m-auto max-w-[1170px]'>
            <NavBar></NavBar>
            <Hero></Hero>
            <Books></Books>
        </div>
    );
};

export default Home;