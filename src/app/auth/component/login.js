/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Button from './button';
import Cookies from 'js-cookie';
import Message from './message';
import verifyToken from '@/lib/auth';
import { useForm } from 'react-hook-form';

const Login = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (isLoggedIn) {
            router.push('/user');
        }
    }, [isLoggedIn, router]);

    const onSubmit = async (data) => {
        setLoading(true);
        setMessage('');
        setError('');

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const response = await axios.post(`${apiUrl}/auth/login`, data);
            if (response.status === 200) {
                const token = response.data.token;
                Cookies.set('token', token, { expires: 0.5, path: '/' });
                const isTokenValid = await verifyToken(token);
                isTokenValid && setIsLoggedIn(true);
                setMessage('User login successfully.');
            }
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.error ?? "An unknown error occurred");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ${loading && 'opacity-50'}`} onSubmit={handleSubmit(onSubmit)}>
                <Message loading={loading} message="Loading..." type="loading" />
                <Message message={message} type="success" />
                <Message message={error} type="error" />

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="youremail@gmail.com"
                        {...register("email", { required: true })}
                        autoComplete="off"
                    />
                    {errors.email && <p className="text-red-500 text-xs italic">Email is required.</p>}
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        {...register("password", { required: true })}
                        autoComplete="off"
                    />
                    {errors.password && <p className="text-red-500 text-xs italic">Password is required.</p>}
                </div>

                <Button
                    loading={loading}
                    buttonName="Login"
                />

                <p className="text-sm mt-5">Don't have an account? <Link className="text-blue-500 hover:text-blue-700" href="/auth/signup">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;