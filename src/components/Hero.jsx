import { useLocation } from "react-router-dom";
import hero from 'public\hero.jpg';

export default function Hero() {

  const location = useLocation();

  // Map routes to heading texts
  const routeHeadings = {
    "/": "Welcome to Treasured Care",
    "/vision": "Our Vision & Mission",
    "/values": "Our Company Values",
    "/about": "About Us",
    "/contact": "Contact Us",
  };

  const heading = routeHeadings[location.pathname] || "Welcome to Treasured Care";


    return (
      <section
        className="
          relative
          bg-cover bg-center
          h-64 sm:h-80 md:h-screen
          flex items-center
          before:absolute before:inset-0 before:bg-black before:opacity-0
        "
        style={{
          backgroundImage: `url(${hero})`, 
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            {heading}
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl">
            Where You Come First — Since 2025
          </p>
        </div>
      </section>
    );
  }
  