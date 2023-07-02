import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';

const articles = () => {
    return (
        <Layout>
            <div className='w-10/12	 mx-auto'>
                {/* Breadcrumb  */}
                <nav class="flex my-4" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <Link href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                Home
                            </Link>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <Link href="/articles" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Articles</Link>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div class="flex items-center">
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Blog1</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className='flex justify-between'>
                    <div className='w-8/12 '>
                        <img src="https://i.ibb.co/rMDjzxp/ales-nesetril-Im7l-Zjxe-Lhg-unsplash-1-1.jpg" alt="Blog" />
                        <div>
                            <h4 className='text-lg text-blue-400 py-4'>EDUCATION</h4>
                        </div>
                        <div className='pb-4'>
                            <h4 className='text-2xl font-bold '>Help children get better education</h4>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. <br /> <br />

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. <br /> <br />

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. <br /> <br />
                        </div>
                    </div>
                    <div className='w-3/12 shadow-2xl pb-6' style={{height:'fit-content'}}>
                        <div>
                            <h6 className='px-4 text-xl font-bold py-3'>Latest Article</h6>
                            <div className="pl-4 pr-5">
                                {['https://i.ibb.co/MnT75hd/alex-knight-2-EJCSULRw-C8-unsplash-1.png', 'https://i.ibb.co/w0S1qPT/thisisengineering-raeng-sb-Fmo-KBK7j-U-unsplash-1.png','https://i.ibb.co/MnT75hd/alex-knight-2-EJCSULRw-C8-unsplash-1.png'].map((blog, index) => {
                                    return (
                                        <div key={index} className='flex items-center justify-between gap-4 mb-4'>
                                            <div>
                                                <img width={80} height={80} src={blog} alt="" />
                                            </div>
                                            <div className=''>
                                                <h3 className='text-base font-bold'>Help children get better education</h3>
                                                <span>Jun 27, 2022</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <h6 className='px-4 text-xl font-bold py-2'>Tags</h6>
                            <div className='px-4'>
                                <div className='inline-block bg-blue-600 text-white text-sm px-4 py-1 rounded rounded mr-2'>Medical</div>
                                <div className='inline-block bg-blue-600 text-sm text-white px-4 py-1 rounded rounded mr-2 mb-2'>Lifestyle</div>
                                <div className='mr-2 mb-2 inline-block text-sm text-white bg-blue-600 px-4 py-1 rounded rounded'>Learn</div>
                                <div className='mr-2 mb-2 inline-block text-sm text-white bg-blue-600 px-4 py-1 rounded rounded'>Healthy</div>
                                <div className='mr-2 mb-2 inline-block text-sm text-white bg-blue-600 px-4 py-1 rounded rounded'>Food</div>
                                <div className='mr-2 mb-2 inline-block text-sm text-white bg-blue-600 px-4 py-1 rounded rounded'>Diet</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default articles;