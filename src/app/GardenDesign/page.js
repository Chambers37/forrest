'use client'

import Link from "next/link";
import Image from "next/image"
import { useState, useEffect } from "react";
import { applyFadeInEffect } from "@/utils/fadeInEffect";


export default function GardenDesign() {

    useEffect(() => {
        const observer = applyFadeInEffect('fade-hidden');
  
        return () => observer.disconnect();
    }, [])

  const images = [
    '/images/landscape/garden-design/curved_shrub_bed.jpg',
    '/images/landscape/garden-design/flower_bed_planning.jpg',
    '/images/landscape/garden-design/mulched_flower_bed.jpg'
  ];

  const enlargedImages = [
    '/images/landscape/garden-design/curved_shrub_bed.jpg',
    '/images/landscape/garden-design/flower_bed_planning.jpg',
    '/images/landscape/garden-design/mulched_flower_bed.jpg'
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
        <div className="relative w-full h-[300px]">
          <Image
            src='/images/landscape/garden-design/hillside_design.jpg'
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
            <div className="text-4xl p-2 text-center md:text-left">
              <h1>
                Garden Design
              </h1>
            </div>
            <div className="text-lg p-2">
              <p className="text-center md:text-left md:indent-8">
                Backed by decades of experience and an unwavering passion for creating breathtaking landscapes, Matt and his team work closely with you to transform your vision into reality. Through meticulous 2D and 3D designs, we capture every detail of your dream garden, ensuring that every element is thoughtfully planned and executed. Our collaborative process puts your unique style and preferences at the forefront, allowing us to deliver a landscape that is as functional as it is beautiful.
              </p>
              <p className="mt-5 text-center md:text-left md:indent-8">
               We also guide you through the selection of the perfect plants to guarantee vibrant color throughout the seasons. By carefully considering your site’s specific conditions and tailoring our recommendations to your taste, we craft a sustainable, thriving garden space that not only captivates the eye but continues to flourish over time. Whether you’re seeking a serene retreat or a dynamic outdoor environment, our team is dedicated to bringing your vision to life with precision and care.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="w-full aspect-[16/9] relative">
              <Image
                src='/images/landscape/garden-design/garden_design_3d.jpg'
                fill
                alt='fix me'
                className="object-cover rounded-lg p-5"
              />
            </div>
          </div>
        </section>
        
        <div>

          {/* Image Gallery */}
          <section className="w-full fade-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {images.map((srcUrl, i) => (
                <div key={i} className="flex justify-center ">
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
