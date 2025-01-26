'use client'

import Image from "next/image";

export default function Services() {
  return (
    <div>
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
      <section>3 lists of services</section>
      <section>Quote Form?</section>
    </div>
  );
}
