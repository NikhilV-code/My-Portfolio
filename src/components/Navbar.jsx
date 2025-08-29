import logo from "../assets/nikhil-Logo.png"
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='Home'>
                <img src={logo} className="mx-2" width={120} height={33}
                    alt="Logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/nikhil-verma-snv/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                    <FaLinkedin/>
            </a>
            <a href="https://github.com/NikhilV-code"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                    <FaGithub/>
            </a>
            <a href="https://x.com/nikhilV988"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter">
                    <FaSquareXTwitter/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar;