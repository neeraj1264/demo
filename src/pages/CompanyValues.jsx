import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";

export default function CompanyValues() {

    const values = [
      {
        title: "Personalised Care",
        description:
          "We understand that every individual is unique. Our services are designed to be flexible, giving you choice and control over the care you receive. We ensure that your comfort, requests, and safety come first.",
        imgSrc: "/dummy.png",
        imgAlt: "Hands holding a heart",
      },
      {
        title: "Comprehensive Home Care Solutions",
        description:
          "Whether you need personal care, respite, or home care, we offer a complete range of services to support your lifestyle within the familiar environment of your home.",
        imgSrc: "/dummy.png",
        imgAlt: "House icon with heart",
      },
      {
        title: "Experienced Support",
        description:
          "Our support workers are not only highly qualified, but also deeply passionate about making a positive impact in the lives of those they care for. All our support workers keep their certifications and education up to date through nationally recognized healthcare training organisations.",
        imgSrc: "dummy.png",
        imgAlt: "Professional caregiver",
      },
      {
        title: "Heartfelt Service",
        description:
          "We strive to build strong relationships with our clients and their families, ensuring that their needs and preferences are always at the forefront of our services. Together, we create a caring community where everyone has the equal opportunity to thrive.",
        imgSrc: "dummy.png",
        imgAlt: "Heart icon",
      },
    ];
  
 
  const location = useLocation();

  return (
    <>
      {/* Render Hero only when on the /contact route */}
      {location.pathname === "/values" && <Hero />}
      <section className="py-16 bg-white my-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-16 text-center text-pink">Our Company Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {values.map((val) => (
              <div key={val.title} className="bg-pink rounded-xl shadow-md p-6 flex flex-col items-center">
                <img
                  src={val.imgSrc}
                  alt={val.imgAlt}
                  className="h-50 w-50 mb-4 object-contain"
                />
                <h3 className="text-2xl font-extrabold text-white mb-2">{val.title}</h3>
                <p className="text-white leading-relaxed text-left">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
    );
  }
  