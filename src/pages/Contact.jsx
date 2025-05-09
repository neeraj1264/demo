import React from "react";
import Hero from "../components/Hero";
import { useLocation } from "react-router-dom";

export default function ContactUs() {

  const location = useLocation();

  return (
    <>
      {/* Render Hero only when on the /contact route */}
      {location.pathname === "/contact" && <Hero />}
          <h2 className="text-2xl md:text-4xl font-extrabold text-center py-4 text-pink">
          Contact Us
        </h2>
    <section className="py-16 bg-pink text-white my-16 mx-4 lg:mx-8 rounded-3xl">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: Headline & copy */}
          <div className="md:w-2/3 space-y-4" style={{ fontFamily: "Butler" }}>
            <h2 className="text-4xl md:text-3xl font-semibold">
              Ready to move forward? Contact us now!
            </h2>
            <p className="text-lg">
              Give us a call or request a call back at a time that suits you.
            </p>
            <p className="text-lg">
              We're available from{" "}
              <strong>9:00am - 7:00pm, Monday to Saturday.</strong>
            </p>
          </div>

          {/* Right: Contact methods */}
          <div className="flex flex-col mx-auto my-3">
  {/* Call button */}
  <a
    href="tel:+61411776984"
    className="
      inline-block
      bg-transparent hover:bg-teal-500
      text-white
      font-medium
      text-center
      px-8 py-3
      rounded-full
      transition-colors duration-200
    "
  >
    Call +61 411 776 984
  </a>

  {/* Request callback button */}
  <a
    href="https://gmail.com"
    className="
      mt-2
      inline-block
      bg-transparent hover:bg-teal-500
      text-white
      font-medium
      text-center
      px-8 py-3
      rounded-full
      transition-colors duration-200
    "
  >
    xyz@gmail.com
  </a>
</div>

        </div>
      </div>
    </section>
    </>
  );
}
