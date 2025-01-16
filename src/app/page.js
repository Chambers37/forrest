'use client'

import Image from "next/image";

export default function Homepage() {
  return (
    <div>
      <Image
        src='/images/pool-banner-cropped.png'
        width={4000}
        height={1100}
        alt='Pool Deck and Retaining Wall'
      />
      <p>Home</p>
    </div>
  );
}
