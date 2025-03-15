import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-cols-1">

      {/* Image Banner */}
        <section className="relative">
          <div className="relative w-full max-w-[4000px] h-[175px] md:h-[300px] overflow-hidden">
            <Image
              src='/images/services-banner-cropped.png'
              fill
              alt='Pool Deck and Retaining Wall'
              className="object-cover"
            />
          </div>
          <h1 className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-7xl">
          Our Team
          </h1>
        </section>

      {/* About Us Text */}
      <section className="flex flex-col justify-center">
        <div className="mt-5 text-center justify-center mx-auto max-w-screen-2xl grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center w-full">
            <div className="text-4xl md:text-8xl text-darkGreen w-4/5 flex justify-center font-medium items-center pt-4">
              <h1>About Us</h1>
            </div>
          </div>
          <div className="py-4">
            <div className="px-5 pb-7 md:mr-10">Forrest Hardscape & Landscape is a dedicated team of skilled professionals with a deep-rooted passion for transforming outdoor spaces, bringing generations of expertise in hardscaping, landscaping, and horticultural craftsmanship to every project.
            </div>
            <div className="px-5 pb-7 md:mr-10">With over <strong>100</strong> years of combined experience, we are committed to quality, precision, and customer satisfaction, the team works collaboratively to design, build, and maintain stunning landscapes that enhance the beauty, functionality, and value of residential and commercial properties across Chester County and beyond.
            </div>
          </div>
        </div>
        {/* Images */}
        <div>
          <div className="grid grid-cols-1 gap-3 mx-2 sm:grid-cols-3">
          <div className="flex justify-center py-2 md:justify-end">
            <Image
              src='/images/service-landscape.png'
              width={400}
              height={500}
              alt='test'
              className="w-80 h-80 sm:w-100 sm:h-100 md:w-80 md:h-96 object-cover"
            />
          </div>
          <div className="flex justify-center py-2 md:justify-center">
            <Image
              src='/images/testing.gif'
              width={400}
              height={500}
              alt='test'
              className="w-80 h-80 sm:w-60 sm:h-80 md:w-80 md:h-96 object-cover"
            />
          </div>
          <div className="flex justify-center py-2 md:justify-start">
            <Image
              src='/images/service-landscape.png'
              width={400}
              height={500}
              alt='test'
              className="w-80 h-80 sm:w-60 sm:h-80 md:w-80 md:h-96 object-cover"
            />
          </div>
          </div>
        </div>
      </section>


      {/* Meet The Team */}
      <section>
        <div className="grid grid-cols-1 w-full">
          <div className="text-center text-5xl text-darkGreen font-medium pt-10">
            <h1>Meet The Team</h1>
          </div>
          <div className="text-center text-xl text-darkGreen font-medium pt-5 px-5">
            <p>Matt and his team have a combined</p>
            <p>35+ years of experience in the landscape field!</p>
          </div>
        </div>

        {/* Team Photos */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mx-5 lg:mx-auto max-w-screen-2xl gap-6"> 
          {/* Matt Siter */}
          <div className="flex flex-col h-full bg-white shadow-2xl rounded-3xl">
            <div className="h-[400px] flex justify-center">
              <Image
                src='/images/matt.jpg'
                width={300}
                height={400}
                alt='Matthew Forrest Siter'
                className="h-full object-cover"
              />
            </div>
            <div className="px-5 py-4 flex-grow flex flex-col">
              <h1 className="text-center text-4xl font-medium text-darkGreen">
                Matthew Forrest Siter
              </h1>
              <h2 className="text-center font-medium">Owner / Operator</h2>
              <hr className="my-4 border-black" />
              <p className="md:indent-8 text-xl mb-4 text-center md:text-left md:pr-6 flex-grow">
                Matt Siter is the owner of Forrest Hardscape & Landscape. Born and raised in Chester County, Matt is the fourth generation of his family to be involved in the horticultural field. He has been laying bricks, digging shrubs, and planting trees since he could hold a shovel.
              </p>
              <p className="md:indent-8 text-xl pr-6">
                After graduating from Downingtown West High School, Matt attended Delaware Valley College (now Delaware Valley University) in Doylestown, Pennsylvania. He graduated with a bachelor’s degree in Ornamental Horticulture with a concentration in Landscape Contracting & Management in 2014. Throughout high school, college and afterwards, Matt gained experience working for multiple nurseries and landscape companies, where he learned to manage multiple crews and complete large scale projects. In 2019, he started his own hardscape and landscape company, Forrest Hardscape.
              </p>
            </div>
          </div>

          {/* Maureciio */}
          <div className="flex flex-col h-full bg-white shadow-2xl rounded-3xl">
            <div className="h-[400px] flex justify-center">
              <Image
                src='/images/matt.jpg'
                width={300}
                height={400}
                alt='Maureciio Dude'
                className="h-full object-cover"
              />
            </div>
            <div className="px-5 py-4 flex-grow flex flex-col">
              <h1 className="text-center text-4xl font-medium text-darkGreen">
                Maureciio Dude
              </h1>
              <h2 className="text-center font-medium">Owner / Operator</h2>
              <hr className="my-4 border-black" />
              <p className="md:indent-8 text-xl mb-4 pr-6">
                Matt Siter is the owner of Forrest Hardscape & Landscape. Born and raised in Chester County, Matt is the fourth generation of his family to be involved in the horticultural field. He has been laying bricks, digging shrubs, and planting trees since he could hold a shovel.
              </p>
              <p className="md:indent-8 text-xl pr-6">
                After graduating from Downingtown West High School, Matt attended Delaware Valley College (now Delaware Valley University) Hardscape.
              </p>
            </div>
          </div>

          {/* Jeff */}
          <div className="flex flex-col h-full bg-white shadow-2xl rounded-3xl">
            <div className="h-[400px] flex justify-center">
              <Image
                src='/images/matt.jpg'
                width={300}
                height={400}
                alt='Maureciio Dude'
                className="h-full object-cover"
              />
            </div>
            <div className="px-5 py-4 flex-grow flex flex-col">
              <h1 className="text-center text-4xl font-medium text-darkGreen">
                Maureciio Dude
              </h1>
              <h2 className="text-center font-medium">Owner / Operator</h2>
              <hr className="my-4 border-black" />
              <p className="md:indent-8 text-xl mb-4 pr-6">
                Matt Siter is the owner of Forrest Hardscape & Landscape. Born and raised in Chester County, Matt is the fourth generation of his family to be involved in the horticultural field. He has been laying bricks, digging shrubs, and planting trees since he could hold a shovel.
              </p>
              <p className="md:indent-8 text-xl pr-6">
                After graduating from Downingtown West High School, Matt attended Delaware Valley College (now Delaware Valley University) Hardscape.
              </p>
            </div>
          </div>

          {/* Jeff Again */}
          <div className="flex flex-col h-full bg-white shadow-2xl rounded-3xl">
            <div className="h-[400px] flex justify-center">
              <Image
                src='/images/matt.jpg'
                width={300}
                height={400}
                alt='Matthew Forrest Siter'
                className="h-full object-cover"
              />
            </div>
            <div className="px-5 py-4 flex-grow flex flex-col">
              <h1 className="text-center text-4xl font-medium text-darkGreen">
                Matthew Forrest Siter
              </h1>
              <h2 className="text-center font-medium">Owner / Operator</h2>
              <hr className="my-4 border-black" />
              <p className="md:indent-8 text-xl mb-4 pr-6 flex-grow">
                Matt Siter is the owner of Forrest Hardscape & Landscape. Born and raised in Chester County, Matt is the fourth generation of his family to be involved in the horticultural field. He has been laying bricks, digging shrubs, and planting trees since he could hold a shovel.
              </p>
              <p className="md:indent-8 text-xl pr-6">
                After graduating from Downingtown West High School, Matt attended Delaware Valley College (now Delaware Valley University) in Doylestown, Pennsylvania. He graduated with a bachelor’s degree in Ornamental Horticulture with a concentration in Landscape Contracting & Management in 2014. Throughout high school, college and afterwards, Matt gained experience working for multiple nurseries and landscape companies, where he learned to manage multiple crews and complete large scale projects. In 2019, he started his own hardscape and landscape company, Forrest Hardscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
