"use client"
import React, { useState } from 'react';
import Header from './Header';
import AsideBar from './AsideBar';
import Footer from './Footer';
const Layout = ({ children }) => {
    const [isAsideVisible, setIsAsideVisible] = useState(true);
    const toggleAside = () => {
        setIsAsideVisible(!isAsideVisible);
    };

    return (
        <div className="flex flex-col h-screen">
            <Header toggleAside={toggleAside} />
            <div className="flex flex-1 overflow-hidden">
                <AsideBar isAsideVisible={isAsideVisible} />
                <main className="flex-1 overflow-auto p-4 bg-gray-100 shadow-md">
                    <div className="bg-white p-6 rounded-md shadow-md">
                        {children}
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
