import Link from "next/link";
const Tabs = () => {
    const links = [
        { title: "Home", path: "/", },
        { title: "About us", path: "/about-us", },
        { title: "Blog", path: "/blog", },
        { title: "Contact us", path: "/contact-us", },
    ]
    return (
        <>
            {links.map((link, index) => (
                <li key={index}  className="relative lg:border-none lg:block flex justify-center border-b-2 border-white  lg:max-w-max w-full lg:pb-0 pb-1">
                    <Link href={link.path}>
                        {link.title}
                    </Link>
                </li>
            ))
            }
            {/* <li><Link href='/about'>About</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
            <li><Link href='/contact-us'>Contact us</Link></li> */}
        </>
    )
}

export default Tabs