'use client'
import { useState } from 'react';
import axios from 'axios';
import { setCookie } from 'nookies';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://your-laravel-api/login', {
        email,
        password,
      });

      // Handle successful login (e.g., store token in cookies)
      setCookie(null, 'token', response.data.token, { path: '/' });

      // Redirect to the protected page upon successful login
      router.push('/protected');
    } catch (error) {
      // Handle login error
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
