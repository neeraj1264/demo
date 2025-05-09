import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import dummy from 'public/dummy.png';

export default function Footer() {
  return (
    <footer className="bg-pink text-white">
      {/* Top links */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo */}
        <Link to="/">
          <div className="col-span-1 flex flex-col items-center lg:items-start">
            <img
              src={dummy}
              alt="Tcare for you"
              className="h-16 w-auto mb-4 mx-auto"
            />
            <span className="text-xl font-extrabold text-white">
              Treasured Care For You
            </span>
          </div>
        </Link>

        {/* Column 1 */}
        {/* <div>
          <h4 className="font-extrabold mb-3 text-2xl text-white">Tcare for you</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:underline">
                About us
              </a>
            </li>
          </ul>
        </div> */}

        {/* Column 2 */}
        <div>
          <h4 className="font-extrabold mb-3 text-2xl text-white">
            Our services
          </h4>
          <ul className="space-y-2">
            <li>
              <Link to="/vision" className="hover:underline">
                Vision Mission
              </Link>
            </li>
            <li>
              <Link to="/values" className="hover:underline">
                Company Values
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-extrabold mb-3 text-2xl text-white">
            Contact us
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="tel:+61411776984" className="hover:underline">
                1234567890
              </a>
            </li>
            <li>
              <a href="https://gmail.com" className="hover:underline">
                xyz@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-extrabold mb-3 text-2xl text-white">
            Follow us on
          </h4>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-blue-600"
              >
                <FaFacebookF size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-pink-500"
              >
                <FaInstagram size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300" />

      {/* Copyright & Links */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-center items-center text-sm text-white space-y-4 sm:space-y-0 ">
        <span className="text-center font-extrabold text-1xl">
          © 2025 Tcare for you
        </span>
      </div>
    </footer>
  );
}
