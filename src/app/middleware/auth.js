// middleware/auth.js
import { parseCookies } from 'nookies';

export const withAuthServerSideProps = (handler) => async (context) => {
  const cookies = parseCookies(context);

  // Check if the user is authenticated
  const isAuthenticated = /* implement your authentication check here */;

  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  // Call the handler if authenticated
  return await handler(context);
};
