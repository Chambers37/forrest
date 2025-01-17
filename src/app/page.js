'use client'

import Image from "next/image";

export default function Homepage() {
  return (
    <main>

      <div className="bg-lightGreen w-full text-black text-center py-4">

        <p className="text-6xl">
        Professional
        </p>

        <p className="text-6xl">        
        Hardscape & Landscape
        </p>

        <p className="text-6xl">
        Services
        </p>

      </div>

      <div className="relative w-full max-w-[4000px] h-[500px] mx-auto overflow-hidden">

        <Image
          src='/images/pool-banner-cropped2.png'
          fill
          alt='Pool Deck and Retaining Wall'
          className="object-cover p-7"
          />

      </div>
      
      {/* Request a quote*/}
      <div className="flex bg-blue-400 border-green border-solid border-lg p-7 gap-7">

        <div className="w-full bg-red-300 border-green border-solid border-lg">
          <p className="text-center text-6xl pt-20">Request</p>
          <p className="text-center text-6xl">A Quote</p>
          <p className="text-center text-6xl">Today</p>
          <p className="text-center text-xl px-14 pt-4 pb-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, at. Eius sunt esse quidem suscipit aut, adipisci voluptate maiores unde temporibus enim eveniet voluptatem incidunt harum sit deserunt minima beatae!
          </p>
        </div>
        

        <div className="w-full bg-red-300 border-green border-solid border-lg">
          <form className="text-center text-6xl ">
            <label htmlFor="name" className="block text-5xl font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full max-w-md max-h- p-2 border rounded text-xs"
              required
            />
          </form>
        </div>

      </div>

      {/* services */}
      <div className="flex bg-red border-green border-solid border-lg">

        <div className="w-full bg-red-300 border-green border-solid border-lg">
          <p className="text-center text-6xl pt-20">Request</p>
          <p className="text-center text-6xl">A Quote</p>
          <p className="text-center text-6xl">Today</p>
          <p className="text-center text-xl px-14 pt-4 pb-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, at. Eius sunt esse quidem suscipit aut, adipisci voluptate maiores unde temporibus enim eveniet voluptatem incidunt harum sit deserunt minima beatae!
          </p>
        </div>
        

        <div className="w-full bg-red-300 border-green border-solid border-lg">
          <p className="text-center text-6xl">test 2</p>
        </div>

      </div>

    </main>
  );
}
