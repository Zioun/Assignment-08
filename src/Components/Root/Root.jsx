import React from 'react';
import '../../App'
import NavBar from '../Header/NavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='container m-auto max-w-[1170px]'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;