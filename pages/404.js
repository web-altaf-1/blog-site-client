import Header from '@/components/Header/Header';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <Header></Header>
            <img className='flex mx-auto' src="/not-found.svg" alt="" />
        </div>
    );
};

export default NotFoundPage;