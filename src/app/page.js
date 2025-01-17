'use client'

import Image from "next/image";

export default function Homepage() {
  return (
    <main>
      
      <div className="relative w-full max-w-[4000px] h-[500px] mx-auto overflow-hidden bg-red-500">

        <Image
          src='/images/pool-banner-cropped2.png'
          fill
          alt='Pool Deck and Retaining Wall'
          className="object-cover p-10"
          />

        </div>

      <p>Home</p>

    </main>
  );
}
