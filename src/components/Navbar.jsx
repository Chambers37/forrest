'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation';


export default function Nabar() {

  const pathname = usePathname();

  return (
    <main id='header' className='flex fixed z-50 top-0 w-full justify-between bg-gray-100 pt-4 pb-1'>

      <Image
        src="/images/site-logo.png"
        width={300}
        height={96}
        alt="Forrest Hardscape and Landscape"
        className="h-[72px] w-[225px] object-contain block ml-2 md:ml-3 lg:ml-5"
      />

      <div className='flex flex-row-reverse'>

        <button className='hover:bg-green-800 hover:border-white hover:text-lightGreen hover:scale-110 hover:border-green-800 hover:text-white transition duration-300 self-end rounded-lg bg-lightGreen border-lightGreen border-solid border-2 p-1 mr-2 md:mr-3 lg:mr-5 py-2 mb-1'>
          <p>Call Today</p>
        </button>

        <nav className='flex flex-wrap items-end text-center space-x-3 mr-2 md:mr-3 lg:mr-5 pb-1'>

          <a href="/" className={`text-l font-Merriweather-Bold font-bold italic transition duration-200 ${
            pathname === '/' ? 'text-black' : 'text-green-800 hover:text-lightGreen'
          }`}>Home</a>

          <span className='text-gray-400'>|</span>
          <a href="/services" className={`text-l font-Merriweather font-bold italic transition duration-200 ${
            pathname === '/services' ? 'text-black' : 'text-green-800 hover:text-lightGreen'
          }`}>Our Services</a>

          <span className='text-gray-400'>|</span>
          <a href="/quote" className={`text-l font-Merriweather font-bold italic transition duration-200 ${
            pathname === '/quote' ? 'text-black' : 'text-green-800 hover:text-lightGreen'
          }`}>Request A Quote</a>

          <span className='text-gray-400'>|</span>
          <a href="/portfolio" className={`text-l font-Merriweather font-bold italic transition duration-200 ${
            pathname === '/portfolio' ? 'text-black' : 'text-green-800 hover:text-lightGreen'
          }`}>Portfolio</a>

            <span className='text-gray-400'>|</span>
          <a href="/about" className={`text-l font-Merriweather font-bold italic transition duration-200 ${
            pathname === '/about' ? 'text-black' : 'text-green-800 hover:text-lightGreen'
          }`}>About Us</a>

        </nav>

      </div>

    </main>
  )
}