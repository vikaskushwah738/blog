import Link from "next/link"

export const Navbar = () => {
    return (
        <header>
            <nav className="flex justify-between px-16 h-16 items-center">
                <div>
                    Logo
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
