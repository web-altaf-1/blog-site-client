import Header from '@/components/Header/Header';
import { useRouter } from 'next/router';
import React from 'react';

const signin = () => {
    const router = useRouter();
    return (
        <>
            <Header></Header>
            <div>
                <div className='w-1/3 flex mx-auto justify-center flex-col mt-5'>
                    <h2 className='text-center text-2xl font-bold' >Sign In</h2>
                    <div>
                        {/* <div>
                            <label className='' htmlFor="name">Name</label> <br />
                            <input className='w-full px-4 py-3 mt-1 border border-gray-300 outline-none rounded-lg text-base' type="text" placeholder='Enter Name' id='name' />
                        </div> */}
                        <div className='mt-4'>
                            <label className='' htmlFor="email">Email</label> <br />
                            <input className='w-full px-4 py-3 mt-1 border border-gray-300 outline-none rounded-lg text-base' type="email" placeholder='Enter Email' id='email' />
                        </div>
                        <div className='mt-4'>
                            <label className='' htmlFor="password">Password</label> <br />
                            <input className='w-full px-4 py-3 mt-1 border border-gray-300 outline-none rounded-lg text-base' type="password" placeholder='Enter Password' id='password' />
                        </div>
                        <div className='py-4'>
                            <p className='text-blue-600 font-semibold cursor-pointer '>Forgot password?</p>
                        </div>
                        <div>
                            <button className='bg-blue-500 w-full text-white py-3 rounded-md text-lg font-bold'>Log In</button>
                        </div>
                        <div className='py-4'>
                            <p className=' font-semibold'>You haven't any account ? <span onClick={()=> router.push('/auth/signup')} className='text-blue-600 cursor-pointer'>Register Now</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default signin;