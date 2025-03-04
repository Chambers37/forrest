'use client'

import Link from "next/link";
import Image from "next/image"
import { useState, useEffect } from "react";
import { applyFadeInEffect } from "@/utils/fadeInEffect";


export default function PoolDecks() {

    useEffect(() => {
        const observer = applyFadeInEffect('fade-hidden');
  
        return () => observer.disconnect();
    }, [])
    
  const images = [
    "/images/hardscaping/PoolDecks/PoolDeckBefore.jpg",
    "/images/hardscaping/PoolDecks/PoolDeckAfter.jpg",
    "/images/hardscaping/PoolDecks/PoolDeckWalkway.jpg",
    "/images/hardscaping/PoolDecks/LargePoolDeck.png",
    "/images/hardscaping/PoolDecks/PoolAndWall.jpg",
    "/images/hardscaping/PoolDecks/PoolDeck.jpg",
  ];

  const enlargedImages = [
    "/images/hardscaping/PoolDecks/PoolDeckBefore.jpg",
    "/images/hardscaping/PoolDecks/PoolDeckAfter.jpg",
    "/images/hardscaping/PoolDecks/PoolDeckWalkway.jpg",
    "/images/hardscaping/PoolDecks/LargePoolDeck.png",
    "/images/hardscaping/PoolDecks/PoolAndWall.jpg",
    "/images/hardscaping/PoolDecks/PoolDeck.jpg",
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
            src='/images/finished-pool-deck.png'
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
            <div className="font-medium text-4xl p-2">
              <h1>
                Pool Decks
              </h1>
            </div>
            <div className="text-lg p-2">
              <p>
                Getting a new pool? You can trust our team to finish around new pool installations, as well as refurbishing and repurposing existing pool surrounds.
              </p>
            </div>
            <div className="text-lg p-2">
              <p>
                We are accustomed to building things to the highest codes and standards, insuring the proper and correct installation.
              </p>
            </div>
            <div className="text-lg p-2">
              <p>
                Using the highest quality materials and most innovative methods, we can build a space suited to your ideal summer space.
              </p>
            </div>
          </div>

          {/* Image Section */}
            <div className="flex justify-center">
              <div className="w-full aspect-[16/9] relative">
                <Image
                  src="/images/hardscaping/pooldecks/FullPoolDeck.jpg"
                  fill
                  alt="test"
                  className="object-cover rounded-lg p-5"
                />
              </div>
            </div>
        </section>

        {/* <div className="mb-5 fade-hidden">
          <div className="bg-red-300 text-3xl p-2">mini title 2</div>
          <div className="bg-blue-300 text-lg p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit qui aut tempore nemo modi pariatur ad, cum ab aliquid nobis? In soluta reprehenderit vitae iure repudiandae voluptatem sunt atque dolores.</div>
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
