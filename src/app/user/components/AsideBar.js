import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons';
import SubMenu from './SubMenu';
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
                <SubMenu
                    icon={faCog}
                    label="Link 3"
                    submenuItems={['Submenu 1', 'Submenu 2']}
                    isOpen={submenuStates[0]}
                    onClick={() => toggleSubmenu(0)}
                />

                <SubMenu
                    icon={faCog}
                    label="Link 4"
                    submenuItems={['Submenu 1', 'Submenu 2']}
                    isOpen={submenuStates[1]}
                    onClick={() => toggleSubmenu(1)}
                />
                {/* Repeat the above block for links 5 to 8 */}
            </ul>
        </aside>
    );
};

export default AsideBar;
