import Image from "next/image";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import useElementHeight from "@/hooks/useElementHeight";
import { useEffect, useState } from "react";
import CustomerFormCard from "../cards/CustomerFormCard";


const AboutSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [rightSideHeight, leftSideRef] = useElementHeight();
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const toggleBookingModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center gap-4 p-6">
        <div className="md:w-1/2 w-full">
          <div className=" flex w-full items-center" ref={leftSideRef}>
            <div className="relative w-[10%] flex justify-center items-center">
              <div className="md:text-xl text-base font-semibold  -rotate-90 text-nowrap absolute transform -translate-y-1/2">
                <span className="text-defined-green">
                  Since 2002 - 21 years
                </span>{" "}
                <span className="text-defined-blue">of experience</span>
              </div>
            </div>
            <div
              className="w-full"
              style={{
                height: isSmallScreen ? "auto" : `${rightSideHeight}px`,
              }}
            >
              <Image
                src="/images/book-form.png"
                alt="book-form"
                width={556}
                height={537}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          {" "}
          <div className="w-full">
            <p className="text-defined-green text-xl mt-2">About Us</p>
            <h1 className="text-3xl text-defined-blue font-bold">
              Levi Homestay
            </h1>
            <p className="text-gray-500">
              Welcome to{" "}
              <span className="text-defined-blue">Levi Homestay</span>, your
              home away from home in the heart of Siliguri! Renowned as the
              finest homestay experience in the region, we take pride in
              offering unparalleled comfort and hospitality to travelers seeking
              a memorable stay. Whether you're visiting for business or leisure,
              our thoughtfully designed AC and non-AC rooms cater to every need,
              ensuring a cozy and relaxing environment. <br />
              At <span className="text-defined-blue">Levi Homestay</span>, we
              understand that modern travelers value connectivity, which is why
              we provide complimentary high-speed Wi-Fi throughout the property.
              Our warm and inviting ambiance makes you feel instantly at ease,
              while our attentive staff ensures all your needs are met with a
              personal touch. Located strategically in Siliguri, our homestay
              serves as an ideal base to explore the city’s vibrant culture,
              local attractions, and nearby destinations. <br />
              Choose <span className="text-defined-blue">
                Levi Homestay
              </span>{" "}
              for an unforgettable experience where comfort meets affordability.
              We’re not just a place to stay; we’re your gateway to discovering
              the true essence of Siliguri. Come, be part of our family!
            </p>
            <div className="flex gap-8 p-4 text-xl w-full">
              <div className="flex items-center gap-2">
                <IoCheckmarkDoneCircleOutline className="text-defined-orange" />{" "}
                <span className="text-defined-blue text-sm md:text-lg">
                  Great travel Experiences
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaRupeeSign className="text-defined-orange" />{" "}
                <span className="text-defined-blue text-sm md:text-lg">
                  Competitive Pricing Offers
                </span>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <button onClick={toggleBookingModal} className="bg-defined-green text-white text-xl py-2 px-8 rounded-md transition-all duration-300 font-semibold hover:bg-green-700">
                Inquiry Now
              </button>
            </div>

            {isModalOpen && (
              <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50">
                <div className="w-[90%] max-w-md p-6 rounded-lg shadow-lg relative">
                  <button
                    onClick={toggleBookingModal} 
                    className="absolute cursor-pointer top-6 md:right-11 right-2 z-40 text-2xl opacity-50 text-gray-700 hover:text-red-500 bg-white"
                  >
                    ✖
                  </button>
                  <CustomerFormCard />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
