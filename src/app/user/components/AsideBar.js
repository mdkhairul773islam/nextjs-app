import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown, faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons';

const AsideBar = ({ isAsideVisible }) => {
    const [submenuStates, setSubmenuStates] = useState(new Array(6).fill(false));

    const toggleSubmenu = (index) => {
        const newSubmenuStates = [...submenuStates];
        newSubmenuStates[index] = !newSubmenuStates[index];
        setSubmenuStates(newSubmenuStates);
    };

    return (
        <aside className={`${isAsideVisible ? 'w-64' : 'w-25'} h-screen dark:bg-white text-gray-900 p-5`}>
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
                    className="mb-4 flex flex-col"
                >
                    <div
                        className="flex items-center justify-between mb-2"
                        onClick={() => toggleSubmenu(0)}
                    >
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faCog} className="mr-2"/>
                            Link 3
                        </div>
                        <FontAwesomeIcon icon={submenuStates[0] ? faAngleDown : faAngleRight} className="ml-2"/>
                    </div>
                    {submenuStates[0] && (
                        <ul className="pl-4 transition-all duration-300">
                            <li className="mb-2">Submenu 1</li>
                            <li className="mb-2">Submenu 2</li>
                        </ul>
                    )}
                </li>
                <li
                    className="mb-4 flex flex-col"
                >
                    <div
                        className="flex items-center justify-between mb-2"
                        onClick={() => toggleSubmenu(1)}
                    >
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faCog} className="mr-2"/>
                            Link 4
                        </div>
                        <FontAwesomeIcon icon={submenuStates[1] ? faAngleDown : faAngleRight} className="ml-2"/>
                    </div>
                    {submenuStates[1] && (
                        <ul className="pl-4 transition-all duration-300">
                            <li className="mb-2">Submenu 1</li>
                            <li className="mb-2">Submenu 2</li>
                            {/* Add other submenu items here */}
                        </ul>
                    )}
                </li>

                {/* Repeat the above block for links 5 to 8 */}
            </ul>
        </aside>
    );
};

export default AsideBar;
