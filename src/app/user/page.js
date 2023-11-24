"use client"
import React from 'react'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
export default function User() {
    const router = useRouter();
    const logout = () => {
        Cookies.remove('token', { path: '/' });
        router.push('auth/login');
    };
    return (
        <div>User Dashboard
            <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Logout
            </button>
        </div>
    )
}
