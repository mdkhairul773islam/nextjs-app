import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">FlightFinder</h1>
                <div>
                    <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:text-emerald-200">Home</Link>
                    <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:text-emerald-200">Book Flight</Link>
                    <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:text-emerald-200" >Contact</Link>
                    <Link href="auth/login" className="px-3 py-2 rounded-md text-sm font-medium hover:text-emerald-200">Login</Link>
                </div>
            </div>
        </nav>
    );
}
