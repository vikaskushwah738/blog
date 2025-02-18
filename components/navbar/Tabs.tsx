import Link from "next/link";
const Tabs = () => {
    return (
        <>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
            <li><Link href='/contact-us'>Contact us</Link></li>
        </>
    )
}

export default Tabs