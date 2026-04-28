import React, { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { useGlobalAnimations } from './useGlobalAnimations';

const Layout = ({ children }) => {
    const rootRef = useRef(null);
    useGlobalAnimations(rootRef);

    return (
        <div ref={rootRef} className="website-container" data-theme-scope="elegant-serif" style={{ overflow: 'auto', overflowAnchor: 'none', containerName: 'root', containerType: 'size', height: '100%' }}>
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Layout;
