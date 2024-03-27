import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Author from './Author';

const Authors = () => {
    const authors = useLoaderData();
    return (
        <div className='mb-10'>
            <div className="pd font-bold text-[40px] text-center mt-[100px] mb-[36px]">
                Authors
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] px-5">
            {
                authors.map(authors => <Author authors={authors}></Author>)
            }
            </div>
    </div>
    );
};

export default Authors;