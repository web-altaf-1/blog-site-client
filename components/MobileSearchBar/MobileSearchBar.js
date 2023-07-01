import React from 'react';

const MobileSearchBar = () => {
    return (
        <div style={{ zIndex: '99999' }} className='fixed w-full lg:hidden '>
            <div className=''>
                <div className=' flex items-center justify-between  relative w-11/12 bg-white '>
                    <svg className='absolute left-4 bg-white ' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7781 14.8968L14.8937 15.7812C14.6031 16.075 14.1281 16.075 13.8343 15.7812L10.7187 12.6656C10.5781 12.525 10.5 12.3344 10.5 12.1343V11.625C9.39686 12.4875 8.00935 13 6.49998 13C2.90936 13 0 10.0906 0 6.49998C0 2.90936 2.90936 0 6.49998 0C10.0906 0 13 2.90936 13 6.49998C13 8.00935 12.4875 9.39686 11.625 10.5H12.1343C12.3344 10.5 12.525 10.5781 12.6656 10.7187L15.7812 13.8343C16.0718 14.1281 16.0718 14.6031 15.7781 14.8968ZM2.49999 6.49998C2.49999 8.71247 4.29061 10.5 6.49998 10.5C8.71247 10.5 10.5 8.70936 10.5 6.49998C10.5 4.2875 8.70936 2.49999 6.49998 2.49999C4.2875 2.49999 2.49999 4.29061 2.49999 6.49998Z" fill="#959EAD" />
                    </svg>

                    <input className='ms-12 py-3 w-full outline-none' type="text" placeholder='Search article' />
                    <button className='bg-blue-500 py-3 px-5 absolute right-0  text-white'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default MobileSearchBar;