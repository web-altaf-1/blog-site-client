import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import MobileNav from './MobileNav/MobileNav';
import MobileSearchBar from './MobileSearchBar/MobileSearchBar';

const Layout = ({ children }) => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Header></Header>
            <MobileNav></MobileNav>
            {/* <MobileSearchBar></MobileSearchBar>
            <div className={` lg:hidden sm:block ${hasScrolled ? 'h-20' : 'h-20'}`}>

            </div> */}
            <main>{children}</main>
        </>
    );
};

export default Layout;