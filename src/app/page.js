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
      <div className="relative w-full max-w-[4000px] h-[500px] mx-auto overflow-hidden bg-red-500">

        <Image
          src='/images/pool-banner-cropped2.png'
          fill
          alt='Pool Deck and Retaining Wall'
          className="object-cover p-7"
          />

      </div>
      
      {/* Request a quote*/}
      <section className="flex bg-blue-400 border-green border-solid border-lg p-7 gap-7">

        <div className="w-full bg-red-300 border-green border-solid border-lg">
          <p className="text-center text-6xl pt-20">Request</p>
          <p className="text-center text-6xl">A Quote</p>
          <p className="text-center text-6xl">Today</p>
          <p className="text-center text-xl px-14 pt-4 pb-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, at. Eius sunt esse quidem suscipit aut, adipisci voluptate maiores unde temporibus enim eveniet voluptatem incidunt harum sit deserunt minima beatae!
          </p>
        </div>
        

        <div className="flex w-full mx-auto bg-red-300 p-3 items-center justify-center">

          <form className="max-w-lg w-full text-2xl gap-7 grid grid-cols-1 md:grid-cols-2 gap-2 border-black border-lg border-solid m-20">
            
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
              <button className="mt-10 bg-blue-300 w-full p-2 font-medium">
                Submit
              </button>
            </div>
            
          </form>

        </div>

      </section>

      {/* services */}
      <section className="flex bg-red-500 p-7 border-green border-solid border-lg">

        <div className="w-full bg-red-300 px-8 border-green border-solid border-lg">
          <p className="p-2 text-2xl"><Link href="/services">Our Services</Link></p>
          <h1 className="p-4 text-6xl"><Link href="/services">Walkways & Patios</Link></h1>
          <hr className="m-1"></hr>
          <h1 className="p-4 text-6xl"><Link href="/services">Natural Stone Work</Link></h1>
          <hr className="m-1"></hr>
          <h1 className="p-4 text-6xl"><Link href="/services">Outdoor Living Spaces</Link></h1>
          <hr className="m-1"></hr>
          <h1 className="p-4 text-6xl"><Link href="/services">Year-Round Property Care</Link></h1>
          <hr className="m-1"></hr>
          <Link href="/services">
            <button className="w-1/4 bg-blue-500 p-4 mt-6 mb-5">View All Services</button>
          </Link>
        </div>

      </section>

      {/* Image wheel*/}
      <section>
        <div className="imagecarousel p-10">
          <img className="px-2" src="/images/site-logo.png" alt="" />

          <img className="px-2" src="/images/site-logo.png" alt="" />

          <img className="px-2" src="/images/site-logo.png" alt="" />

          <img className="px-2" src="/images/site-logo.png" alt="" />
          <img className="px-2" src="/images/site-logo.png" alt="" />

          <img className="px-2" src="/images/site-logo.png" alt="" />

          <img className="px-2" src="/images/site-logo.png" alt="" />

          <img className="px-2" src="/images/site-logo.png" alt="" />

        </div>
      </section>

      {/** Why Us */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="self-center justify-items-center">
            <h1 className="text-6xl">Why Choose Us</h1>
          </div>
          <div>
            <p>Forrest Hardscape & Landscape is a full-service company servicing the greater Chester County region.</p>
            <p>Forrest Hardscape & Landscape is a full-service company servicing the greater Chester County region.</p>
            <p>With 18 years of experience in the horticultural industry, Matt and his team, work with homeowners and businesses to design, install, and maintain landscape and hardscape projects, both big and small.</p>
          </div>
          <div className="text-3xl justify-center gap-10 mx-20 flex col-span-1 md:col-span-2">
            <div><p>On Time, Every Time</p></div>
            <div><p>Experienced Team Members</p></div>
            <div><p>Eco-Friendly</p></div>
            <div><p>Trusted and Insured</p></div>
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
        <div className="relative w-full max-w-[4000px] h-[500px] mx-auto overflow-hidden bg-red-500">

          <Image
            src='/images/pool-banner-cropped2.png'
            fill
            alt='Pool Deck and Retaining Wall'
            className="object-cover p-7"
          />

        </div>
      </section>


    </main>
  );
}
