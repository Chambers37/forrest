'use client'

import Link from "next/link";
import Image from "next/image"
import { useEffect } from "react";
import { applyFadeInEffect } from "@/utils/fadeInEffect";


export default function Maintenance() {

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

      <div className="max-w-screen-md mx-auto w-full px-4">
        
        {/* Back to Services Button */}
        <section className="flex justify-center my-4 mb-1 fade-hidden">
          <Link href='/services'>
            <button className="text-lg text-darkGreen bg-transparent underline hover:outline hover:outline-black hover:outline-1 rounded px-1 py-1">
              Back To Services
            </button>
          </Link>
        </section>

        {/* Service Detail Section */}
        <section className="grid grid-cols-1 gap-6 w-full fade-hidden">
          <div>
            <div className="text-6xl p-2 text-center mb-6 mt-0 font-medium text-darkGreen">
              <h1>Maintenance Services</h1>
            </div>
          </div>
        </section>

        <div>

          {/* Image Gallery */}
          <section className="w-full fade-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col items-center">
                  <Link
                    href={'/SeasonalServices'}
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
                      href={'/SeasonalServices'}>
                        <h1 className="text-xl font-medium text-darkGreen py-2 hover:underline">
                         Seasonal Services
                        </h1>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Link
                    href={'/YearRoundPropertyCare'}
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
                      href={'/YearRoundPropertyCare'}>
                        <h1 className="text-xl font-medium text-darkGreen py-2 hover:underline">
                          Year-Round Property Care
                        </h1>
                    </Link>
                  </div>
                </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
