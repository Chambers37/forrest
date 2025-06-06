'use client'

import Link from "next/link";
import Image from "next/image"
import { useState, useEffect } from "react";
import { applyFadeInEffect } from "@/utils/fadeInEffect";


export default function DesignRendering() {

    useEffect(() => {
        const observer = applyFadeInEffect('fade-hidden');
  
        return () => observer.disconnect();
    }, [])

  const images = [
    "/images/hardscaping/3DDesignRendering/3DPatio.jpg",
    "/images/hardscaping/3DDesignRendering/3dPoolDeck.jpg",
    "/images/hardscaping/3DDesignRendering/3dPoolDeck1.jpg",
  ];

  const enlargedImages = [
    "/images/hardscaping/3DDesignRendering/3DPatio.jpg",
    "/images/hardscaping/3DDesignRendering/3dPoolDeck.jpg",
    "/images/hardscaping/3DDesignRendering/3dPoolDeck1.jpg",
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
        <div className="relative w-full max-w-[4000px] h-[175px] md:h-[300px] overflow-hidden">
          <Image
            src='/images/hardscaping/3DDesignRendering/dinnger_and_seating_area.jpg'
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
                3D Design Rendering
              </h1>
            </div>
            <div className="text-center md:text-left md:indent-8 p-2">
              <p>
                Have a dream for your outdoor living space but need help visualizing it before construction begins? Our team utilizes Uvision, a state-of-the-art 3D Landscape Creator software to bring your ideas to life. After discussing your vision and evaluating the space, we craft a realistic, immersive design that allows you to virtually walk through your future outdoor oasis before any work begins.
              </p>
            </div>
            {/* <div className="text-3xl p-2">
              <p>
                mini title
              </p>
            </div> */}
            <div className="text-center md:text-left md:indent-8 p-2">
              <p>
                Want to swap out pavers, explore different stone colors, or tweak the layout? No problem! Our flexible design process makes it easy to experiment with different options, ensuring you find the perfect look for your space. We’re here to turn your dream outdoor living space into reality—one detail at a time.
              </p>
            </div>
          </div>

          {/* Image Section */}
            <div className="flex justify-center">
              <div className="w-full aspect-[16/9] relative">
                <Image
                  src="/images/hardscaping/3DDesignRendering/3dDiningArea.jpg"
                  fill
                  alt='3D Photo of an outdoor Dining Area patio'
                  className="object-cover rounded-lg p-5"
                />
              </div>
            </div>
        </section>

        {/* <div className="mb-5 fade-hidden">
          <div className="text-3xl p-2">mini title 2</div>
          <div className="text-lg p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit qui aut tempore nemo modi pariatur ad, cum ab aliquid nobis? In soluta reprehenderit vitae iure repudiandae voluptatem sunt atque dolores.</div>
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
