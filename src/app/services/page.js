'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { applyFadeInEffect } from "@/utils/fadeInEffect";

export default function Services() {

  useEffect(() => {
    const observer = applyFadeInEffect('fade-hidden');

    return () => observer.disconnect();
}, [])
  
  return (
    <div >

      {/* Image Banner */}
      <section className="relative">
        <div className="relative w-full max-w-[4000px] h-[300px] overflow-hidden">
          <Image
            src='/images/services-banner-cropped.png'
            fill
            alt='Pool Deck and Retaining Wall'
            className="object-cover"
          />
        </div>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-7xl">
          Available Services
        </h1>
      </section>

      <section className="fade-hidden">
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-8 w-full">
          {/* Hardscaping */}
          <div className="text-center">
            <div className="grid justify-center">
              <Link href={'/Hardscaping'}>
                <Image 
                  src='/images/service-landscape.png'
                  width={100}
                  height={100}
                  alt='test'
                  className="hover:scale-110"
                />
              </Link>
            </div>
            <div>
              <Link className="" href={'/Hardscaping'}><p className="text-darkGreen font-bold text-3xl underline hover:text-lightGreen hover:italic hover:scale-110">Hardscaping</p></Link>
            </div>
            <ul className="grid grid-cols-1 gap-3 pt-5">
              <Link className="hover:scale-110 hover:font-bold hover:italic hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/WalkwaysAndPatios'}>Walkways & Patios</Link>
              <Link className="hover:scale-110 hover:font-bold hover:italic hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/PoolDecks'}>Pool Decks</Link>
              <Link className="hover:scale-110 hover:font-bold hover:italic hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/FencingAndRetainingWalls'}>Fencing & Retaining Walls</Link>
              <Link className="hover:scale-110 hover:font-bold hover:italic hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/NaturalStoneWork'}>Natural Stone Work</Link>
              <Link className="hover:scale-110 hover:font-bold hover:italic hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/PavilionsAndPergolas'}>Pavilions & Pergolas</Link>
              <Link className="hover:scale-110 hover:font-bold hover:italic hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/OutdoorLivingSpaces'}>Outdoor Living Spaces</Link>
            </ul>
          </div>

          {/* Landscaping */}
          <div className="text-center">
            <div className="grid justify-center">
                <Link 
                  href={'/Landscaping'}
                >
                  <Image 
                    src='/images/service-landscape.png'
                    width={100}
                    height={100}
                    alt='test'
                    className="hover:scale-110"
                  />
                </Link>
              </div>
              <Link className="" href={'/Landscaping'}><p className="text-darkGreen font-bold text-3xl underline hover:text-lightGreen hover:italic hover:scale-110">Landscaping</p></Link>
            <ul className="grid grid-cols-1 gap-3 pt-5">
              <Link className="hover:scale-110 hover:font-bold hover:italic hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/GardenDesign'}>Garden Design</Link>
              <Link className="hover:scale-110 hover:font-bold hover:italic hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/TreeAndShrubCare'}>Tree & Shrub Care</Link>
              <Link className="hover:scale-110 hover:font-bold hover:italic hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/DrainageSolutions'}>Drainage Solutions</Link>
              <Link className="hover:scale-110 hover:font-bold hover:italic hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/NewPlantInstallations'}>New Plant Installations</Link>
            </ul>
          </div>

          {/* Maintenanace */}
          <div className="text-center">
            <div className="grid justify-center">
              <Image 
                src='/images/service-landscape.png'
                width={100}
                height={100}
                alt='test'
              />
            </div>
            <div><p className="text-darkGreen font-bold text-3xl underline hover:text-lightGreen">Maintenance</p></div>
            <ul className="grid grid-cols-1 gap-3 pt-5">
              <Link className="hover:scale-110 hover:font-bold hover:italic hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/'}>Seasonal Services</Link>
              <Link className="hover:scale-110 hover:font-bold hover:italic hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/'}>Year Round Property Care</Link>
            </ul>
          </div>
        </div>
      </section>

      {/* Quote Form ?!?!?!? */}
      <section>
        <div className="grid justify-center">
          <div>
            <p className="text-6xl">
            Quote Form?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
