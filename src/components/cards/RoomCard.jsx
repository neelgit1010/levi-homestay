import Image from "next/image";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineGroup } from "react-icons/md";
import { PiHamburgerDuotone } from "react-icons/pi";

const RoomCard = ({ roomInfo }) => {

  const handleBooking = (name) => {
    const dest = "+917439972241";
    const message = `Hello! I am interested in: ${name}%0AThank You!`;
    const url = `https://api.whatsapp.com/send?phone=${dest}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank").focus();
  };


  const items = [
    {
      icon: <FaRupeeSign />,
      name: "AC",
      value: roomInfo.ac,
    },
    {
      icon: <FaRupeeSign />,
      name: "Non-AC",
      value: roomInfo.nonAc,
    },
    {
      icon: <MdOutlineGroup />,
      name: "Guest",
      value: roomInfo.guest,
    },
    {
      icon: <PiHamburgerDuotone />,
      name: "Food",
      value: roomInfo.food,
    },
  ];
  return (
    <div className="rounded-md shadow-lg w-full h-full">
      <div className="w-full">
        <Image
          src={roomInfo.img}
          alt="single"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>

      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          {items &&
            items.map((item, index) => (
              <div className="flex gap-1 flex-col justify-center items-center">
                <div className="text-2xl text-defined-orange">{item.icon}</div>
                <div className="text-defined-blue">{item.name}</div>
                <div className="text-defined-blue">{item.value}</div>
              </div>
            ))}
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <div>
            <h1 className="text-defined-blue text-3xl font-semibold text-center">
              {roomInfo.name}
            </h1>
          </div>
          <button className="bg-defined-green text-white py-2 px-8 rounded-sm transition-all duration-300 font-semibold hover:bg-green-700 w-[90%]"
            onClick={() => handleBooking(roomInfo.name)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
