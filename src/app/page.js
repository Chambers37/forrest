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

      <div className="relative w-full max-w-[4000px] h-[500px] mx-auto overflow-hidden bg-red-500">

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
        

        <div className="flex w-full mx-auto bg-red-300 p-3 items-center justify-center">

          <form className="max-w-lg w-full text-2xl gap-7 grid grid-cols-1 md:grid-cols-2 gap-2 border-black border-lg border-solid">
            
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
                className="focus:outline-none focus:border-b-2 border-b-2 bg-transparent mt-1 block w-full focus:bg-white focus:self-center focus:bg-lightGreen focus:mr-auto text-sm p-2"                required
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
                className="focus:outline-none focus:border-b-2 border-b-2 bg-transparent mt-1 block w-full focus:bg-white focus:self-center focus:bg-lightGreen focus:mr-auto text-sm p-2"              />        
            </div>

            <div>
              <label htmlFor="Email" className="block text-gray-700">
                Email *
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                className="focus:outline-none focus:border-b-2 border-b-2 bg-transparent mt-1 block w-full focus:bg-white focus:self-center focus:bg-lightGreen focus:mr-auto text-sm p-2"                required
              />        
            </div>
          
            <div>
              <label htmlFor="Phone" className="block text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="Phone"
                name="Phone"
                className="focus:outline-none focus:border-b-2 border-b-2 bg-transparent mt-1 block w-full focus:bg-white focus:self-center focus:bg-lightGreen focus:mr-auto text-sm p-2"              />        
            </div>

            <div>
              <label htmlFor="service" className="block text-gray-700">
                Type of Service
              </label>
              <ul>
                <li>
                  <a>
                  </a>
                </li>
              </ul>       
            </div>

            <div className="col-span-1 md:col-span-2">
              <button className="mt-10 bg-blue-300 w-full p-2 font-medium">
                Submit
              </button>
            </div>
            
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
