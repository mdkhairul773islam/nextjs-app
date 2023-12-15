import Link from "next/link";
import Image from "next/image";
export function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div>
                    <Image src="/logo.png" alt="Logo" width={50} height={50} />
                </div>

                {/* About Us Text */}
                <div>
                    <p>About Us</p>
                    <p>Some short text about the company or website.</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex">
                    <Link className="mx-2" href="https://facebook.com">
                        Facebook Icon
                    </Link>
                    <Link className="mx-2" href="https://twitter.com">
                        Twitter Icon
                    </Link>
                    <Link className="mx-2" href="https://instagram.com">
                        Instagram Icon
                    </Link>
                </div>
            </div>
        </footer>
    );
}