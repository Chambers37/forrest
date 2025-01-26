'use client'

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-greenWhite grid grid-cols-1 md:grid-cols-3">
        <div className="flex justify-center items-center w-full md:pl-20">
          <div className="text-center text-darkGreen text-2xl font-medium">
            <p className="pt-3">Get In Touch today to design your </p>
            <p className="pb-3">outdoor oasis!</p>
          </div>
        </div>
        <div className="grid justify-center items-center">
          <div>
            <Link href={'/#quote-form'}
            >
              <button className="hover:bg-lightGreen hover:text-black py-3 px-9 rounded-full bg-darkGreen text-white font-medium text-xl">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:pr-20">
          <div className="text-center text-darkGreen text-lg lg:text-xl font-medium">
            <p>Matthew@ForrestHardscape.com</p>
            <p>484-753-4434</p>
          </div>
        </div>
      </div>
    </footer>
  );
}