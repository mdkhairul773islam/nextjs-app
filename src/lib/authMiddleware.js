// authMiddleware.js
import { NextResponse } from 'next/server';
import { verifyToken } from './auth'; // Import your token verification function

export function authMiddleware(req) {
  const token = req.cookies.get('token'); // Adjust based on how you store the token

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const user = verifyToken(token);

  if (!user) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}
