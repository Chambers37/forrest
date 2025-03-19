'use client'

import Link from "next/link";
import Image from "next/image"
import { useEffect } from "react";
import { applyFadeInEffect } from "@/utils/fadeInEffect";
import QuoteForm from "@/components/QuoteForm";


export default function Portfolio() {

    useEffect(() => {
        const observer = applyFadeInEffect('fade-hidden');
  
        return () => observer.disconnect();
    }, [])

  return (
    <div>
      <section className="w-full">
        <div className="relative w-full h-[350px]">
          <Image
            src='/images/services-banner-cropped.png'
            fill
            alt='Pool Deck and Retaining Wall'
            className="object-cover"
          />
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto w-full px-4">

        {/* Service Detail Section */}
        <section className="grid grid-cols-1 gap-6 w-full fade-hidden">
          <div>
            <div className="text-6xl p-2 text-center mb-6 mt-0 font-medium text-darkGreen">
              <h1>Our Portfolio</h1>
            </div>
          </div>
        </section>

        <div>

          {/* Image Gallery */}
          <section className="w-full fade-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex flex-col items-center">
                  <Link
                    href={'/Job1'}
                    className="w-full max-w-[350px] aspect-square relative hover:opacity-80"
                  >                    
                    <Image 
                      src={'/images/img1.jpg'} 
                      fill
                      className="object-cover"
                      alt='fix me'
                    />
                    
                  </Link>
                  <div className="w-full text-center">
                    <Link
                      href={'/Job1'}>
                        <h1 className="text-xl font-medium text-darkGreen py-2 hover:underline">
                          Pitcherella
                        </h1>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Link
                    href={'/Job2'}
                    className="w-full max-w-[350px] aspect-square relative hover:opacity-80"
                  >                    
                    <Image 
                      src={'/images/img1.jpg'} 
                      fill
                      className="object-cover"
                      alt='fix me'
                    />
                    
                  </Link>
                  <div className="w-full text-center">
                    <Link
                      href={'/Job2'}>
                        <h1 className="text-xl font-medium text-darkGreen py-2 hover:underline">
                          Jim McGills
                        </h1>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Link
                    href={'/Job3'}
                    className="w-full max-w-[350px] aspect-square relative hover:opacity-80"
                  >                    
                    <Image 
                      src={'/images/img1.jpg'} 
                      fill
                      className="object-cover"
                      alt='fix me'
                    />
                    
                  </Link>
                  <div className="w-full text-center">
                    <Link
                      href={'/Job3'}>
                        <h1 className="text-xl font-medium text-darkGreen py-2 hover:underline">
                          Fred Bow
                        </h1>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Link
                    href={'/Job4'}
                    className="w-full max-w-[350px] aspect-square relative hover:opacity-80"
                  >                    
                    <Image 
                      src={'/images/img1.jpg'} 
                      fill
                      className="object-cover"
                      alt='fix me'
                    />
                    
                  </Link>
                  <div className="w-full text-center">
                    <Link
                      href={'/Job4'}>
                        <h1 className="text-xl font-medium text-darkGreen py-2 hover:underline">
                          Rob Achamanbauch
                        </h1>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Link
                    href={'/Job5'}
                    className="w-full max-w-[350px] aspect-square relative hover:opacity-80"
                  >                    
                    <Image 
                      src={'/images/img1.jpg'} 
                      fill
                      className="object-cover"
                      alt='fix me'
                    />
                    
                  </Link>
                  <div className="w-full text-center">
                    <Link
                      href={'/Job5'}>
                        <h1 className="text-xl font-medium text-darkGreen py-2 hover:underline">
                          Angela Holten
                        </h1>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Link
                    href={'/Job6'}
                    className="w-full max-w-[350px] aspect-square relative hover:opacity-80"
                  >                    
                    <Image 
                      src={'/images/img1.jpg'} 
                      fill
                      className="object-cover"
                      alt='fix me'
                    />
                    
                  </Link>
                  <div className="w-full text-center">
                    <Link
                      href={'/Job6'}>
                        <h1 className="text-xl font-medium text-darkGreen py-2 hover:underline">
                          Sue and Asa
                        </h1>
                    </Link>
                  </div>
                </div>
            </div>
            
          </section>

        </div>
      </div>

      <QuoteForm />
    </div>
  );
}
