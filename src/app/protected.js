// pages/protected.js
import { withAuthServerSideProps } from './middleware/auth';

const ProtectedPage = () => {
  return (
    <div>
      <h1>Protected Page</h1>
      {/* Content for the protected page */}
    </div>
  );
};

export const getServerSideProps = withAuthServerSideProps(() => ({ props: {} }));

export default ProtectedPage;
