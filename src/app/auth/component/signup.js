"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Button from './button';
import Message from './message';
const SignUp = () => {
    const router = useRouter();
    const [name, setName] = useState('');
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
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, { name, email, password });
            setMessage('User registered successfully.');
            if (response.status === 200) {
                router.push('/auth/login');
            }
        } catch (error) {
            setError('Failed to register. Please try again.');
            console.error('Registration error:', error);
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autoComplete="off"
                    />
                </div>

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
                    buttonName="Register"
                />
                {/* Link to Login */}
                <p className="text-sm mt-5">Already have an account? <Link className="text-blue-500 hover:text-blue-700" href="/auth/login">Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;
