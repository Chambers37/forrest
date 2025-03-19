'use client'

import Link from "next/link";
import Image from "next/image"
import { useState, useEffect } from "react";
import { applyFadeInEffect } from "@/utils/fadeInEffect";


export default function RetainingWalls() {

    useEffect(() => {
        const observer = applyFadeInEffect('fade-hidden');
  
        return () => observer.disconnect();
    }, [])

  const images = [
    "/images/hardscaping/RetainingWalls/BleachersWallFront.jpg",
    "/images/hardscaping/RetainingWalls/BleachersWallBack.jpg",
    "/images/hardscaping/RetainingWalls/SmallWall.jpg",
    "/images/hardscaping/RetainingWalls/LargeGrayWall.jpg",
    "/images/hardscaping/RetainingWalls/pool_wall.jpg",
  ];

  const enlargedImages = [
    "/images/hardscaping/RetainingWalls/BleachersWallFront.jpg",
    "/images/hardscaping/RetainingWalls/BleachersWallBack.jpg",
    "/images/hardscaping/RetainingWalls/SmallWall.jpg",
    "/images/hardscaping/RetainingWalls/LargeGrayWall.jpg",
    "/images/hardscaping/RetainingWalls/pool_wall.jpg",
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
            src="/images/hardscaping/RetainingWalls/LargeGrayWall.jpg"
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
            <div className="text-center md:text-left text-4xl p-2">
              <h1>Retaining Walls</h1>
            </div>
            <div className="text-center md:text-left md:indent-8 text-lg p-2">
              <p>
                Retaining walls are an essential solution for maximizing your outdoor space, creating new elevations, and leveling your lawn. We design and build retaining walls that are not only highly functional but also enhance the beauty of your landscape, all while meeting the highest industry standards. 
              </p>
            </div>
            <div className="text-center md:text-left md:indent-8 text-lg p-2">
              <p>
                With expert craftsmanship and durable materials, our retaining walls provide long-lasting stability and seamless integration with your outdoor environment. Whether you need structural support, erosion control, or a visually striking feature, we customize every project to suit your property’s unique needs, ensuring both strength and style. 
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="w-full aspect-[16/9] relative">
              <Image
                src="/images/hardscaping/RetainingWalls/main_wall.png"
                fill
                alt="test"
                className="object-cover rounded-lg p-5"
              />
            </div>
          </div>
        </section>

        {/* <div className="mb-5 fade-hidden">
          <div className="text-3xl p-2">
            mini title 2
          </div>
          <div className="text-lg p-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit qui aut tempore nemo modi pariatur ad, cum ab aliquid nobis? In soluta reprehenderit vitae iure repudiandae voluptatem sunt atque dolores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis earum deserunt placeat eaque blanditiis porro vero nostrum, magnam expedita. Ipsam sapiente tenetur aliquid nulla magnam voluptatem cupiditate minima tempora ducimus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam deleniti porro nam non unde cum accusantium autem illo? Laudantium ipsum beatae temporibus provident fuga officia nobis, pariatur possimus iste voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorem ipsam incidunt amet consectetur fugit, odio ea dolore eius tempore magni ullam omnis reiciendis nam sit autem blanditiis maxime. Ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas facere optio similique quis sapiente molestiae cupiditate laborum officiis alias nam quae maiores debitis saepe, reprehenderit quaerat doloremque provident dolore voluptas.
          </div>
          
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
