import React from 'react';

const Banner = () => {
    return (
        <div className='ml-auto lg:ml-20 pl-1 flex items-center ' >
            <div className='banner-content left-side lg:w-1/2 sm:w-full flex flex-col justify-between pt-10 lg:pt-0'>
                <h2 className='text-5xl font-bold hidden lg:block '>Read the most <br /> interesting articles</h2>
                <p className='text-xl py-4 hidden lg:block'>Delve into a World of Fascinating <br /> Perspectives and Engaging Narratives, <br /> Unveiling Hidden Gems of Knowledge and Inspiring Ideas.</p>
                {/* mobile  */}
                <h2 className='text-4xl font-bold block lg:hidden sm:block text-center px-4'>Read the most  interesting articles</h2>

                <p className='text-xl pb-3 block lg:hidden sm:block text-center'>Delve into a World of Fascinating Perspectives and Engaging Narratives, Unveiling Hidden Gems of Knowledge and Inspiring Ideas.</p>

                <div className='hidden lg:block'>
                    <div className=' flex items-center justify-between ps-3 rounded border border-gray-200 relative shadow-lg mt-8 w-10/12'>
                        <svg className='absolute left-4' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7781 14.8968L14.8937 15.7812C14.6031 16.075 14.1281 16.075 13.8343 15.7812L10.7187 12.6656C10.5781 12.525 10.5 12.3344 10.5 12.1343V11.625C9.39686 12.4875 8.00935 13 6.49998 13C2.90936 13 0 10.0906 0 6.49998C0 2.90936 2.90936 0 6.49998 0C10.0906 0 13 2.90936 13 6.49998C13 8.00935 12.4875 9.39686 11.625 10.5H12.1343C12.3344 10.5 12.525 10.5781 12.6656 10.7187L15.7812 13.8343C16.0718 14.1281 16.0718 14.6031 15.7781 14.8968ZM2.49999 6.49998C2.49999 8.71247 4.29061 10.5 6.49998 10.5C8.71247 10.5 10.5 8.70936 10.5 6.49998C10.5 4.2875 8.70936 2.49999 6.49998 2.49999C4.2875 2.49999 2.49999 4.29061 2.49999 6.49998Z" fill="#959EAD" />
                        </svg>

                        <input className='ms-8 py-3 w-full outline-none' type="text" placeholder='Search article' />
                        <button className='bg-blue-500 py-3 px-5 absolute right-0 text-white'>Search</button>
                    </div>
                </div>
                {/* for mobile  */}
                <div className='lg:hidden sm:block'>
                    <div className='mx-auto rounded mt-8 w-11/12'>
                        <div className='flex items-center justify-between border w-full bg-white rounded-md'>
                            <svg className='ml-4 ' width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7781 14.8968L14.8937 15.7812C14.6031 16.075 14.1281 16.075 13.8343 15.7812L10.7187 12.6656C10.5781 12.525 10.5 12.3344 10.5 12.1343V11.625C9.39686 12.4875 8.00935 13 6.49998 13C2.90936 13 0 10.0906 0 6.49998C0 2.90936 2.90936 0 6.49998 0C10.0906 0 13 2.90936 13 6.49998C13 8.00935 12.4875 9.39686 11.625 10.5H12.1343C12.3344 10.5 12.525 10.5781 12.6656 10.7187L15.7812 13.8343C16.0718 14.1281 16.0718 14.6031 15.7781 14.8968ZM2.49999 6.49998C2.49999 8.71247 4.29061 10.5 6.49998 10.5C8.71247 10.5 10.5 8.70936 10.5 6.49998C10.5 4.2875 8.70936 2.49999 6.49998 2.49999C4.2875 2.49999 2.49999 4.29061 2.49999 6.49998Z" fill="#959EAD" />
                            </svg>

                            <input className='ms-3 py-3 w-full outline-none text-xl' type="text" placeholder='Search article' />
                        </div>
                        <div className='mt-3'>
                            <button className='bg-blue-500 rounded text-xl w-full py-3 px-5 text-white'>Search</button>
                        </div>
                    </div>
                </div>

                <div className='pt-2 italic w-11/12 lg:w-full mx-auto pb-8 lg:pb-0'>
                    <p className='inline-block pe-3 pb-2'>Popular Tags :</p>
                    <div className='block lg:inline-block'>
                        <div className='inline-block bg-blue-100 font-semibold text-blue-500 text-base px-2 rounded rounded'>Design</div>
                        <div className='inline-block bg-blue-100 font-semibold text-base text-blue-500 px-2 rounded rounded ms-2'>User Experience</div>
                        <div className='ms-2 inline-block font-semibold text-base text-blue-500 bg-blue-100 px-2 rounded rounded'>User Interfaces</div>
                    </div>
                </div>
            </div>
            <div className='right-side w-1/2 hidden lg:block'>
                <img style={{ marginRight: '-30px' }} src="/live-chat.svg" alt="" />
            </div>
        </div>
    );
};

export default Banner;