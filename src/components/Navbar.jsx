'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-[90px] flex fixed z-50 top-0 w-full justify-between bg-greenWhite pt-4 pb-1 shadow-lg">

      {/* Logo */}
      <Link href="/">
        <Image
          src="/images/site-logo.png"
          width={300}
          height={96}
          alt="Forrest Hardscape and Landscape"
          className="pr-4 h-[72px] w-[225px] object-contain block ml-2 md:ml-3 lg:ml-5"
        />
      </Link>

      {/* Call Button */}
      <Link href="tel:6103296293" className="block md:hidden">
        <button className="hover:bg-darkGreen hover:border-white hover:text-greenWhite hover:scale-110 transition duration-300 self-end rounded-lg bg-lightGreen border-lightGreen border-solid border-2 px-3 md:mr-5 py-2">
          Call Today
        </button>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-green-800 text-3xl mr-1 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✖' : '☰'}
      </button>

      {/* Navbar Links (Desktop + Mobile) */}
      <nav
        className={`absolute top-[90px] left-0 w-full bg-greenWhite flex flex-col items-center space-y-4 py-5 shadow-lg 
        md:relative md:flex-row md:space-y-0 md:top-0 md:w-auto md:space-x-3 md:mr-5 md:pb-1 md:shadow-none
        ${menuOpen ? 'block' : 'hidden md:flex'}`}
      >
        <NavItem href="/" pathname={pathname}>Home</NavItem>
        <NavItem href="/Services" pathname={pathname}>Our Services</NavItem>
        <NavItem href="/quote" pathname={pathname}>Request A Quote</NavItem>
        <NavItem href="/Portfolio" pathname={pathname}>Portfolio</NavItem>
        <NavItem href="/about" pathname={pathname}>About Us</NavItem>
      </nav>

      

    </div>
  );
}

function NavItem({ href, pathname, setMenuOpen, children }) {
  return (
    <Link
      href={href}
      className={`text-l font-Merriweather hover:scale-110 font-bold italic transition duration-200 
      ${pathname === href ? 'text-black' : 'text-green-800 hover:text-lightGreen'}`}
      onClick={() => setMenuOpen(false)} 
    >
      {children}
    </Link>
  );
}