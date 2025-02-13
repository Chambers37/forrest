import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-cols-1">

      {/* Image Banner */}
      <section className="relative">
        <div className="relative w-full max-w-[4000px] h-[300px] overflow-hidden">
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
      <section className="flex justify-center">
        <div className="w-full bg-darkGreen  flex justify-center">
          <div className="bg-lightGreen text-center max-w-screen-2xl grid grid-cols-1 md:grid-cols-2">
            <div className="text-6xl text-darkGreen flex justify-center items-center pt-4"><h1>About Us</h1></div>
            <div className="py-4">
              <div className="p-3 md:pb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur voluptatem repudiandae dolorum aperiam, beatae, consectetur officia exercitationem repellendus officiis, delectus deserunt? Perferendis facilis ea fuga impedit, quae quos reiciendis!
              </div>
              <div className="px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur voluptatem repudiandae dolorum aperiam, beatae, consectetur officia exercitationem repellendus officiis, delectus deserunt? Perferendis facilis ea fuga impedit, quae quos reiciendis!
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Images */}
      <section>
        
          <div className="grid max-w-screen-2xl bg-red-500 grid-cols-1 md:grid-cols-3">
            <div className="flex justify-center py-2 md:justify-end">
              <Image
                src='/images/service-landscape.png'
                width={300}
                height={500}
                alt='test'
              />
            </div>
            <div className="flex justify-center py-2 md:justify-center">
              <Image
                src='/images/service-landscape.png'
                width={300}
                height={500}
                alt='test'
              />
            </div>
            <div className="flex justify-center py-2 md:justify-start">
              <Image
                src='/images/service-landscape.png'
                width={300}
                height={500}
                alt='test'
              />
            </div>
          </div>
        
      </section>

      {/* Meet The Team */}
      <section>
        <div className="grid grid-cols-1 w-full">
          <div className="text-center text-5xl text-darkGreen font-medium pt-10">
            <h1>Meet The Team</h1>
          </div>
          <div className="text-center text-xl text-darkGreen font-medium pt-5">
            <p>Matt and his team have a combined 35+ years <br /> of experience in the landscape field!</p>
          </div>
        </div>

      {/* Team Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center mx-auto max-w-5xl">
          <div className="py-2 flex justify-center">
            <Image
              src='/images/service-landscape.png'
              width={300}
              height={500}
              alt='test'
            />
          </div>
          <div className="py-2 flex justify-center">
            <Image
              src='/images/service-landscape.png'
              width={300}
              height={500}
              alt='test'
            />
          </div>
        </div>

      {/* Team Names + Text */}
        <div className="grid grid-cols-1 md:grid-cols-2">

        </div>team member text
      </section>
    </div>
  );
}
