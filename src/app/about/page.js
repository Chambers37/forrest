import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-cols-1">
      <section>
        <div className="justify-between grid grid-cols-1 md:grid-cols-2">
          <div><h1>About Us</h1></div>
          <div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur voluptatem repudiandae dolorum aperiam, beatae, consectetur officia exercitationem repellendus officiis, delectus deserunt? Perferendis facilis ea fuga impedit, quae quos reiciendis!
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur voluptatem repudiandae dolorum aperiam, beatae, consectetur officia exercitationem repellendus officiis, delectus deserunt? Perferendis facilis ea fuga impedit, quae quos reiciendis!
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/* Images */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <Image
            src='/images/service-landscape.png'
            width={200}
            height={500}
            alt='test'
          />
        </div>
        <div>
          <Image
            src='/images/service-landscape.png'
            width={200}
            height={500}
            alt='test'
          />
        </div>
        <div>
          <Image
            src='/images/service-landscape.png'
            width={200}
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
