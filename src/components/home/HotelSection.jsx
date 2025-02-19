import { useState } from "react";
import CustomerFormCard from "../cards/CustomerFormCard";

const HotelSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleBookingModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
                Experience the best comfort at Levi Homestay, the top choice in
                Siliguri! <br /> Our AC and Non-AC rooms are designed for
                ultimate relaxation, offering a clean, peaceful, and homely
                stay. <br /> With exceptional service and a prime location, we
                ensure a hassle-free and cozy experience. Book your stay today
                and feel at home with us! Comfort redefined!
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
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50"
            onClick={toggleBookingModal} 
          >
            <div
              className="w-[90%] max-w-md p-6 rounded-lg shadow-lg relative"
              onClick={(e) => e.stopPropagation()} 
            >
              <button
                onClick={toggleBookingModal}
                className="absolute cursor-pointer top-6 right-11 z-40 text-2xl opacity-50 text-gray-700 hover:text-red-500 bg-white"
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
