"use client"
import { useState } from 'react';
import Image from 'next/image';

export function Header() {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div>
                    {/* Logo or Title */}
                    <h1 className="text-2xl font-bold">My Website</h1>
                </div>

                <div className="flex items-center">
                    {/* Notification Icon */}
                    <button className="mx-4">
                        {/* Replace with an actual icon */}
                        <span>Notification Icon</span>
                    </button>

                    {/* Profile Picture */}
                    <button onClick={toggleProfileMenu}>
                        <Image src="/profile-pic.jpg" alt="Profile" width={40} height={40} className="rounded-full" />
                    </button>

                    {/* Profile Menu */}
                    {isProfileMenuOpen && (
                        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
