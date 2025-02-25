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
            src='/images/hardscaping/outdoor_living_spaces/firepits/firepit_and_chair.png'
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
                outdoor_living_spaces
              </h1>
            </div>
            <div className="text-lg p-2 text-center">
              <p className="md:px-20">
                Transform your backyard into a stunning, functional retreat designed for relaxation, entertainment, and family gatherings. Our team works closely with you to create a custom outdoor living space tailored to your needs and lifestyle. Whether you're envisioning a cozy firepit, a shaded pergola, or a fully equipped outdoor kitchen, we bring creativity and craftsmanship to every project. Explore the possibilities and get inspired to design the outdoor oasis of your dreams.
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
          <div className="grid sm:grid-cols-1">
          <div className="grid sm:grid-cols-1 md:grid-cols-3">
              <div className="p-2 ">
                <div className="text-center md:text-left">
                  <p>
                    Create the perfect spot for summer nights spent roasting marshmallows and making memories. Our expert team designs and builds custom firepits that seamlessly blend with your outdoor aesthetic, offering warmth, ambiance, and a welcoming gathering space.
                  </p>
                </div>
              </div>
              <div className="p-2 flex items-center">
                <div className="relative w-full h-[300px]">
                  <Image
                    src='/images/hardscaping/outdoor_living_spaces/firepits/firepit_with_wall.jpg'
                    fill
                    alt='Pool Deck and Retaining Wall'
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-2 flex items-center">
                <div className="relative w-full h-[300px]">
                  <Image
                    src='/images/hardscaping/outdoor_living_spaces/firepits/firepit_and_chair.png'
                    fill
                    alt='Pool Deck and Retaining Wall'
                    className="object-cover"
                  />
                </div>
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
          <div className="grid sm:grid-cols-1">
            <div className="grid sm:grid-cols-1 md:grid-cols-4">
              <div className="p-2">
                <div className="text-center md:text-left">
                  <p>
                    Need relief from the summer sun? Let us install a beautiful pavilion with a fully enclosed roof for maximum shade, or a stylish pergola with open latticework for partial coverage. These structures add both charm and function, creating the perfect space to unwind outdoors.
                  </p>
                </div>
              </div>
              <div className="p-2 flex items-center">
                <div className="relative w-full h-[300px]">
                  <Image
                    src='/images/hardscaping/outdoor_living_spaces/pavilions/brown_pavilion.jpg'
                    fill
                    alt='Pool Deck and Retaining Wall'
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-2 flex items-center">
                <div className="relative w-full h-[300px]">
                  <Image
                    src='/images/hardscaping/outdoor_living_spaces/pavilions/pavilion_side.jpg'
                    fill
                    alt='Pool Deck and Retaining Wall'
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-2 flex items-center">
                <div className="relative w-full h-[300px]">
                  <Image
                    src='/images/hardscaping/outdoor_living_spaces/pavilions/inside_pavilion.jpg'
                    fill
                    alt='Pool Deck and Retaining Wall'
                    className="object-cover"
                  />
                </div>
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
                  Take your entertaining to the next level with a custom outdoor kitchen or dining area. Whether you're hosting intimate dinners or large family gatherings, we design and build spaces that fit your vision—complete with countertops, grills, and even outdoor pizza ovens for that perfect homemade pizza experience.
                </p>
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src='/images/hardscaping/outdoor_living_spaces/firepits/firepit_and_chair.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src='/images/hardscaping/outdoor_living_spaces/firepits/firepit_and_chair.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
            <div className="relative w-full h-[300px]">
                <Image
                  src='/images/hardscaping/outdoor_living_spaces/firepits/firepit_and_chair.png'
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
                  Using high-quality PVC and composite decking materials, we create custom decks that are as durable as they are beautiful. Enhance your space with aluminum, cable, or drink railings for a polished look that elevates both safety and style.
                </p>
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src='/images/hardscaping/outdoor_living_spaces/firepits/firepit_and_chair.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src='/images/hardscaping/outdoor_living_spaces/firepits/firepit_and_chair.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
            <div className="relative w-full h-[300px]">
                <Image
                  src='/images/hardscaping/outdoor_living_spaces/firepits/firepit_and_chair.png'
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
                  Enjoy your outdoor space long after the sun sets with professional low-voltage lighting solutions. From wireless controllers to app-controlled RGB color-changing lights, we add both safety and ambiance. Our expertise allows us to seamlessly integrate lighting into retaining walls, patios, decks, and landscape features, ensuring your outdoor space shines—day or night.
                </p>
                <p className="mt-2">
                  Let us bring your vision to life with expertly crafted outdoor spaces that enhance the beauty, functionality, and value of your home.
                </p>
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src='/images/hardscaping/outdoor_living_spaces/firepits/firepit_and_chair.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src='/images/hardscaping/outdoor_living_spaces/firepits/firepit_and_chair.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
            <div className="relative w-full h-[300px]">
                <Image
                  src='/images/hardscaping/outdoor_living_spaces/firepits/firepit_and_chair.png'
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
