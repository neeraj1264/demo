import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="bg-light py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link  
            to="/" 
            className="text-black text-2xl font-bold tracking-tight hover:text-blue-200 transition-colors duration-200"
          >
            Treasured Care For You
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-black hover:text-blue-200 px-3 py-2 rounded-md text-1xl font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/vision"
              className="text-black hover:text-blue-200 px-3 py-2 rounded-md text-1xl font-medium transition-colors duration-200"
            >
              Vision Mission
            </Link>
            <Link
              to="/values"
              className="text-black hover:text-blue-200 px-3 py-2 rounded-md text-1xl font-medium transition-colors duration-200"
            >
              Company Values
            </Link>
            <Link
              to="/about"
              className="text-black hover:text-blue-200 px-3 py-2 rounded-md text-1xl font-medium transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-black hover:text-blue-200 px-3 py-2 rounded-md text-1xl font-medium transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

         {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black hover:text-blue-200 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {mobileMenuOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

  {/* Mobile Menu with Dialog */}
  <Dialog
        as="div"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="md:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/25" />
        <div className="fixed inset-0 z-50 flex justify-start">
          <Dialog.Panel className="w-3/5 bg-pink p-4">

        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-white hover:bg-white hover:text-pink block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/vision"
            className="text-white hover:bg-white hover:text-pink block px-3 py-2 rounded-md text-base font-medium"
          >
            Vision Mission
          </Link>
          <Link
            to="/values"
            className="text-white hover:bg-white hover:text-pink block px-3 py-2 rounded-md text-base font-medium"
          >
            Company Values
          </Link>
          <Link
            to="/about"
            className="text-white hover:bg-white hover:text-pink block px-3 py-2 rounded-md text-base font-medium"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-white hover:bg-white hover:text-pink block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Us
          </Link>
        </div>

        </Dialog.Panel>
        </div>
      </Dialog>

    </nav>
  );
}