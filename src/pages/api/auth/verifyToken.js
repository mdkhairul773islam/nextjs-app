import jwt from 'jsonwebtoken';

export default function handler(req, res) {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.status(200).json({ valid: true, decoded });
    } catch (error) {
        res.status(401).json({ valid: false, message: 'Invalid token' });
    }
}
