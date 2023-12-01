"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold">My Next.js App</h1>
                <div className="relative">
                    <Image
                        src="/profile.png"
                        width={0}
                        height={0}
                        alt="User Avatar"
                        className="h-8 w-8 rounded-full cursor-pointer"
                        onClick={toggleDropdown}
                    />

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                            <Link href="/user-settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                User Settings
                            </Link>
                            <Link href="/user-settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Logout
                            </Link>
                            {/* Add other dropdown links here */}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
