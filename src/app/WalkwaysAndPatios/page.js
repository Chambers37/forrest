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
              <button className="text-lg text-darkGreen hover:text-greenWhite hover:bg-darkGreen bg-transparent outline-dashed flex justify-center items-center outline-greenWhite px-3 py-1 my-4">
                Back To Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Detail Section */}
      <section className="grid grid-cols-1 justify-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1200px]">
          <div>
            <div className="bg-red-300 text-4xl"><h1>Service Title</h1></div>
            <div className="bg-blue-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae sapiente dignissimos tempore nisi earum non mollitia fugiat consequatur odit? Praesentium et reprehenderit dolore cupiditate asperiores, quidem sed veniam ex in!
            </div>
            <div className="bg-red-300 text-2xl">mini title</div>
            <div className="bg-blue-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, officia ipsa? Non commodi quisquam laborum natus facere, voluptas architecto alias, obcaecati quis saepe nam cupiditate atque vel distinctio totam ut!
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="w-full md:max-w-[500px] lg:max-w-[800px] aspect-[16/9] relative">
              <Image
                src="/images/service-landscape.png"
                fill
                alt="test"
                className="object-cover rounded-lg p-5"
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <div className="bg-red-300 text-2xl">mini title 2</div>
          <div className="bg-blue-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequatur harum iste voluptate quas animi, sed adipisci ipsa quasi? Eos, temporibus pariatur! Ducimus ipsa eum iusto iste placeat eligendi explicabo! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit vero eius ipsum alias cum consequuntur, natus nisi atque libero debitis omnis repudiandae, cumque vitae quos commodi soluta! Laborum, fugit fugiat!
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
