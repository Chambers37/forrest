'use client'

import Image from "next/image";

export default function Homepage() {
  return (
    <main>
      <div className="bg-lightGreen w-full text-black text-center py-4">
        <p className="text-6xl font-bold">
        Professional
        </p>
        <p className="text-6xl font-bold">
        
        Hardscape & Landscape
        </p>
        <p className="text-6xl font-bold">
        Services
        </p>
      </div>
      <div className="relative w-full max-w-[4000px] h-[500px] mx-auto overflow-hidden">

        <Image
          src='/images/pool-banner-cropped2.png'
          fill
          alt='Pool Deck and Retaining Wall'
          className="object-cover p-7"
          />

        </div>

      <p>Home</p>

    </main>
  );
}
