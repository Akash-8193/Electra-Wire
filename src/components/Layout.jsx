import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="website-container" data-theme-scope="elegant-serif" style={{overflow: 'auto', overflowAnchor: 'none', containerName: 'root', containerType: 'size', height: '100%'}}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
