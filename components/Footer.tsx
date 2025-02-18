import Link from "next/link"
import Image from 'next/image';
import Logo from '@/public/logo.png'
const Footer = () => {
  return (
    <footer className="md:flex md:justify-evenly bg-[#151B1F] text-gray-50 py-4">
      <div className="relative lg:h-24 lg:w-44 md:h-20 md:w-40 h-16 w-32">
        <Image
          alt="Eclat Engineering Consultants Logo"
          src={Logo}
          fill
          style={{ objectFit: 'fill' }}
          className="absolute  bg-white"
          priority
        />
      </div>
      <div>
        <p>Usefull Link</p>
        <ul className="space-y-2 pt-5">
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/blog'>Blog</Link></li>
          <li><Link href='/contact-us'>Contact us</Link></li>
        </ul>
      </div>
      <div>
        <p>Contact us</p>
      </div>

    </footer>
  )
}

export default Footer