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
      <section id="quote-form" className="grid grid-cols-1 md:grid-cols-2 p-7 py-[9vh]">

        <div className="grid items-center bg-greenWhite fade-hidden w-full justify-center">
          <div className="mx-auto max-w-[680px] text-center">
            <p className="text-center text-darkGreen text-6xl">
            Contact us today <br /> to create your <br /> dream outdoor <br /> living space!</p>
            <p className="text-center text-darkGreen text-xl px-10 md:px-20 pt-4 pb-20">Let us know some information about you and the project or area you are looking to transform. We will reach out to you shortly & we look forward to working with you!
            </p>
          </div>
        </div>
        
        {/*Quote Form*/}
        <div className="bg-greenWhite fade-hidden flex w-full mx-auto p-3 items-center justify-center">

          <form className="max-w-lg w-full text-2xl grid grid-cols-1 md:grid-cols-2 gap-7 m-20">
            
            <div>
              <label htmlFor="first-name" className="text-darkGreen">
                First Name *
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                className="border-darkGreen hover:bg-white focus:outline-none focus:border-b-2 border-b-2 bg-greenWhite mt-1 w-full focus:bg-white focus:self-center focus:mr-auto text-sm p-2"
                required
              />        
            </div>
              
            <div>
              <label htmlFor="last-name" className="text-darkGreen">
                Last Name *
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                className="border-darkGreen hover:bg-white focus:outline-none focus:border-b-2 border-b-2 bg-greenWhite mt-1 w-full focus:bg-white focus:self-center focus:mr-auto text-sm p-2"
                required
              />        
            </div>
          
            <div>
              <label htmlFor="city" className="text-darkGreen">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="border-darkGreen hover:bg-white focus:outline-none focus:border-b-2 border-b-2 bg-greenWhite mt-1 w-full focus:bg-white focus:self-center focus:mr-auto text-sm p-2"
                />        
            </div>

            <div>
              <label htmlFor="Email" className="text-darkGreen">
                Email *
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                className="border-darkGreen hover:bg-white focus:outline-none focus:border-b-2 border-b-2 bg-greenWhite mt-1 w-full focus:bg-white focus:self-center focus:mr-auto text-sm p-2"
                required
              />        
            </div>
          
            <div>
              <label htmlFor="Phone" className="text-darkGreen">
                Phone
              </label>
              <input
                type="tel"
                id="Phone"
                name="Phone"
                className="border-darkGreen hover:bg-white focus:outline-none focus:border-b-2 border-b-2 bg-greenWhite mt-1 w-full focus:bg-white focus:self-center focus:mr-auto text-sm p-2"
                />        
            </div>

            <div>
              <label htmlFor="service" className="text-darkGreen">
                Type of Service *
              </label>
              <select
                id="service-type"
                name="service-type"
                className="border-darkGreen hover:bg-white focus:outline-none focus:border-b-2 border-b-2 bg-greenWhite mt-1 w-full focus:bg-white focus:self-center focus:mr-auto text-sm p-2"
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

            <div className="grid col-span-1 md:col-span-2">
              <label htmlFor="Phone" className="text-darkGreen">
                Please Tell Us About Your Project
              </label>
              <textarea placeholder="Write your message here" className="hover:bg-white mt-2 h-[12vh] bg-transparent border-2 border-solid border-darkGreen p-2 text-sm">
              </textarea>
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
