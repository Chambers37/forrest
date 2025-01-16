'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation';


export default function Nabar() {

  const pathname = usePathname();

  return (
    <main className='flex flex-col items-center bg-gray-100 py-4'>
      <Image
        src="/images/site-logo.png"
        width={300}
        height={96}
        alt="Forrest Hardscape and Landscape"
        className="h-[96px] w-[300px] object-contain block"
      />
      
      <nav className='flex flex-wrap justify-center text-center space-x-4'>
        <a href="/" className={`text-2xl font-Merriweather-Bold font-bold italic transition duration-200 ${
            pathname === '/' ? 'text-black' : 'text-green-800 hover:text-lightGreen'
          }`}>Home</a>
        <span className='text-gray-400'>|</span>
        <a href="/services" className={`text-2xl font-Merriweather font-bold italic transition duration-200 ${
            pathname === '/services' ? 'text-black' : 'text-green-800 hover:text-lightGreen'
          }`}>Our Services</a>
        <span className='text-gray-400'>|</span>
        <a href="/quote" className={`text-2xl font-Merriweather font-bold italic transition duration-200 ${
            pathname === '/quote' ? 'text-black' : 'text-green-800 hover:text-lightGreen'
          }`}>Request A Quote</a>
        <span className='text-gray-400'>|</span>
        <a href="/about" className={`text-2xl font-Merriweather font-bold italic transition duration-200 ${
            pathname === '/about' ? 'text-black' : 'text-green-800 hover:text-lightGreen'
          }`}>About Us</a>
      </nav>
    </main>
  )
}