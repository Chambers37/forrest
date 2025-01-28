import Link from "next/link";


export default function TreeAndShrubCare() {
  return (
    <div>
      <div>
        <div className="h-[75vh] items-center flex justify-center">
          <div className="justify-center flex items-center">
            <Link href='/services'>
              <button className="text-5xl text-darkGreen hover:text-greenWhite rounded-3xl hover:bg-darkGreen bg-lightGreen flex justify-center items-center h-[15vh] w-[30vw]">
                Back To Services TreeAndShrubCare
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
