"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import CustomerFormCard from "@/components/cards/CustomerFormCard";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/" },
    { name: "Our Rooms", path: "/", hasDropdown: true },
    { name: "Testimonials", path: "/" },
    { name: "Contact Us", path: "/" },
  ];

  const megaMenu = [
    { title: "Single Occupancy", link: "/" },
    { title: "Double Occupancy", link: "/" },
    { title: "Triple Occupancy", link: "/" },
    { title: "Quadruple Occupancy", link: "/" },
    { title: "Hall", link: "/" },
    { title: "Dormitory", link: "/" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleBookingModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header>
      <div className="flex justify-between items-center md:px-6 px-4 fixed lg:px-8 h-[4.5rem] md:h-[5rem] w-full z-[60] bg-white shadow-md">
        <div>
          <Image src="/logo.png" alt="logo" width={220} height={40} priority />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-5 lg:items-center font-semibold">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => item.hasDropdown && setServicesOpen(true)}
              onMouseLeave={() => item.hasDropdown && setServicesOpen(false)}
            >
              <Link href={item.path} className="hover:text-defined-green">
                {item.name}
              </Link>

              {item.hasDropdown && (
                <div
                  className={`absolute left-0 top-full w-[250px] bg-gradient-to-r from-white via-[#F0FFDE] to-[#E5F6FF] text-black shadow-lg rounded-lg p-4 flex flex-col transition-all duration-300 transform ${
                    servicesOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-3 pointer-events-none"
                  }`}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {megaMenu.map((category, index) => (
                    <Link
                      key={index}
                      href={category.link}
                      className="block py-2 hover:underline hover:text-defined-green"
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex lg:gap-5">
          <button
            onClick={toggleBookingModal}
            className="bg-defined-green text-white py-2 px-8 rounded-full transition-all duration-300 font-semibold hover:bg-green-700"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-3xl ml-auto mr-3"
          onClick={toggleMenu}
        >
          {isOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-16 left-0 w-full bg-black text-white shadow-md flex flex-col p-5 gap-4 transition-all duration-300 transform ${
            isOpen
              ? "opacity-85 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {menuItems.map((item, index) =>
            item.hasDropdown ? (
              <div key={index} className="w-full text-center">
                <button
                  className="hover:text-defined-green w-full text-left font-semibold flex justify-between items-center py-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesOpen(!servicesOpen);
                  }}
                >
                  {item.name}
                  <span>{servicesOpen ? "▲" : "▼"}</span>
                </button>

                <div
                  className={`transition-all duration-300 text-left ${
                    servicesOpen
                      ? "max-h-[500px] opacity-85 overflow-y-auto"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {megaMenu.map((category, index) => (
                    <Link
                      key={index}
                      href={category.link}
                      className="block px-5 py-2 hover:underline hover:text-defined-green"
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                href={item.path}
                onClick={toggleMenu}
                className="hover:text-blue-600"
              >
                {item.name}
              </Link>
            )
          )}

          <button
            onClick={toggleBookingModal}
            className="bg-defined-green text-white py-2 px-8 rounded-full w-full transition-all duration-300 font-semibold hover:bg-gray-800"
          >
            Book Appointment
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50">
          <div className=" w-[90%] max-w-md p-6 rounded-lg shadow-lg relative">
            <button
              onClick={toggleBookingModal}
              className="absolute top-7 rounded-md bg-white p-2 opacity-55 right-8 z-[80] text-xl text-gray-700 hover:text-red-500"
            >
              ✖
            </button>
            <CustomerFormCard />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
