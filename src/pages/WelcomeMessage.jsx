import dummy from '/dummy.png';

export default function WelcomeMessage() {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-extrabold mb-8 text-center my-12 text-pink">
        Welcome to Treasured Care
      </h2>

      <section className="bg-pink max-w-6xl mx-4 lg:mx-auto my-12 rounded-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left “cut-out” panel */}
        <div className="flex-1 relative flex items-start justify-center lg:justify-start p-8 lg:p-16">
          <div
            className="
            w-64 h-64 sm:w-96 sm:h-96 
            bg-white 
            rounded-t-none 
            rounded-bl-[10rem] rounded-br-[10rem] 
            overflow-hidden 
            -mt-16 
            shadow-lg
            p-8
          "
          >
            <img
              src={dummy}
              alt="Adelaide Mosley"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right text panel */}
        <div className="flex-1 p-8 lg:p-16 text-white flex flex-col justify-between">
          <div>
            <p className="mt-6 text-lg sm:text-xl font-extrabold max-w-prose leading-relaxed">
              Welcome to Treasured Care For You – a place where care goes beyond
              the task, and every individual is seen, heard, and supported with
              dignity.
            </p>

            <p className="mt-4 text-base sm:text-lg leading-relaxed">
              My name is Adelaide Mosley, and it's both an honour and a
              privilege to serve as the Director of Treasured Care For You. With
              a long-standing career in nursing and years of hands-on experience
              as both a Registered Nurse and a support worker, I've witnessed
              firsthand the difference that genuine, person-centred care can
              make in someone's life.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed">
              This organisation was built from the ground up with a deep
              understanding of what quality suppoprt truly looks like - not just
              from a clinical perspective, but from a human one. We are here not
              just to provide services, but to build trusted relationships,
              foster independence, and create an environment where every
              indivual feels safe repected, and empowered.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed">
              Whether you're with us through the NDIS or seeking aged care
              support, know that you are at the heart of everything we do. Our
              dedicated team shares my passion and commitment to compassionate,
              professional care - and we're here to support you every step of
              the way.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed">
              Thank you for choosing Treasured Care For You. We look forward to
              walking alongside you on your journey
            </p>
          </div>

          <div className="mt-4">
            <p className="text-xl font-semibold">Warm Regards,</p>
            <p className="mt-2 text-2xl font-handwriting">Adelaide Mosley</p>
            <p className="mt-1 text-base uppercase tracking-wide">
              Director &amp; Founder
            </p>
            <p className="text-sm text-white mt-1">Treasured Care For You</p>
          </div>
        </div>
      </section>
    </>
  );
}
