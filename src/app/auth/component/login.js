/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Button from './button';
import Cookies from 'js-cookie';
import Message from './message';
const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { email, password });
            if (response.status === 200) {
                const token = response.data.token;
                Cookies.set('token', token, { expires: 1, path: '/' });
                setMessage('User login successfully.');
                router.push('/user');
            }

        } catch (error) {
            const errorMessage = error.response?.data?.error ?? error.response?.statusText ?? "An unknown error occurred";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ${loading ? 'opacity-50' : ''}`} onSubmit={handleSubmit}>
                {/* Loading Text */}
                <Message loading={loading} message="Loading..." type="loading" />
                {/* Message Display */}
                <Message message={message} type="success" />
                <Message message={error} type="error" />
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
                <Button
                    loading={loading}
                    buttonName="Login"
                />
                {/* Link to Login */}
                <p className="text-sm mt-5">Don't have an account?  <Link href="/auth/signup" className="text-blue-500 hover:text-blue-700">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;
