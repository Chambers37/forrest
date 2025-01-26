import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-cols-1">
      <section>
        <div className="justify-between grid grid-cols-1 md:grid-cols-2">
          <div className="text-6xl text-darkGreen flex justify-center items-center pt-4"><h1>About Us</h1></div>
          <div className="py-4">
            <div className="p-3 md:pb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur voluptatem repudiandae dolorum aperiam, beatae, consectetur officia exercitationem repellendus officiis, delectus deserunt? Perferendis facilis ea fuga impedit, quae quos reiciendis!
            </div>
            <div className="px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur voluptatem repudiandae dolorum aperiam, beatae, consectetur officia exercitationem repellendus officiis, delectus deserunt? Perferendis facilis ea fuga impedit, quae quos reiciendis!
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/* Images */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3">
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
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2">

        </div>meet the team text
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2">

        </div>team photos
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2">

        </div>team member text
      </section>
    </div>
  );
}
