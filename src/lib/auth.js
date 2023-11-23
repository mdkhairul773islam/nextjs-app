import jwt from 'jsonwebtoken';

export function verifyToken(token) {
  if (!token) {
    return null;
  }
  
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error('JWT verification error:', error);
    return null;
  }
}
