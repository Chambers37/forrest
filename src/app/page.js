'use client'

import { applyFadeInEffect } from "@/utils/fadeInEffect";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import QuoteForm from "@/components/QuoteForm";

export default function Homepage() {

  useEffect(() => {
      const observer = applyFadeInEffect('fade-hidden');

      return () => observer.disconnect();
  }, [])

  const images = [
    "/images/site-logo.png",
    "/images/site-logo.png",
    "/images/site-logo.png",
    "/images/site-logo.png",
    "/images/site-logo.png",
  ];
  return (
    <div>

      {/** Main Hero Section */}
      <div className="bg-lightGreen w-full text-black text-center py-4">

        <p className="text-6xl">
        Professional
        </p>

        <p className="text-6xl">        
        Hardscape & Landscape
        </p>

        <p className="text-6xl">
        Services
        </p>

      </div>

      {/** Main Hero Section part2*/}
      <div className="fade-hidden relative w-full max-w-[4000px] h-[500px] mx-auto overflow-hidden">

        <Image
          src='/images/better-pool-banner.jpg'
          fill
          alt='Pool Deck and Retaining Wall'
          className="object-cover p-7"
        />

      </div>
      
      {/* Request a quote*/}
      <QuoteForm />

      {/* services */}
      <section className="flex bg-gradient-to-r from-greenWhite via-lightGreen
               to-darkerGreen p-7">

        <div className="fade-hidden w-full px-8">
          <p className="p-2 text-2xl font-medium text-darkGreen"><Link href="/Services">Our Services</Link></p>
          <h1 className="hover:text-darkerGreen transition duration-300 p-4 text-6xl font-medium text-darkGreen"><Link href="/SeasonalServices">Seasonal Services</Link></h1>
          <hr className="m-1 border-black"></hr>
          <h1 className="hover:text-darkerGreen transition duration-300 p-4 text-6xl font-medium text-darkGreen"><Link href="/NaturalStoneWork">Natural Stone Work</Link></h1>
          <hr className="m-1 border-black"></hr>
          <h1 className="hover:text-darkerGreen transition duration-300 p-4 text-6xl font-medium text-darkGreen"><Link href="/DesignRendering">3D Design Rendering</Link></h1>
          <hr className="m-1 border-black"></hr>
          <h1 className="hover:text-darkerGreen transition duration-300 p-4 text-6xl font-medium text-darkGreen"><Link href="/OutdoorLivingSpaces">Outdoor Living Spaces</Link></h1>
          <hr className="m-1 border-black"></hr>
          <Link href="/Services">
            <button className="min-w-[150px] w-1/4 bg-darkGreen hover:bg-lightGreen font-medium rounded-full text-white p-4 mt-6 mb-5 transition duration-300">View All Services</button>
          </Link>
        </div>

      </section>

      {/* Image wheel*/}
      {/* <section className="h-80 flex items-center justify-center">
        <div className="flex items-center justify-center p-5 gap-5">
          <div className="h-80 flex items-center justify-center overflow-hidden">
            <img className="px-2 scale-150 w-full object-cover" src="/images/better-pool-banner.jpg" alt="" />
          </div>        
          <div className="h-80 flex items-center justify-center overflow-hidden">
            <img className="px-2 scale-150 w-full object-cover" src="/images/pool-banner-cropped.png" alt="" />
          </div>        
          <div className="h-80 flex items-center justify-center overflow-hidden">
            <img className="px-2 scale-150 w-full object-cover" src="/images/pool-banner.jpg" alt="" />
          </div>        
          <div className="h-80 flex items-center justify-center overflow-hidden">
            <img className="px-2 scale-150 w-full object-cover" src="/images/site-logo.png" alt="" />
          </div>        
          <div className="h-80 flex items-center justify-center overflow-hidden">
            <img className="px-2 scale-150 w-full object-cover" src="/images/pool-banner-cropped2.png" alt="" />
          </div>              
        </div>
      </section> */}

      {/** Why Us */}
      <section>
        <div className="fade-hidden grid grid-cols-1 md:grid-cols-2 pt-10">
          <div className="self-center pl-20">
            <h1 className="text-6xl text-darkGreen">Why Choose Us</h1>
          </div>
          <div className="pr-20 text-lg mx-auto max-w-[680px]">
            <p>Forrest Hardscape & Landscape is a full-service company servicing the greater Chester County region.</p>
            <p className="mb-6">Forrest Hardscape & Landscape is a full-service company servicing the greater Chester County region.</p>
            <p>With 18 years of experience in the horticultural industry, Matt and his team, work with homeowners and businesses to design, install, and maintain landscape and hardscape projects, both big and small.</p>
          </div>
        </div>
      </section>
          <hr className="col-span-2 border-darkGreen m-10 mx-20"></hr>
      <section>
        <div>
          <div className="fade-hidden text-3xl justify-center gap-10 md:gap-20 lg:gap-40 mx-20 flex col-span-1 md:col-span-2">
            <div><p className="text-darkGreen">On Time, Every Time</p></div>
            <div><p className="text-darkGreen">Experienced Team Members</p></div>
            <div><p className="text-darkGreen">High Quality Materials</p></div>
            <div><p className="text-darkGreen">Trusted and Insured</p></div>
          </div>
        </div>
      </section>

      {/** What Clients Say */}
      <section>
        {/* <div className="fade-hidden flex justify-center gap-10 my-10">
          <div className="text-5xl">
            <p>What Our Clients Say</p>
          </div>
          <div className="text-3xl">
            <p>Blah Blah Blach</p>
            <p>Patty</p>
          </div>
        </div> */}
        <div className="fade-hidden relative w-full max-w-[4000px] h-[500px] mx-auto overflow-hidden">

          <Image
            src='/images/finished-pool-deck.png'
            fill
            alt='Pool Deck and Retaining Wall'
            className="object-cover p-7"
          />

        </div>
      </section>


    </div>
  );
}
