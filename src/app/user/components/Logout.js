import Link from 'next/link';
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';
const Logout = () => {
    const router = useRouter();
    const logout = () => {
        Cookies.remove('token', { path: '/' });
        router.push('/');
    };
    return (
        <Link href="/" onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Logout
        </Link>
    );
};
export default Logout;
