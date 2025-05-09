import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";

export default function VisionMission() {
   
  const location = useLocation();

  return (
    <>
      {/* Render Hero only when on the /contact route */}
      {location.pathname === "/vision" && <Hero />}
      <section className="pt-16 bg-white-50 my-10 lg:mx-auto">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-24 text-pink">Our Vision &amp; Mission</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Vision Card */}
            <div className="flex-1 bg-pink text-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Our Vision</h3>
              <p className="text-white-700 leading-relaxed">
                Founded by an experienced Registered Nurse with over 30 years in the field, Treasured Care For You is dedicated to providing top-quality in-home care for the aged and disability community. With a deep background as a support worker caring for people across all walks of life, we know what it means to truly show up for someone — to listen, to support, and to empower. You’re not just a client — you’re part of a community that genuinely cares, built on respect, reliability, compassion, and the belief that everyone deserves to live with dignity and independence.
              </p>
            </div>
  
            {/* Mission Card */}
            <div className="flex-1 bg-pink text-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Our Mission</h3>
              <p className="text-white-700 leading-relaxed">
                At Treasured Care For You, our mission is to restore a personalized, client-centred approach to care, focusing on the unique needs of each individual and their families. All our support workers hold nationally recognized qualifications and are experienced in managing a wide range of conditions—including Autism Spectrum Disorder, Dementia, and Alzheimer’s. We’re passionate about helping vulnerable individuals feel safe, independent, and well cared for in the comfort of their own homes.
              </p>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  }
  