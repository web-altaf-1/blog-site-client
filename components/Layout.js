import React from 'react';
import Header from './Header/Header';
import MobileNav from './MobileNav/MobileNav';
import MobileSearchBar from './MobileSearchBar/MobileSearchBar';

const Layout = ({ children }) => {
    return (
        <>
            <Header></Header>
            <MobileNav></MobileNav>
            <MobileSearchBar></MobileSearchBar>
            <main>{children}</main>
        </>
    );
};

export default Layout;