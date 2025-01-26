'use client'

import { useEffect } from "react";
import { applyFadeInEffect } from "@/utils/fadeInEffect";
import Image from "next/image";
import Link from "next/link";



export default function Quote() {

  useEffect(() => {
        const observer = applyFadeInEffect('fade-hidden');
  
        return () => observer.disconnect();
    }, [])

  return (
    <div>
      {/* Quote Banner */}
      <section className="relative">
              <div className="relative w-full max-w-[4000px] h-[300px] overflow-hidden">
                <Image
                  src='/images/services-banner-cropped.png'
                  fill
                  alt='Pool Deck and Retaining Wall'
                  className="object-cover"
                />
              </div>
              <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-7xl text-center">
                Get Your<br />Quote Today
              </h1>
            </section>


      {/* Request a quote*/}
      <section id="quote-form" className="grid grid-cols-1 md:grid-cols-2 border-green border-solid border-lg p-7 py-[9vh] gap-7">

        <div className="fade-hidden w-full border-green border-solid border-lg justify-center">
          <div className="mx-auto max-w-[680px] text-center">
            <p className="text-center text-darkGreen text-6xl pt-20">Request</p>
            <p className="text-center text-darkGreen text-6xl">A Quote</p>
            <p className="text-center text-darkGreen text-6xl">Today</p>
            <p className="text-center text-darkGreen text-xl px-10 md:px-20 pt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, at. Eius sunt esse quidem suscipit aut, adipisci voluptate maiores unde temporibus enim eveniet voluptatem incidunt harum sit deserunt minima beatae!
            </p>
          </div>
        </div>
        
        {/*Quote Form*/}
        <div className="fade-hidden flex w-full mx-auto p-3 items-center justify-center">

          <form className="max-w-lg w-full text-2xl grid grid-cols-1 md:grid-cols-2 gap-7 m-20">
            
            <div>
              <label htmlFor="first-name" className="block text-gray-700">
                First Name *
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                className="focus:outline-none focus:border-b-2 border-b-2 bg-transparent mt-1 block w-full focus:bg-white focus:self-center focus:bg-lightGreen focus:mr-auto text-sm p-2"
                required
              />        
            </div>
              
            <div>
              <label htmlFor="last-name" className="block text-gray-700">
                Last Name *
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                className="focus:outline-none focus:border-b-2 border-b-2 bg-transparent mt-1 block w-full focus:bg-white focus:self-center focus:bg-lightGreen focus:mr-auto text-sm p-2"
                required
              />        
            </div>
          
            <div>
              <label htmlFor="city" className="block text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="focus:outline-none focus:border-b-2 border-b-2 bg-transparent mt-1 block w-full focus:bg-white focus:self-center focus:bg-lightGreen focus:mr-auto text-sm p-2"
                />        
            </div>

            <div>
              <label htmlFor="Email" className="block text-gray-700">
                Email *
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                className="focus:outline-none focus:border-b-2 border-b-2 bg-transparent mt-1 block w-full focus:bg-white focus:self-center focus:bg-lightGreen focus:mr-auto text-sm p-2"
                required
              />        
            </div>
          
            <div className="flex flex-col">
              <label htmlFor="Phone" className="block text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="Phone"
                name="Phone"
                className="focus:outline-none focus:border-b-2 border-b-2 bg-transparent mt-1 block w-full focus:bg-white focus:self-center focus:bg-lightGreen focus:mr-auto text-sm p-2"
                />        
            </div>

            <div>
              <label htmlFor="service" className="block text-gray-700">
                Type of Service *
              </label>
              <select
                id="service-type"
                name="service-type"
                className="hover:bg-transparent  focus:outline-none focus:border-b-2 border-b-2 bg-transparent mt-1 block w-full focus:bg-transparent focus:self-center focus:mr-auto text-sm p-2"
                defaultValue=""
                required
              >
                <option value="" disabled>-Please Choose One-</option>
                <option value="Patios">Patios</option>   
                <option value="Walkways">Walkways</option> 
                <option value="Pool Decks">Pool Decks</option> 
                <option value="Outdoor Living Space">Outdoor Living Space</option> 
                <option value="Landscape Design">Landscape Design</option> 
                <option value="New Plant Installations">New Plant Instalations</option> 
                <option value="Drainage Solutions">Drainage Solutions</option>            
                <option value="Property Maintenance">Property Maintenance</option>            
                <option value="Seasonal Services">Seasonal Services</option>            
              </select>        
            </div>

            <div className="col-span-1 md:col-span-2">
              <button className="mt-10 bg-lightGreen rounded-full hover:bg-darkGreen hover:text-white transition duration-400 w-full p-2 font-medium">
                Submit
              </button>
            </div>
            
          </form>

        </div>

      </section>
    </div>
  );
}
