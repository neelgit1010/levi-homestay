import { useEffect, useRef, useState } from "react";
import CustomerFormCard from "../cards/CustomerFormCard";

const HotelSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleBookingModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const modalRef = useRef(null);

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
    <div className="flex w-full justify-center items-center">
      <div className="w-full">
        <div
          style={{ backgroundImage: `url(/images/book-form.png)` }}
          className="relative bg-cover bg-center bg-no-repeat w-full h-auto border flex justify-center md:justify-between"
        >
          <div className="absolute inset-0 bg-defined-green opacity-50"></div>

          <div className="relative z-10 p-6 w-full md:flex-row text-white">
            <div className="flex flex-col gap-4 items-center justify-center w-full">
              <h1 className="text-3xl font-bold text-center">
                Get the Best Comfort in Our Hotel
              </h1>
              <p className="text-center">
                Experience the best comfort at Levi Home Guest House & Retreat
                Centre, the top choice in Siliguri! <br /> Our AC and Non-AC
                rooms are designed for ultimate relaxation, offering a clean,
                peaceful, and homely stay. <br /> With exceptional service and a
                prime location, we ensure a hassle-free and cozy experience.
                Book your stay today and feel at home with us! Comfort
                redefined!
              </p>

              <button
                onClick={toggleBookingModal}
                className="bg-white text-xl text-defined-green py-2 px-8 rounded-sm transition-all duration-300 font-semibold hover:bg-gray-200"
              >
                Book Now!
              </button>
            </div>
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
      </div>
    </div>
  );
};

export default HotelSection;
