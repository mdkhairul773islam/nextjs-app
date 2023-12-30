import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown, faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons';

const AsideBar = ({ isAsideVisible }) => {
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setSubmenuOpen(!submenuOpen);
    };

    return (
        <aside className={`${isAsideVisible ? 'w-64' : 'w-25'} h-screen bg-gray-900 dark:bg-gray-800 text-white p-5`}>
            <ul className="cursor-pointer select-none">
                <li className="mb-4">
                    <Link href={"/user"}>
                        <FontAwesomeIcon icon={faHome} className="mr-2"/>
                        Dashboard
                    </Link>
                </li>
                <li className="mb-4">
                    <FontAwesomeIcon icon={faList} className="mr-2"/>
                    Link 2
                </li>
                <li
                    className="mb-4 flex items-center"
                    onClick={toggleSubmenu}
                >
                    <span className="mr-2">
                        <FontAwesomeIcon icon={faCog}/>
                    </span>
                    Link 3
                    {submenuOpen ? (
                        <FontAwesomeIcon icon={faAngleDown} className="ml-2"/>
                    ) : (
                        <FontAwesomeIcon icon={faAngleRight} className="ml-2"/>
                    )}
                </li>
                {submenuOpen && (
                    <ul className="pl-4 transition-all duration-300">
                        <li className="mb-2">Submenu 1</li>
                        <li className="mb-2">Submenu 2</li>
                        {/* Add other submenu items here */}
                    </ul>
                )}
            </ul>
        </aside>
    );
};

export default AsideBar;
