'use client'

import Link from "next/link";
import Image from "next/image"
import { useState, useEffect } from "react";
import { applyFadeInEffect } from "@/utils/fadeInEffect";


export default function WalkwaysAndPatios() {

    useEffect(() => {
        const observer = applyFadeInEffect('fade-hidden');
  
        return () => observer.disconnect();
    }, [])

  const images = [
    "/images/hardscaping/WalkwaysAndPatios/FrontWalkwayBefore.jpg",
    "/images/hardscaping/WalkwaysAndPatios/FrontWalkwayAfter.jpg",
    "/images/hardscaping/WalkwaysAndPatios/Walkway1.png",
    "/images/hardscaping/WalkwaysAndPatios/PatioWithBorder.jpg",
    "/images/hardscaping/WalkwaysAndPatios/SlabWalkway.jpg",
    "/images/hardscaping/WalkwaysAndPatios/BlueStonePatio.jpg",
    "/images/hardscaping/WalkwaysAndPatios/WalkwayWithMulch.jpg",
    "/images/hardscaping/WalkwaysAndPatios/CurvedWalkway.jpg",
    "/images/hardscaping/WalkwaysAndPatios/pool-deck.png",
  ];

  const enlargedImages = [
    "/images/hardscaping/WalkwaysAndPatios/FrontWalkwayBefore.jpg",
    "/images/hardscaping/WalkwaysAndPatios/FrontWalkwayAfter.jpg",
    "/images/hardscaping/WalkwaysAndPatios/Walkway1.png",
    "/images/hardscaping/WalkwaysAndPatios/PatioWithBorder.jpg",
    "/images/hardscaping/WalkwaysAndPatios/SlabWalkway.jpg",
    "/images/hardscaping/WalkwaysAndPatios/BlueStonePatio.jpg",
    "/images/hardscaping/WalkwaysAndPatios/WalkwayWithMulch.jpg",
    "/images/hardscaping/WalkwaysAndPatios/CurvedWalkway.jpg",
    "/images/hardscaping/WalkwaysAndPatios/pool-deck.png",
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
            src="/images/hardscaping/WalkwaysAndPatios/WalkwayWithMulch2.jpg"
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
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full fade-hidden">
          <div>
            <div className="font-medium text-4xl p-2">
              <h1>
                Walkways & Patios
              </h1>
            </div>
            <div className="text-lg p-2">
              <p>
                Our team installs pavers to the highest standards based upon CHMA and ICPI industry standard guidelines. Along with having over 30 years of practical experience, we’ll happily stand behind our work and give you a product that will stand the test of time.
              </p>
            </div>
            <div className="text-lg p-2">
              <p>
                Let us handle everything from design to final completion of your walk or patio, including final grading, sod and plant instillations to create a space uniquely yours.
              </p>
            </div>
          </div>

           {/* Image Section */}
            <div className="flex justify-center">
              <div className="w-full aspect-[16/9] relative">
                <Image
                  src="/images/hardscaping/WalkwaysAndPatios/PatioWithLights.jpg"
                  fill
                  alt="test"
                  className="object-cover rounded-lg p-5"
                />
              </div>
            </div>
        </section>

        {/* <div className="mb-5 fade-hidden">
          <div className="bg-transparent text-3xl p-2">mini title 2</div>
          <div className="bg-transparent text-lg p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit qui aut tempore nemo modi pariatur ad, cum ab aliquid nobis? In soluta reprehenderit vitae iure repudiandae voluptatem sunt atque dolores.</div>
        </div> */}

        <div>

          {/* Image Gallery */}
          <section className="w-full fade-hidden mt-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {images.map((srcUrl, i) => (
                <div key={i} className="flex justify-center">
                  <button
                    onClick={() => openModal(i)}
                    className="w-[400px] h-[400px] relative hover:opacity-60 hover:cursor-zoom-in transition duration-500"
                  >
                    <Image 
                      src={srcUrl} 
                      fill
                      className="object-cover"
                      alt={`Gallery image ${i + 1}`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Lightbox Modal */}
          {isOpen && (
            <div className="hover:cursor-zoom-out fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={closeModal}>
              <button
                className="absolute top-5 right-5 text-white text-3xl hover:opacity-70"
                onClick={closeModal}
              >
                ✖
              </button>

              {/* Previous Button */}
              <div
                className="absolute left-5 cursor-pointer text-white text-3xl p-3 hover:opacity-70"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
              >
                Previous
              </div>

              {/* Enlarged Image */}
              <Image 
                src={enlargedImages[enlargedImageIndex]} 
                width={2000} 
                height={1500} 
                alt={`Gallery image ${enlargedImageIndex + 1}`} 
                className="rounded-lg hover:cursor-pointer"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
              />

              {/* Next Button */}
              <div
                className="absolute right-5 cursor-pointer text-white text-3xl p-3 hover:opacity-70"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
              >
                Next
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
