import { NextResponse } from 'next/server';
import { parse } from 'cookie';
import verifyToken from './lib/auth';
export async function middleware(req) {

    const { token } = parse(req.headers.get('cookie') || '');
    const url = req.nextUrl.clone();
    const isLoginRoute = url.pathname === '/auth/login';
    const isTokenValid = await verifyToken(token);

    // If the user is already authenticated and trying to access login page,
    // redirect them to the '/user' route
    if (isLoginRoute && isTokenValid) {
        url.pathname = '/user';
        return NextResponse.redirect(url);
    }

    // If no valid token is found and it's not the login route, redirect to login
    if (!isTokenValid && !isLoginRoute) {
        url.pathname = '/auth/login';
        return NextResponse.redirect(url);
    }

    // Allow the request to proceed for authenticated users or
    // if it's the login route
    return NextResponse.next();
}

export const config = {
    matcher: ['/user/:path*', '/auth/login'],
}
