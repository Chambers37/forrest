'use client'

import Image from "next/image";
import Link from "next/link";

export default function Homepage() {

  const images = [
    "/images/site-logo.png",
    "/images/site-logo.png",
    "/images/site-logo.png",
    "/images/site-logo.png",
    "/images/site-logo.png",
  ];
  return (
    <main>

      {/** Main Hero Section */}
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

      {/** Main Hero Section part2*/}
      <div className="relative w-full max-w-[4000px] h-[500px] mx-auto overflow-hidden">

        <Image
          src='/images/better-pool-banner.jpg'
          fill
          alt='Pool Deck and Retaining Wall'
          className="object-cover p-7"
          />

      </div>
      
      {/* Request a quote*/}
      <section className="grid grid-cols-1 md:grid-cols-2 border-green border-solid border-lg p-7 gap-7">

        <div className="w-full border-green border-solid border-lg justify-center">
          <div className="mx-auto max-w-[680px] text-center">
            <p className="text-center text-darkGreen text-6xl pt-20">Request</p>
            <p className="text-center text-darkGreen text-6xl">A Quote</p>
            <p className="text-center text-darkGreen text-6xl">Today</p>
            <p className="text-center text-darkGreen text-xl px-10 md:px-20 pt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, at. Eius sunt esse quidem suscipit aut, adipisci voluptate maiores unde temporibus enim eveniet voluptatem incidunt harum sit deserunt minima beatae!
            </p>
          </div>
        </div>
        

        <div className="flex w-full mx-auto p-3 items-center justify-center">

          <form className="max-w-lg w-full text-2xl grid grid-cols-1 md:grid-cols-2 gap-7 border-black border-lg border-solid m-20">
            
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
          
            <div>
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

      {/* services */}
      <section className="flex bg-greenWhite p-7 border-green border-solid border-lg">

        <div className="w-full px-8 border-green border-solid border-lg">
          <p className="p-2 text-2xl font-medium text-darkGreen"><Link href="/services">Our Services</Link></p>
          <h1 className="p-4 text-6xl font-medium text-darkGreen"><Link href="/services">Walkways & Patios</Link></h1>
          <hr className="m-1 border-darkGreen"></hr>
          <h1 className="p-4 text-6xl font-medium text-darkGreen"><Link href="/services">Natural Stone Work</Link></h1>
          <hr className="m-1 border-darkGreen"></hr>
          <h1 className="p-4 text-6xl font-medium text-darkGreen"><Link href="/services">Outdoor Living Spaces</Link></h1>
          <hr className="m-1 border-darkGreen"></hr>
          <h1 className="p-4 text-6xl font-medium text-darkGreen"><Link href="/services">Year-Round Property Care</Link></h1>
          <hr className="m-1 border-darkGreen"></hr>
          <Link href="/services">
            <button className="w-1/4 bg-darkGreen hover:bg-lightGreen font-medium rounded-full text-white p-4 mt-6 mb-5 transition duration-400">View All Services</button>
          </Link>
        </div>

      </section>

      {/* Image wheel*/}
      {/* <section className="h-80 flex items-center justify-center">
        <div className="flex items-center justify-center p-5 gap-5">
          <div className="h-80 flex items-center justify-center overflow-hidden">
            <img className="px-2 scale-150 w-full object-cover" src="/images/better-pool-banner.jpg" alt="" />
          </div>        
          <div className="h-80 flex items-center justify-center overflow-hidden">
            <img className="px-2 scale-150 w-full object-cover" src="/images/pool-banner-cropped.png" alt="" />
          </div>        
          <div className="h-80 flex items-center justify-center overflow-hidden">
            <img className="px-2 scale-150 w-full object-cover" src="/images/pool-banner.jpg" alt="" />
          </div>        
          <div className="h-80 flex items-center justify-center overflow-hidden">
            <img className="px-2 scale-150 w-full object-cover" src="/images/site-logo.png" alt="" />
          </div>        
          <div className="h-80 flex items-center justify-center overflow-hidden">
            <img className="px-2 scale-150 w-full object-cover" src="/images/pool-banner-cropped2.png" alt="" />
          </div>              
        </div>
      </section> */}

      {/** Why Us */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10">
          <div className="self-center pl-20">
            <h1 className="text-6xl text-darkGreen">Why Choose Us</h1>
          </div>
          <div className="pr-20 text-lg mx-auto max-w-[680px]">
            <p>Forrest Hardscape & Landscape is a full-service company servicing the greater Chester County region.</p>
            <p className="mb-6">Forrest Hardscape & Landscape is a full-service company servicing the greater Chester County region.</p>
            <p>With 18 years of experience in the horticultural industry, Matt and his team, work with homeowners and businesses to design, install, and maintain landscape and hardscape projects, both big and small.</p>
          </div>
        </div>
      </section>
          <hr className="col-span-2 border-darkGreen m-10 mx-20"></hr>
      <section>
        <div>
          <div className="text-3xl justify-center gap-10 md:gap-20 lg:gap-40 mx-20 flex col-span-1 md:col-span-2">
            <div><p className="text-darkGreen">On Time, Every Time</p></div>
            <div><p className="text-darkGreen">Experienced Team Members</p></div>
            <div><p className="text-darkGreen">High Quality Materials</p></div>
            <div><p className="text-darkGreen">Trusted and Insured</p></div>
          </div>
        </div>
      </section>

      {/** What Clients Say */}
      <section>
        <div className="flex justify-center gap-10 my-10">
          <div className="text-5xl">
            <p>What Our Clients Say</p>
          </div>
          <div className="text-3xl">
            <p>Blah Blah Blach</p>
            <p>Patty</p>
          </div>
        </div>
        <div className="relative w-full max-w-[4000px] h-[500px] mx-auto overflow-hidden">

          <Image
            src='/images/better-pool-banner.jpg'
            fill
            alt='Pool Deck and Retaining Wall'
            className="object-cover p-7"
          />

        </div>
      </section>


    </main>
  );
}
