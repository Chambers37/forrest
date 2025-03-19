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
    "/images/hardscaping/WalkwaysAndPatios/brick_walk_and_steps.jpg",
    "/images/hardscaping/WalkwaysAndPatios/FrontWalkwayAfter.jpg",
    "/images/hardscaping/WalkwaysAndPatios/Walkway1.png",
    "/images/hardscaping/WalkwaysAndPatios/PatioWithBorder.jpg",
    "/images/hardscaping/WalkwaysAndPatios/SlabWalkway.jpg",
    "/images/hardscaping/WalkwaysAndPatios/square_patio_slab.jpg",
    "/images/hardscaping/WalkwaysAndPatios/patio_and_curved_walkway_with_mulch.jpg",
    "/images/hardscaping/WalkwaysAndPatios/CurvedWalkway.jpg",
    "/images/hardscaping/WalkwaysAndPatios/pool-deck.png",
    "/images/hardscaping/WalkwaysAndPatios/walk_with_border.jpg",
    "/images/hardscaping/WalkwaysAndPatios/two_tone_walk_and_steps.jpg",
    "/images/hardscaping/WalkwaysAndPatios/stone_patio.jpg",
  ];

  const enlargedImages = [
    "/images/hardscaping/WalkwaysAndPatios/brick_walk_and_steps.jpg",
    "/images/hardscaping/WalkwaysAndPatios/FrontWalkwayAfter.jpg",
    "/images/hardscaping/WalkwaysAndPatios/Walkway1.png",
    "/images/hardscaping/WalkwaysAndPatios/PatioWithBorder.jpg",
    "/images/hardscaping/WalkwaysAndPatios/SlabWalkway.jpg",
    "/images/hardscaping/WalkwaysAndPatios/square_patio_slab.jpg",
    "/images/hardscaping/WalkwaysAndPatios/patio_and_curved_walkway_with_mulch.jpg",
    "/images/hardscaping/WalkwaysAndPatios/CurvedWalkway.jpg",
    "/images/hardscaping/WalkwaysAndPatios/pool-deck.png",
    "/images/hardscaping/WalkwaysAndPatios/walk_with_border.jpg",
    "/images/hardscaping/WalkwaysAndPatios/two_tone_walk_and_steps.jpg",
    "/images/hardscaping/WalkwaysAndPatios/stone_patio.jpg",
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
        <div className="relative w-full h-[175px] md:h-[300px]">
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
          <Link href='/services'>
            <button className="text-lg text-darkGreen bg-transparent underline hover:outline hover:outline-black hover:outline-1 rounded px-1 py-1">
              Back To Services
            </button>
          </Link>
        </section>

        {/* Service Detail Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full fade-hidden">
          <div>
            <div className="text-center md:text-left font-medium text-4xl p-2">
              <h1>
                Walkways & Patios
              </h1>
            </div>
            <div className="text-center md:text-left md:indent-8 text-lg p-2">
              <p>
                Our team takes pride in installing pavers with meticulous attention to detail, strictly following the latest CHMA and ICPI industry guidelines. With over 30 years of hands-on experience, we’ve honed our craft to ensure that every project we undertake not only looks stunning but also stands the test of time. By combining proven techniques with top-quality materials, we’re confident in our ability to deliver a surface that enhances your outdoor living space while increasing your property’s value. We firmly stand behind our work, giving you the peace of mind that your investment is in the hands of professionals dedicated to excellence.
              </p>
            </div>
            <div className="text-center md:text-left md:indent-8 text-lg p-2">
              <p>
                From the very first design consultation all the way through to the final touches, we handle every aspect of your walkway or patio installation. Our comprehensive approach includes careful planning, precise grading, and expert sod and plant installations—ensuring your new outdoor area is both functional and visually captivating. 
              </p>
              <p className="text-center md:text-left md:indent-8 mt-4">
                Whether you prefer a cozy gathering spot, an expansive entertainment area, or a stunning walkway that creates an inviting entrance, our team works closely with you to create a space that reflects your personal style. Let us transform your vision into a reality, delivering an outdoor living environment you’ll love for years to come.
              </p>  
            </div>
          </div>

           {/* Image Section */}
            <div className="flex justify-center">
              <div className="w-full aspect-[16/9] relative">
                <Image
                  src="/images/hardscaping/WalkwaysAndPatios/PatioWithLights.jpg"
                  fill
                  alt='fix me'
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
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
