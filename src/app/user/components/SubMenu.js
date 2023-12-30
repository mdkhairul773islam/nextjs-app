import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
const SubMenu = ({ icon, label, submenuItems, isOpen, onClick }) => (
    <li className="mb-4 flex flex-col">
        <div className="flex items-center justify-between mb-2" onClick={onClick}>
            <div className="flex items-center">
                <FontAwesomeIcon icon={icon} className="mr-2" />
                {label}
            </div>
            <FontAwesomeIcon icon={isOpen ? faAngleDown : faAngleRight} className="text-xs ml-2" />
        </div>
        {isOpen && (
            <ul className="pl-4 transition-all duration-300">
                {submenuItems.map((item, index) => (
                    <li key={index} className="mb-2">
                        {item}
                    </li>
                ))}
            </ul>
        )}
    </li>
);

export default SubMenu;