'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { applyFadeInEffect } from "@/utils/fadeInEffect";
import QuoteForm from "@/components/QuoteForm";

export default function Services() {

  useEffect(() => {
    const observer = applyFadeInEffect('fade-hidden');

    return () => observer.disconnect();
}, [])
  
  return (
    <div >

      {/* Image Banner */}
      <section className="relative">
        <div className="relative w-full max-w-[4000px] h-[175px] md:h-[300px] overflow-hidden">
          <Image
            src='/images/services-banner-cropped.png'
            fill
            alt='Pool Deck and Retaining Wall'
            className="object-cover"
          />
        </div>
        <h1 className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-7xl">
          Available Services
        </h1>
      </section>

      <section>
        <div className="grid justify-center mt-4">
          <div>
            <h1 className="text-darkGreen text-3xl text-center">
              Click a Service To Learn More
            </h1>
          </div>
        </div>
      </section>

      <section className="fade-hidden">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 max-w-screen-lg w-full mx-auto">
          
          {/* Hardscaping */}
          <div className="text-center mb-10 md:mb-0">
            <div className="grid justify-center">
              <Link href={'/Hardscaping'}>
                <Image 
                  src='/images/hardscaping/3DDesignRendering/design-rendering.png'
                  width={200}
                  height={200}
                  alt='Hardscaping services category photo'
                  className="hover:opacity-80"
                />
              </Link>
            </div>
            <div>
              <Link href={'/Hardscaping'}>
                <p className="text-darkGreen font-bold text-3xl underline hover:text-lightGreen hover:scale-105">
                  Hardscaping
                </p>
              </Link>
            </div>
            <ul className="grid grid-cols-1 gap-3 pt-5">
              <Link className="hover:font-bold hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/DesignRendering'}>
                <p>
                  3D Design Rendering
                </p>
              </Link>
              <Link className="hover:font-bold hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/WalkwaysAndPatios'}>
                <p>
                  Walkways & Patios
                </p>
              </Link>
              <Link className="hover:font-bold hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/PoolDecks'}>
                <p>
                  Pool Decks
                </p>
              </Link>
              <Link className="hover:font-bold hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/Fencing'}>
                <p>
                  Fencing & Railing
                </p>
              </Link>
              <Link className="hover:font-bold hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/RetainingWalls'}>
                <p>
                  Retaining Walls
                </p>
              </Link>
              <Link className="hover:font-bold hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/NaturalStoneWork'}>
                <p>
                  Natural Stone Work
                </p>
              </Link>
              <Link className="hover:font-bold hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/OutdoorLivingSpaces'}>
                <p>
                  Outdoor Living Spaces
                </p>
              </Link>
            </ul>
          </div>

          {/* Landscaping */}
          <div className="text-center">
            <div className="grid justify-center">
                <Link 
                  href={'/Landscaping'}
                >
                  <Image 
                    src='/images/Landscaping-category.png'
                    width={200}
                    height={200}
                    alt='Landscaping services category photo'
                    className="hover:opacity-80"
                  />
                </Link>
              </div>
              <Link href={'/Landscaping'}><p className="text-darkGreen font-bold text-3xl underline hover:text-lightGreen hover:scale-105">Landscaping</p></Link>
            <ul className="grid grid-cols-1 gap-3 pt-5">
              <Link className="hover:font-bold hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/GardenDesign'}>Garden Design</Link>
              <Link className="hover:font-bold hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/NewPlantInstallations'}>New Plant Installations</Link>
              {/* <Link className="hover:font-bold hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/DrainageAndGradingSolutions'}>Drainage & Grading Solutions</Link> */}
              <Link className="hover:font-bold hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/SeasonalServices'}>Seasonal Services</Link>
            </ul>
          </div>

          {/* Maintenanace */}
          {/* <div className="text-center">
            <div className="grid justify-center">
              <Link
                href={'/Maintenance'}
              >
                <Image 
                  src='/images/maintenance-category.png'
                  width={200}
                  height={200}
                  alt='fix me'
                  className="hover:opacity-80"
                />
              </Link>
            </div>
            <Link href={'/Maintenance'}><p className="text-darkGreen font-bold text-3xl underline hover:text-lightGreen hover:scale-105">Maintenance</p></Link>
            <ul className="grid grid-cols-1 gap-3 pt-5">
              <Link href={'/SeasonalServices'}><p className="hover:font-bold hover:underline hover:text-black text-lg hover:text-lightGreen">Seasonal Services</p></Link>
              <Link className="hover:font-bold hover:underline hover:text-black text-lg hover:text-lightGreen" href={'/YearRoundPropertyCare'}>Year-Round Property Care</Link>
            </ul>
          </div> */}

        </div>
      </section>

      {/* Request a quote*/}
      <QuoteForm />
    </div>
  );
}
