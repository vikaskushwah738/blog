import Link from "next/link";
import Image from 'next/image';
import Logo from '@/public/logo.png';
import { IoMenuSharp } from "react-icons/io5";

export const Navbar = () => {
    return (
        <header>
            <nav className="flex justify-between lg:px-16 md:px-9 px-5 h-16 items-center bg-[#242931] text-gray-50">
                <div className="relative lg:h-14 lg:w-24 md:h-14 md:w-28 h-12 w-20">
                    <Image
                        alt="Eclat Engineering Consultants Logo"
                        src={Logo}
                        fill
                        style={{ objectFit: 'fill' }}
                        className="absolute rounded-2xl bg-white"
                        priority
                    />
                </div>
                <div className="">
                    <ul className="hidden lg:flex space-x-10 ">
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li><Link href='/blog'>Blog</Link></li>
                        <li><Link href='/contact-us'>Contact us</Link></li>
                    </ul>

                </div>
                <div className=" lg:hidden text-3xl text-gray-50" >
                   <IoMenuSharp />
                </div>

            </nav>

        </header>
    )
}
