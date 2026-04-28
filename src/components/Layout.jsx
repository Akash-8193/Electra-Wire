import React, { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useGlobalAnimations } from './useGlobalAnimations';

const Layout = ({ children }) => {
    const rootRef = useRef(null);
    useGlobalAnimations(rootRef);

    return (
        <div ref={rootRef} className="website-container" data-theme-scope="elegant-serif" style={{overflow: 'auto', overflowAnchor: 'none', containerName: 'root', containerType: 'size', height: '100%'}}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
