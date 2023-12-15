import { NextResponse } from 'next/server';
import { parse } from 'cookie';
import verifyToken from './lib/auth';

export async function middleware(req) {
    const cookies = parse(req.headers.get('cookie') || '');
    const token = cookies.token;
    const url = req.nextUrl.clone();
    const isLoginRoute = url.pathname === '/auth/login';

    // Check if the token is null or invalid
    const isTokenValid = token ? await verifyToken(token) : false;

    // Redirect to '/user' if the user is authenticated and accessing login page
    if (isLoginRoute && isTokenValid) {
        url.pathname = '/user';
        return NextResponse.redirect(url);
    }

    // Redirect to login if no valid token is found and not on the login route
    if (!isTokenValid && !isLoginRoute) {
        url.pathname = '/auth/login';
        return NextResponse.redirect(url);
    }

    // Allow the request to proceed for authenticated users or the login route
    return NextResponse.next();
}

export const config = {
    matcher: ['/user/:path*', '/auth/login'],
};
