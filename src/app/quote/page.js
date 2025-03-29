'use client'

import { useEffect } from "react";
import { applyFadeInEffect } from "@/utils/fadeInEffect";
import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";



export default function Quote() {

  useEffect(() => {
        const observer = applyFadeInEffect('fade-hidden');
  
        return () => observer.disconnect();
    }, [])

  return (
    <div>
      {/* Quote Banner */}
      <section className="relative">
        <div className="relative w-full max-w-[4000px] h-[175px] md:h-[300px] overflow-hidden">
          <Image
            src='/images/services-banner-cropped.png'
            fill
            alt='Pool Deck and Retaining Wall'
            className="object-cover"
          />
        </div>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-5xl md:text-7xl text-center">
          Get Your<br />Quote Today
        </h1>
      </section>


      {/* Request a quote*/}
      <QuoteForm />
    </div>
  );
}
