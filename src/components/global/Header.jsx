"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import CustomerFormCard from "@/components/cards/CustomerFormCard";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Rooms", path: "/rooms" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact Us", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleBookingModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <header>
      <div className="flex justify-between items-center md:px-6 px-4 fixed lg:px-8 h-[4.5rem] md:h-[5rem] w-full z-[60] bg-white shadow-md">
        <Link href={"/"}>
          <div>
            <Image
              src="/logo.png"
              alt="logo"
              width={220}
              height={40}
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-5 lg:items-center font-semibold">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="hover:text-defined-green"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex lg:gap-5">
          <button
            onClick={toggleBookingModal}
            className="bg-defined-green text-white py-2 px-8 rounded-full transition-all duration-700 font-semibold hover:bg-green-700"
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
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={toggleMenu}
              className="hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={toggleBookingModal}
            className="bg-defined-green text-white py-2 px-8 rounded-full w-full transition-all duration-300 font-semibold hover:bg-gray-800"
          >
            Book Appointment
          </button>
        </div>
      </div>

       {isModalOpen && (
              <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50">
                <div
                  ref={modalRef}
                  className="w-[90%] max-w-md p-6 rounded-lg shadow-lg relative"
                >
                  <button
                    onClick={toggleBookingModal}
                    className="absolute top-7 rounded-md bg-white p-2 size-8 flex justify-center items-center opacity-55 right-10 z-[80] text-xl text-gray-700 hover:text-red-500"
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
