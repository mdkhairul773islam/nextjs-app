"use client"
import { useState } from "react"
import Link from "next/link"
export function Aside() {
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const toggleSubmenu = (submenu) => {
        if (openSubmenu === submenu) {
            setOpenSubmenu(null);
        } else {
            setOpenSubmenu(submenu);
        }
    };
    return (
        <div className="w-64 h-screen bg-gray-800 text-white fixed">
            <div className="flex items-center justify-center h-20 shadow-md">
                <h1 className="text-3xl uppercase">Logo</h1>
            </div>
            <ul className="py-4">
                <li>
                    <Link href="/" className="flex items-center p-4 hover:bg-gray-700">
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <button
                        className="flex items-center p-4 w-full text-left hover:bg-gray-700"
                        onClick={() => toggleSubmenu('about')}
                    >
                        <span>About</span>
                    </button>
                    {openSubmenu === 'about' && (
                        <ul className="pl-8">
                            <li className="py-2 hover:bg-gray-600">
                                <Link href="/about/team">
                                    Team
                                </Link>
                            </li>
                            <li className="py-2 hover:bg-gray-600">
                                <Link href="/about/company">
                                    Company
                                </Link>
                            </li>
                            {/* More sub-items */}
                        </ul>
                    )}
                </li>
                {/* More main menu items */}
            </ul>
        </div>
    )
}