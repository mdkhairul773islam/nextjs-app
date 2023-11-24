// middleware.js
export const authMiddleware = (req, res, next) => {
    console.log('its work');
    const token = localStorage.getItem('token'); // get token from storage
    if (!token) {
        // if no token, redirect to login
        res.redirect('/login');
        return;
    }
    // Optionally, validate the token here
    next(); // proceed to the next middleware/route handler
};
