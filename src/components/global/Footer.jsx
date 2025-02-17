import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaMobile,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full p-6 lg:p-8 border-t-4 border-defined-orange">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/foot-img.png)` }}
      >
        <div className="absolute inset-0 bg-defined-blue opacity-90"></div>{" "}
      </div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Section */}
            <div className="flex flex-col gap-4 w-full lg:w-[40%]">
              <Image src="/logo-white.png" alt="logo" width={186} height={52} />
              <p className="text-sm text-white">
                Comfortable and Affordable Guest House in Siliguri – <br />
                Your Perfect Homestay Experience
              </p>
              <div className="text-base lg:text-sm text-white">
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-defined-green" />
                  <span>+91 89209 07973</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMobile className="text-defined-green" />
                  <span>+91 7404943811, 76799 66855, 89209 07973</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdEmail className="text-defined-green" />
                  <span>levihomestayslg@email.com</span>
                </div>
                <div className="flex gap-2 w-full xl:w-[80%]">
                  <IoLocationSharp className="text-defined-green text-xl" />
                  <span>
                    Punjabi Para, Mission Compound, Shiv Mandir Rd. Siliguri, WB
                    734001
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm text-defined-gray">Find Us</h1>
                <div className="flex gap-2">
                  <a
                    href={
                      "https://www.facebook.com/people/Levi-Home/61550614208974/"
                    }
                    target="_blank"
                  >
                    <FaFacebook className="text-defined-orange" />
                  </a>
                  <a
                    href={"https://maps.app.goo.gl/9YdAtRMTDVHWRE976"}
                    target="_blank"
                  >
                    <FaGoogle className="text-defined-orange" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full lg:w-[60%] lg:flex-row">
              {/* Quick Links */}
              <div className="w-1/2">
                <h1 className="font-bold">Quick Links</h1>
                <ul className="text-white text-sm">
                  {[
                    "Home",
                    "About Us",
                    "Rooms",
                    "Testimonials",
                    "Contact Us",
                  ].map((item, index) => (
                    <li key={index} className="py-1">
                      <Link href="/">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Best Rooms */}
              <div className="w-1/2">
                <h1 className="font-bold">Our Best Rooms</h1>
                <ul className="text-white text-sm">
                  {[
                    "Deluxe Rooms",
                    "Standard Room",
                    "Conference Halls",
                    "Dormitory",
                    "Levi's Kitchen",
                  ].map((item, index) => (
                    <li key={index} className="py-1">
                      <Link href="/">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-[20%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.4667864584976!2d88.4333205!3d26.725386399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4415c197875e7%3A0xb069b8c0fcfa1289!2sLevi%20Home!5e1!3m2!1sen!2sin!4v1739612837939!5m2!1sen!2sin"
                loading="lazy"
                className="rounded-lg w-full h-[10rem] lg:h-[12rem]"
              ></iframe>
              <button className="bg-defined-green text-white text-lg py-2 w-full mt-3 rounded">
                Pay Now
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="bg-defined-gray w-full my-4" />
        <div className="text-sm text-white flex flex-col md:flex-row justify-between items-center">
          <h1>
            © 2025{" "}
            <span className="text-defined-orange">
              Prime Healthcare Diagnostics
            </span>{" "}
            - All Rights Reserved
          </h1>
          <h1>
            Design & Developed By:{" "}
            <span className="font-semibold">Reboot AI Pvt. Ltd.</span>
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
