import React from 'react';

const NewsLatter = () => {
    return (
        <div className='' style={{ background: '#0d2436' }}>
            <div className='flex pt-8 '>
                <div className='w-full lg:w-1/2 px-4  lg:pl-16 pb-32 lg:pb-0'>
                    <div>
                        <h3 className='text-white text-3xl font-semibold'>Get our stories delivered From us <br /> to your inbox weekly.</h3>
                    </div>
                    <div className='py-6'>
                        <input type="email" className='px-6 py-2 w-full lg:w-auto rounded-md outline-none' placeholder='Your Email' />
                        <button className='text-white bg-blue-400 rounded-md py-2 px-4 w-full lg:w-auto mt-3 ml-0 lg:ml-3'>Get Started</button>
                    </div>
                    <div>
                        <p className='text-white'>Get a response tomorrow if you submit by 9pm today. If we received after <br /> 9pm will get a reponse the following day.</p>
                    </div>
                </div>
                <div className='w-1/2 flex hidden lg:block'>
                    <img className='mx-auto' style={{width:'578px',height:'427px'}} src="/card.png" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default NewsLatter;