'use client'

import Link from "next/link";
import Image from "next/image"
import { useState, useEffect } from "react";
import { applyFadeInEffect } from "@/utils/fadeInEffect";


export default function OutdoorLivingSpaces() {

    useEffect(() => {
        const observer = applyFadeInEffect('fade-hidden');
  
        return () => observer.disconnect();
    }, [])

  const images = [
    "/images/better-pool-banner.jpg",
    "/images/services-banner.jpg",
    "/images/better-pool-banner.jpg",
    "/images/services-banner.jpg",
    "/images/img3.jpg",
    "/images/services-banner.jpg",
    "/images/better-pool-banner.jpg",
    "/images/services-banner.jpg",
    "/images/better-pool-banner.jpg",
  ];

  const enlargedImages = [
    "/images/better-pool-banner.jpg",
    "/images/services-banner.jpg",
    "/images/better-pool-banner.jpg",
    "/images/services-banner.jpg",
    "/images/img3.jpg",
    "/images/services-banner.jpg",
    "/images/better-pool-banner.jpg",
    "/images/services-banner.jpg",
    "/images/better-pool-banner.jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [enlargedImageIndex, setEnlargedImageIndex] = useState(null);

  const openModal = (index) => {
    setEnlargedImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setEnlargedImageIndex((prev) => (prev + 1) % enlargedImages.length);
  };

  const prevImage = () => {
    setEnlargedImageIndex((prev) => (prev - 1 + enlargedImages.length) % enlargedImages.length);
  };

  return (
    <div>
      <section className="w-full">
        <div className="relative w-full h-[400px]">
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
        <section className="flex justify-center my-4 fade-hidden">
          <Link href='/Services'>
            <button className="text-lg text-darkGreen bg-transparent underline hover:outline hover:outline-black hover:outline-1 rounded px-1 py-1">
              Back To Services
            </button>
          </Link>
        </section>

        {/* Service Detail Section */}
        <section className="w-full fade-hidden mb-10">
          <div>
            <div className="text-center text-4xl p-2">
              <h1>
                Outdoor Living Spaces
              </h1>
            </div>
            <div className="text-lg p-2 text-center">
              <p className="md:px-20">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam quae eius possimus saepe veritatis, totam ipsum cumque repellendus quo accusamus temporibus dicta! Ad labore magnam, voluptatibus veniam officiis voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quia tempore esse cumque quo vero doloremque possimus quod! Fuga fugiat non blanditiis. Voluptas iure tempora ipsum qui possimus nobis! Voluptatibus.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-2 fade-hidden mb-3 border-darkGreen"/>

        {/* Firepits */}
        <section className="flex flex-col fade-hidden mb-3">
          <div>
            <div>
              <h1 className="text-2xl font-medium pl-2 text-center md:text-left">
                Firepits
              </h1>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-4">
            <div className="p-2">
              <div className="text-center md:text-left">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quo. Nesciunt error ullam debitis cupiditate odio veniam sunt quisquam cum ipsa atque, voluptas neque iste perspiciatis laudantium. Iste, ex mollitia?
                </p>
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src='/images/services-banner-cropped.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src='/images/services-banner-cropped.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
            <div className="relative w-full h-[300px]">
                <Image
                  src='/images/services-banner-cropped.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-2 fade-hidden mb-3 border-darkGreen"/>

        {/* Pavilions & Pergolas */}
        <section className="flex flex-col fade-hidden mb-3">
          <div>
            <div>
              <h1 className="text-2xl font-medium pl-2 text-center md:text-left">
                Pavilions & Pergolas
              </h1>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-4">
            <div className="p-2">
              <div className="text-center md:text-left">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quo. Nesciunt error ullam debitis cupiditate odio veniam sunt quisquam cum ipsa atque, voluptas neque iste perspiciatis laudantium. Iste, ex mollitia?
                </p>
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src='/images/services-banner-cropped.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src='/images/services-banner-cropped.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src='/images/services-banner-cropped.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-2 fade-hidden mb-3 border-darkGreen"/>

        {/* Outdoor Kitchen & Dining Area */}
        <section className="flex flex-col fade-hidden mb-3">
          <div>
            <div>
              <h1 className="text-2xl font-medium pl-2 text-center md:text-left">
                Outdoor Kitchen & Dining Area
              </h1>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-4">
            <div className="p-2">
              <div className="text-center md:text-left">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quo. Nesciunt error ullam debitis cupiditate odio veniam sunt quisquam cum ipsa atque, voluptas neque iste perspiciatis laudantium. Iste, ex mollitia?
                </p>
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src='/images/services-banner-cropped.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src='/images/services-banner-cropped.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
            <div className="relative w-full h-[300px]">
                <Image
                  src='/images/services-banner-cropped.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-2 fade-hidden mb-3 border-darkGreen"/>

        {/* Deck Installations */}
        <section className="flex flex-col fade-hidden mb-3">
          <div>
            <div>
              <h1 className="text-2xl font-medium pl-2 text-center md:text-left">
                Deck Installations
              </h1>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-4">
            <div className="p-2">
              <div className="text-center md:text-left">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quo. Nesciunt error ullam debitis cupiditate odio veniam sunt quisquam cum ipsa atque, voluptas neque iste perspiciatis laudantium. Iste, ex mollitia?
                </p>
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src='/images/services-banner-cropped.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src='/images/services-banner-cropped.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
            <div className="relative w-full h-[300px]">
                <Image
                  src='/images/services-banner-cropped.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-2 fade-hidden mb-3 border-darkGreen"/>

        {/* Outdoor Lighting */}
        <section className="flex flex-col fade-hidden mb-3">
          <div>
            <div>
              <h1 className="text-2xl font-medium pl-2 text-center md:text-left">
                Outdoor Lighting
              </h1>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-4">
            <div className="p-2">
              <div className="text-center md:text-left">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quo. Nesciunt error ullam debitis cupiditate odio veniam sunt quisquam cum ipsa atque, voluptas neque iste perspiciatis laudantium. Iste, ex mollitia?
                </p>
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src='/images/services-banner-cropped.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src='/images/services-banner-cropped.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
            <div className="relative w-full h-[300px]">
                <Image
                  src='/images/services-banner-cropped.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
