'use client'

import Link from "next/link";
import Image from "next/image"
import { useState, useEffect } from "react";
import { applyFadeInEffect } from "@/utils/fadeInEffect";


export default function NewPlantInstallations() {

    useEffect(() => {
        const observer = applyFadeInEffect('fade-hidden');
  
        return () => observer.disconnect();
    }, [])

    const images = [
      "/images/landscape/new_plant_installations/best/front-lawn-with-walk.jpg",
      "/images/landscape/new_plant_installations/best/front-bed-with-maple.jpg",
      "/images/landscape/new_plant_installations/best/curbside-plantings.jpg",
    ];

  const enlargedImages = [
    "/images/landscape/new_plant_installations/best/front-lawn-with-walk.jpg",
    "/images/landscape/new_plant_installations/best/front-bed-with-maple.jpg",
    "/images/landscape/new_plant_installations/best/curbside-plantings.jpg",
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
            src='/images/landscape/new_plant_installations/best/brick-garden-top-of-page.jpg'
            fill
            alt='Pool Deck and Retaining Wall'
            className="object-cover"
          />
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto w-full px-4">
        
        {/* Back to Services Button */}
        <section className="flex justify-center my-4 fade-hidden">
          <Link href='/services'>
            <button className="text-lg text-darkGreen bg-transparent underline hover:outline hover:outline-black hover:outline-1 rounded px-1 py-1">
              Back To Services
            </button>
          </Link>
        </section>

        {/* Service Detail Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full fade-hidden">
          <div>
            <div className=" text-4xl p-2">
              <h1>
                New Plant Installations
              </h1>
            </div>
            <div className=" text-lg p-2">
              <p>
                Drawing on our extensive experience and a deep-rooted passion for horticulture, we craft gardens that are vibrant and ever-changing throughout the year. 
              </p>
              <p className="mt-4">
                Our expert team meticulously selects the perfect combination of plants suited to your local climate and soil conditions, ensuring that your garden bursts into color with each passing season. Imagine a landscape that greets you with delicate spring blossoms, transforms into a lush and lively oasis during the summer, displays the warm hues of autumn, and even offers a serene, understated charm in the winter.
              </p>
              <p className="mt-4">
                We take pride in creating outdoor spaces that do more than just exist—they tell a story. Our approach combines innovative design with sustainable practices to produce a garden that is both beautiful and resilient. With attention to detail in every planting decision and landscape element, we ensure that your garden becomes a unique sanctuary that not only delights you but also impresses neighbors, family, and friends alike. Let us help you transform your outdoor space into a living masterpiece that evolves gracefully with the seasons.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="w-full aspect-[16/9] relative">
              <Image
                src="/images/landscape/new_plant_installations/best/front-steps-with-garden-beds.jpg"
                fill
                alt="test"
                className="object-cover rounded-lg p-5"
              />
            </div>
          </div>
        </section>

        <div>

          {/* Image Gallery */}
          <section className="w-full fade-hidden">
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
