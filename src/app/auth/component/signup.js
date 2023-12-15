"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Button from './button';
import Message from './message';

const SignUp = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const onSubmit = async (data) => {
        setLoading(true);
        setMessage('');
        setError('');
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const response = await axios.post(`${apiUrl}/auth/register`, data);
            if (response.status === 200) {
                reset(); // Clear the form
                setMessage('User registered successfully.');
                router.push('/auth/login');
            }
        } catch (error) {
            setError('Failed to register. Please try again.');
            console.error('Registration error:', error);
            console.error('Registration error:', error);
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
                {/* Email Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input
                        {...register("name", { required: true })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                        id="name"
                        type="text"
                        placeholder="Name"
                    />
                    {errors.name && <span className="text-red-500">Name is required</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                        id="email"
                        type="email"
                        placeholder="youremail@gmail.com"
                    />
                    {errors.email && <span className="text-red-500">Enter a valid email</span>}
                </div>

                {/* Password Input */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input
                        {...register("password", { required: true })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
                        id="password"
                        type="password"
                        placeholder="******************"
                    />
                    {errors.password && <span className="text-red-500">Password is required</span>}
                </div>

                {/* Submit Button */}
                <Button
                    buttonName="Register"
                />

                {/* Link to Login */}
                <p className="text-sm mt-5">Already have an account? <Link className="text-blue-500 hover:text-blue-700" href="/auth/login">Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;
