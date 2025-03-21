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
      <section className="flex bg-gradient-to-r from-greenWhite
               to-lightGreen p-7">

        <div className="fade-hidden w-full px-8">
          <p className="text-center md:text-left p-2 text-2xl font-medium text-darkGreen"><Link href="/services">Our Services</Link></p>
          <h1 className="text-center md:text-left text-4xl hover:text-black transition duration-300 md:p-4 md:text-6xl font-medium text-darkGreen"><Link href="/Hardscaping">Hardscaping Services</Link></h1>
          <hr className="m-2 border-black"></hr>
          <h1 className="text-center md:text-left text-4xl hover:text-black transition duration-300 md:p-4 md:text-6xl font-medium text-darkGreen"><Link href="/WalkwaysAndPatios">Walkways & Patios</Link></h1>
          <hr className="m-2 border-black"></hr>
          <h1 className="text-center md:text-left text-4xl hover:text-black transition duration-300 md:p-4 md:text-6xl font-medium text-darkGreen"><Link href="/NaturalStoneWork">Natural Stone Work</Link></h1>
          <hr className="m-2 border-black"></hr>
          <h1 className="text-center md:text-left text-4xl hover:text-black transition duration-300 md:p-4 md:text-6xl font-medium text-darkGreen"><Link href="/OutdoorLivingSpaces">Outdoor Living Spaces</Link></h1>
          <hr className="m-2 border-black"></hr>
          <h1 className="text-center md:text-left text-4xl hover:text-black transition duration-300 md:p-4 md:text-6xl font-medium text-darkGreen"><Link href="/Landscaping">Landscaping Services</Link></h1>
          <hr className="m-2 border-black"></hr>
          <div className="text-center md:text-left">
            <Link href="/services">
              <button className="min-w-[175px] max-w-[300px] w-1/2 bg-darkGreen hover:text-black hover:bg-lightGreen font-medium rounded-full text-white p-4 mt-6 mb-5 transition duration-300">View All Services</button>
            </Link>
          </div>
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
          <div className="text-center md:self-center md:pl-20 md:pr-10">
            <h1 className="mb-5 md:mb-0 text-6xl text-darkGreen">Why Choose Us</h1>
          </div>
          <div className="text-center md:text-left px-10 md:pr-20 md:pl-10 text-lg mx-auto max-w-[680px]">
            <p className="md:indent-8">Forrest Hardscape & Landscape is a full-service company servicing the greater Chester County region.</p>
            <p className="mb-6">Forrest Hardscape & Landscape is a full-service company servicing the greater Chester County region.</p>
            <p className="md:indent-8">With 18 years of experience in the horticultural industry, Matt and his team, work with homeowners and businesses to design, install, and maintain landscape and hardscape projects, both big and small.</p>
          </div>
        </div>
      </section>
          <hr className="col-span-2 border-darkGreen m-10 mx-20"></hr>
      <section>
        <div>
          <div className="fade-hidden text-3xl justify-center gap-6 md:gap-20 lg:gap-40 mx-5 md:mx-20 grid grid-cols-2 md:grid-cols-4">
            <div><p className="text-center text-darkGreen">On Time, Every Time</p></div>
            <div><p className="text-center text-darkGreen">Experienced Team Members</p></div>
            <div><p className="text-center text-darkGreen">High Quality Materials</p></div>
            <div><p className="text-center text-darkGreen">Trusted and Insured</p></div>
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
