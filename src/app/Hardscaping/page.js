'use client'

import Link from "next/link";
import Image from "next/image"
import { useEffect } from "react";
import { applyFadeInEffect } from "@/utils/fadeInEffect";


export default function Hardscaping() {

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
              <h1>Hardscaping Services</h1>
            </div>
          </div>
        </section>

        <div>

          {/* Image Gallery */}
          <section className="w-full fade-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex flex-col items-center">
                  <Link
                    href={'/DesignRendering'}
                    className="w-full max-w-[350px] aspect-square relative hover:opacity-80"
                  >                    
                    <Image 
                      src={"/images/hardscaping/3DDesignRendering/3dDiningArea.jpg"} 
                      fill
                      className="object-cover"
                      alt='test'
                    />
                    
                  </Link>
                  <div className="w-full text-center">
                    <Link
                      href={'/DesignRendering'}>
                        <h1 className="text-xl font-medium text-darkGreen py-2 hover:underline">
                          3D Design Rendering
                        </h1>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Link
                    href={'/WalkwaysAndPatios'}
                    className="w-full max-w-[350px] aspect-square relative hover:opacity-80"
                  >                    
                    <Image 
                      src={'/images/hardscaping/WalkwaysAndPatios/Walkway1.png'} 
                      fill
                      className="object-cover"
                      alt='test'
                    />
                    
                  </Link>
                  <div className="w-full text-center">
                    <Link
                      href={'/WalkwaysAndPatios'}>
                        <h1 className="text-xl font-medium text-darkGreen py-2 hover:underline">
                          Walkways & Patios
                        </h1>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Link
                    href={'/PoolDecks'}
                    className="w-full max-w-[350px] aspect-square relative hover:opacity-80"
                  >                    
                    <Image 
                      src={'/images/hardscaping/pool-deck.png'} 
                      fill
                      className="object-cover"
                      alt='test'
                    />
                    
                  </Link>
                  <div className="w-full text-center">
                    <Link
                      href={'/PoolDecks'}>
                        <h1 className="text-xl font-medium text-darkGreen py-2 hover:underline">
                          Pool Decks
                        </h1>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Link
                    href={'/Fencing'}
                    className="w-full max-w-[350px] aspect-square relative hover:opacity-80"
                  >                    
                    <Image 
                      src={"/images/hardscaping/fencing/CedarFencing.jpg"} 
                      fill
                      className="object-cover"
                      alt='test'
                    />
                    
                  </Link>
                  <div className="w-full text-center">
                    <Link
                      href={'/Fencing'}>
                        <h1 className="text-xl font-medium text-darkGreen py-2 hover:underline">
                          Fencing
                        </h1>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Link
                    href={'/RetainingWalls'}
                    className="w-full max-w-[350px] aspect-square relative hover:opacity-80"
                  >                    
                    <Image 
                      src={'/images/hardscaping/RetainingWalls/main_wall.png'} 
                      fill
                      className="object-cover"
                      alt='test'
                    />
                    
                  </Link>
                  <div className="w-full text-center">
                    <Link
                      href={'/RetainingWalls'}>
                        <h1 className="text-xl font-medium text-darkGreen py-2 hover:underline">
                          Retaining Walls
                        </h1>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Link
                    href={'/NaturalStoneWork'}
                    className="w-full max-w-[350px] aspect-square relative hover:opacity-80"
                  >                    
                    <Image 
                      src={'/images/hardscaping/NaturalStoneWork/rear_patio_with_steps.jpg'} 
                      fill
                      className="object-cover"
                      alt='test'
                    />
                    
                  </Link>
                  <div className="w-full text-center">
                    <Link
                      href={'/NaturalStoneWork'}>
                        <h1 className="text-xl font-medium text-darkGreen py-2 hover:underline">
                        Natural Stone Work
                        </h1>
                    </Link>
                  </div>
                </div>
            </div>
          </section>

          <section>
            <div>
              <div className="flex flex-col items-center">
                <Link
                  href={'/OutdoorLivingSpaces'}
                  className="w-full max-w-[350px] aspect-square relative hover:opacity-80"
                >                    
                  <Image 
                    src={'/images/hardscaping/outdoor_living_spaces/top_of_page/patio_and_firepit.jpg'} 
                    fill
                    className="object-cover"
                    alt='test'
                  />
                  
                </Link>
                <div className="w-full text-center">
                  <Link
                    href={'/OutdoorLivingSpaces'}>
                      <h1 className="text-xl font-medium text-darkGreen py-2 hover:underline">
                      Outdoor Living Spaces
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
