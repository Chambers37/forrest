'use client'

export default function Footer() {
  return (
    <footer className="h-20 bg-greenWhite w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-20 flex justify-center items-center w-full">
          <div className="text-center text-darkGreen text-2xl font-medium">
            <p>Get In Touch today to design your </p>
            <p>outdoor oasis!</p>
          </div>
        </div>
        <div className="h-20 flex justify-center items-center w-full">
          <div className="text-center text-darkGreen text-xl font-medium">
            <p>Matthew@ForrestHardscape.com</p>
            <p>484-753-4434</p>
          </div>
        </div>
      </div>
    </footer>
  );
}