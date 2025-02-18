import Link from "next/link";
import Image from 'next/image';
import Logo from '@/public/logo.png';

export const Navbar = () => {
    return (
        <header>
            <nav className="flex justify-between px-16 h-16 items-center bg-[#242931] text-gray-50">
                <div className="relative lg:h-24 lg:w-44 md:h-20 md:w-40 h-16 w-32">
                    <Image
                        alt="Eclat Engineering Consultants Logo"
                        src={Logo}
                        fill
                        style={{ objectFit: 'fill' }}
                        className="absolute rounded-2xl bg-white"
                        priority
                    />
                </div>

                <ul className="flex space-x-10">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/blog'>Blog</Link></li>
                    <li><Link href='/contact-us'>Contact us</Link></li>
                </ul>
            </nav>

        </header>
    )
}
