import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";

const HomeStayContent = () => {
  return (
    <div className="w-full md:w-1/2 md:pl-4">
      <p className="text-defined-green text-xl mt-2">About Us</p>
      <h1 className="text-3xl text-defined-blue font-bold">Levi Homestay</h1>
      <p className="text-gray-500">
        Welcome to <span className="text-defined-blue">Levi Homestay</span>,
        your home away from home in the heart of Siliguri! Renowned as the
        finest homestay experience in the region, we take pride in offering
        unparalleled comfort and hospitality to travelers seeking a memorable
        stay. Whether you're visiting for business or leisure, our thoughtfully
        designed AC and non-AC rooms cater to every need, ensuring a cozy and
        relaxing environment. <br />
        At <span className="text-defined-blue">Levi Homestay</span>, we
        understand that modern travelers value connectivity, which is why we
        provide complimentary high-speed Wi-Fi throughout the property. Our warm
        and inviting ambiance makes you feel instantly at ease, while our
        attentive staff ensures all your needs are met with a personal touch.
        Located strategically in Siliguri, our homestay serves as an ideal base
        to explore the city’s vibrant culture, local attractions, and nearby
        destinations. <br />
        Choose <span className="text-defined-blue">Levi Homestay</span> for an
        unforgettable experience where comfort meets affordability. We’re not
        just a place to stay; we’re your gateway to discovering the true essence
        of Siliguri. Come, be part of our family!
      </p>
      <div className="flex gap-8 p-4 text-xl">
        <div className="flex items-center gap-2">
          <IoCheckmarkDoneCircleOutline className="text-defined-orange" />{" "}
          <span className="text-defined-blue">Great travel Experiences</span>
        </div>
        <div className="flex items-center gap-2">
          <FaRupeeSign className="text-defined-orange" />{" "}
          <span className="text-defined-blue">Competitive Pricing Offers</span>
        </div>
      </div>
      <div className="flex justify-center md:justify-start"> 
        <button
          // onClick={toggleAppointmentModal}
          className="bg-defined-green text-white text-xl py-2 px-8 rounded-md transition-all duration-300 font-semibold hover:bg-green-700"
        >
          Inquiry Now
        </button>
      </div>
    </div>
  );
};

export default HomeStayContent;
