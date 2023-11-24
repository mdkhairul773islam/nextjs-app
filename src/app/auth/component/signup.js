"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const SignUp = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        try {
            const response = await axios.post('http://localhost:3000/api/auth/register', { email, password });
            setMessage('User registered successfully.');
            if (response.status === 200) {
                router.push('/auth/login');
            }
        } catch (error) {
            setError('Failed to register. Please try again.');
            console.error('Registration error:', error);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                {/* Message Display */}
                {message && <p className="text-green-500 text-xs italic">{message}</p>}
                {error && <p className="text-red-500 text-xs italic">{error}</p>}
                {/* Email Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="youremail@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                    />
                </div>

                {/* Password Input */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Register
                    </button>
                </div>

                {/* Link to Login */}
                <p className="text-sm mt-5">Already have an account? <Link className="text-blue-500 hover:text-blue-700" href="/auth/login">Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;
