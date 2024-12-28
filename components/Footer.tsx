import Link from "next/link"

const Footer = () => {
  return (
    <footer className="md:flex md:justify-evenly ">
          <div>
            <h3>LOGO</h3>
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