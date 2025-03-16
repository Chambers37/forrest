'use client'

import Link from "next/link";
import Image from "next/image"
import { useState, useEffect } from "react";
import { applyFadeInEffect } from "@/utils/fadeInEffect";


export default function SeasonalServices() {

    useEffect(() => {
        const observer = applyFadeInEffect('fade-hidden');
  
        return () => observer.disconnect();
    }, []);

  const enlargedImages = [
    '/images/landscape/seasonal_services/mulch/mulched_spring_bed.jpg',
    '/images/landscape/seasonal_services/mulch/spring_tulips.jpg',
    '/images/landscape/seasonal_services/leaf/leaf_blowing.jpg',
    '/images/landscape/seasonal_services/leaf/leaf_cleanup.jpg',
    '/images/landscape/seasonal_services/summer_pruning/front_walkway.jpg',
    '/images/landscape/seasonal_services/summer_pruning/front_walk_with_bushes.jpg',
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
          <Link href='/services'>
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
                Seasonal Services
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

        {/* Mulching */}
        <section className="flex flex-col fade-hidden mb-3">
          <div>
            <div>
              <h1 className="text-2xl font-medium pl-2 text-center md:text-left">
                Mulching
              </h1>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3">
            <div className="p-2">
              <div className="text-center md:text-left">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quo. Nesciunt error ullam debitis cupiditate odio veniam sunt quisquam cum ipsa atque, voluptas neque iste perspiciatis laudantium. Iste, ex mollitia?
                </p>
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px] hover:cursor-zoom-in" onClick={() => openModal(0)}>
                <Image
                  src='/images/landscape/seasonal_services/mulch/mulched_spring_bed.jpg'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover hover:opacity-70"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px] hover:cursor-zoom-in" onClick={() => openModal(1)}>
                <Image
                  src='/images/landscape/seasonal_services/mulch/spring_tulips.jpg'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover hover:opacity-70"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-2 fade-hidden mb-3 border-darkGreen"/>

        {/* Summer Pruning */}
        <section className="flex flex-col fade-hidden mb-3">
          <div>
            <div>
              <h1 className="text-2xl font-medium pl-2 text-center md:text-left">
                Summer Pruning
              </h1>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3">
            <div className="p-2">
              <div className="text-center md:text-left">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quo. Nesciunt error ullam debitis cupiditate odio veniam sunt quisquam cum ipsa atque, voluptas neque iste perspiciatis laudantium. Iste, ex mollitia?
                </p>
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px] hover:cursor-zoom-in" onClick={() => openModal(4)}>
                <Image
                  src='/images/landscape/seasonal_services/summer_pruning/front_walkway.jpg'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover hover:opacity-70"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px] hover:cursor-zoom-in" onClick={() => openModal(5)}>
                <Image
                  src='/images/landscape/seasonal_services/summer_pruning/front_walk_with_bushes.jpg'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover hover:opacity-70"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-2 fade-hidden mb-3 border-darkGreen"/>


        {/* Leaf Removal */}
        <section className="flex flex-col fade-hidden mb-3">
          <div>
            <div>
              <h1 className="text-2xl font-medium pl-2 text-center md:text-left">
                Leaf Removal
              </h1>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3">
            <div className="p-2">
              <div className="text-center md:text-left">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quo. Nesciunt error ullam debitis cupiditate odio veniam sunt quisquam cum ipsa atque, voluptas neque iste perspiciatis laudantium. Iste, ex mollitia?
                </p>
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px] hover:cursor-zoom-in" onClick={() => openModal(2)}>
                <Image
                  src='/images/landscape/seasonal_services/leaf/leaf_blowing.jpg'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover hover:opacity-70"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px] hover:cursor-zoom-in" onClick={() => openModal(3)}>
                <Image
                  src='/images/landscape/seasonal_services/leaf/leaf_cleanup.jpg'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover hover:opacity-70"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* <hr className="border-2 fade-hidden mb-3 border-darkGreen"/>

        Snow Removal
        <section className="flex flex-col fade-hidden mb-3">
          <div>
            <div>
              <h1 className="text-2xl font-medium pl-2 text-center md:text-left">
                Snow Removal
              </h1>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3">
            <div className="p-2">
              <div className="text-center md:text-left">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quo. Nesciunt error ullam debitis cupiditate odio veniam sunt quisquam cum ipsa atque, voluptas neque iste perspiciatis laudantium. Iste, ex mollitia?
                </p>
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px] hover:cursor-zoom-in" onClick={() => openModal(fixME)}>
                <Image
                  src='/images/landscape/seasonal_services/leaf/leaf_cleanup.jpg'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover hover:opacity-70"
                />
              </div>
            </div>
            <div className="p-2 flex items-center">
              <div className="relative w-full h-[300px] hover:cursor-zoom-in" onClick={() => openModal(fixME)}>
                <Image
                  src='/images/services-banner-cropped.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover hover:opacity-70"
                />
              </div>
            </div>
          </div>
        </section> */}

      </div>

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
  );
}
