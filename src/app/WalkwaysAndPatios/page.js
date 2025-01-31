import Link from "next/link";
import Image from "next/image"


export default function WalkwaysAndPatios() {
  return (
    <div>
      {/* Image Banner */}
      <section>
        <div className="relative w-full max-w-[4000px] h-[300px] overflow-hidden">
          <Image
            src='/images/services-banner-cropped.png'
            fill
            alt='Pool Deck and Retaining Wall'
            className="object-cover"
          />
        </div>
      </section>

      {/* Back to Services Button */}
      <section>
        <div className="items-center flex justify-center">
          <div className="justify-center flex items-center">
            <Link href='/Services'>
              <button className="text-lg text-darkGreen hover:text-greenWhite hover:bg-darkGreen bg-transparent outline-dashed flex justify-center items-center px-3 py-1 my-4">
                Back To Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Detail Section */}
      <section>
        <div>
          <div>
            
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section>
        <div className="flex  justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex justify-center">
              <Image
                src='/images/service-landscape.png'
                width={300}
                height={500}
                alt='test'
              />
              </div>
            <div className="flex justify-center">
              <Image
                src='/images/service-landscape.png'
                width={300}
                height={500}
                alt='test'
              />
              </div>
           <div className="flex justify-center">
              <Image
                src='/images/service-landscape.png'
                width={300}
                height={500}
                alt='test'
              />
              </div>
            <div className="flex justify-center">
              <Image
                src='/images/service-landscape.png'
                width={300}
                height={500}
                alt='test'
              />
              </div>
            <div className="flex justify-center">
              <Image
                src='/images/service-landscape.png'
                width={300}
                height={500}
                alt='test'
              />
              </div>
            <div className="flex justify-center">
              <Image
                src='/images/service-landscape.png'
                width={300}
                height={500}
                alt='test'
              />
              </div>
            <div className="flex justify-center">
              <Image
                src='/images/service-landscape.png'
                width={300}
                height={500}
                alt='test'
              />
              </div>
            <div className="flex justify-center">
              <Image
                src='/images/service-landscape.png'
                width={300}
                height={500}
                alt='test'
              />
              </div>
            <div className="flex justify-center">
              <Image
                src='/images/service-landscape.png'
                width={300}
                height={500}
                alt='test'
              />
              </div>

          </div>
        </div>
      </section>
    </div>
  )
}
