import Link from "next/link";
import Image from "next/image"


export default function WalkwaysAndPatios() {
  return (
    <div>
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
      <div>
        <div className="h-[75vh] items-center flex justify-center">
          <div className="justify-center flex items-center">
            <Link href='/Services'>
              <button className="text-5xl text-darkGreen hover:text-greenWhite rounded-3xl hover:bg-darkGreen bg-lightGreen flex justify-center items-center h-[15vh] w-[30vw]">
                Back To Services WalkwaysAndPatios
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
