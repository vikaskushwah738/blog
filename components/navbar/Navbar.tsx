'use client'

import Image from 'next/image';
import Logo from '@/public/logo.png';
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Tabs from './Tabs';

export const Navbar = () => {
const[isOpen, setIsClose]= useState(false);

const toggale =()=>{
    setIsClose(!isOpen);
} 
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
                    <ul className="hidden lg:flex space-x-10">
                      <Tabs/>
                    </ul>
                </div>
                <div className="lg:hidden text-3xl text-gray-50">
                    <button onClick={toggale}>
                      {isOpen ?   <IoMdClose /> : <IoMenuSharp />}  
                    </button>
                </div>
            </nav>
                 {isOpen && (
                        <ul
                        //   ref={sidebarRef}
                          onClick={toggale}
                          className={`opacity-70 ease-in-out translate-all duration-500 lg:hidden fixed w-[75%] right-0 space-y-5 h-screen text-gray-50 bg-[#242931] z-10 flex flex-col items-center pt-5 md:px-10 px-5`}>
                          <Tabs />
                          {/* {session && <Logout />} */}
                        </ul>    
                 )}
        </header>
    )
}
