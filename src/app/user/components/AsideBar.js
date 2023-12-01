"use client"
import React, { useState } from 'react';

const AsideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside className={`w-64 ${isCollapsed ? 'hidden' : ''} h-screen bg-gray-700 text-white p-5 transition-all`}>
            <button onClick={toggleCollapse}>{isCollapsed ? 'Expand' : 'Collapse'}</button>
            <ul>
                <li className="mb-4">Link 1</li>
                <li className="mb-4">Link 2</li>
                <li className="mb-4">Link 3</li>
                {/* Add other links or content here */}
            </ul>
        </aside>
    );
};

export default AsideBar;
