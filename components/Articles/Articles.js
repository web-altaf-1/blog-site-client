import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Articles = () => {
    return (
        <div className=''>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((aricle) => {
                        return (
                            <div style={{ minHeight: '450px', maxWidth: '350px' }} className="aricle bg-white rounded-lg shadow-lg">
                                <img src="https://i.ibb.co/rk63y02/alex-kotliarskyi-our-QHRTE2-IM-unsplash-1.png" alt="" />
                                <div className='p-4'>
                                    <h2 className='text-2xl font-bold'>Future of Work</h2>
                                    <p className='py-3'>Majority of peole will work in jobs that don’t exist today.</p>
                                    <div className='flex items-center justify-between '>
                                        <div className='flex items-center gap-3'>
                                            <img width={40} height={40} className='rounded-full' src="https://mui.com/static/images/avatar/3.jpg" alt="" />
                                            <div>
                                                <p>Helen Hughes</p>
                                                <p className='text-sm'>Verified writer</p>
                                            </div>
                                        </div>
                                        <div>
                                            02 May
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='py-8'>
                <button className='flex mx-auto text-center bg-white border border-blue-400 px-3 py-1 rounded rounded-md font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out'>More articles <span className='ml-3' ><FontAwesomeIcon icon={faArrowRight} /></span></button>

            </div>
        </div>
    );
};

export default Articles;