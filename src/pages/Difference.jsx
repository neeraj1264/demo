import React from 'react';
import Hero from '../components/Hero';
import { useLocation } from 'react-router-dom';
import dummy from 'public/dummy.png';

export default function DifferenceWithImage() {

  const location = useLocation();

  return (
    <>
      {/* Render Hero only when on the /contact route */}
      {location.pathname === "/about" && <Hero />}

    <section className="pb-16  bg-white-50 mt-10">
    <h2 className="text-2xl md:text-4xl font-extrabold mb-8 text-center pb-16 text-pink">
          About Us
        </h2>
      <div className="mx-4 lg:mx-8  px-4 py-8 rounded-xl shadow-md bg-pink">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image side */}
          <div className="md:w-1/2">
            <img
              src={dummy}
              alt="Supportive care illustration"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Text side */}
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-extrabold text-white text-center">
              Why Treasured Care For You?
            </h3>
            <p className="text-white leading-relaxed">
              At Treasured Care For You, we believe in the importance of fostering a supportive and nurturing environment. Our team of experienced professionals are dedicated to delivering care that is not only effective but also compassionate and respectful. Additionally, we are experts in the National Disability Insurance Scheme (NDIS), with all our support workers having undergone NDIS screening and induction. Our team is also experienced in using hoists, Sara Stedy, and PEG feeding—ensuring comprehensive and skilled care for those who need it.
            </p>
            <p className="text-white leading-relaxed">
              We are also favoured in providing support to children with disabilities, and their families; allowing them some respite. Our services are designed to offer respite and peace of mind to families, knowing their loved ones are in our capable and caring hands.
            </p>
            <p className="text-white leading-relaxed">
              We offer low and affordable hourly rates, making it easier for you to receive the care you need most without the financial strain. Our sleepover services are also available, allowing you to access more hours of care when needed.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
